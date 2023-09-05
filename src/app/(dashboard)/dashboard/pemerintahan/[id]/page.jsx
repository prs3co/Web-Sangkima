'use client'

import { useState } from 'react';
import Image from 'next/image';
import { Label, Select, Spinner, Table, TextInput, Textarea } from "@/components/flowbite-components/flowbite-components";
import { useSession } from 'next-auth/react';
import useSWR from 'swr';
import { useRouter } from 'next/navigation';
import ModalPopup from '@/components/modalpopup/modalpopup';
import { verifyJwt } from '@/utils/jwt';

export default function UpdatePemerintahan({ params }) {
  const [imageSrc, setImageSrc] = useState('');
  const [uploadData, setUploadData] = useState('');
  const session = useSession()
  const router = useRouter()
  const author = session?.data?.user.name
  const accessToken = session?.data?.user.accessToken

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/staff/${params.id}`,
    fetcher
  );

  function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function(onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    }

    if (changeEvent.target.files) {
      reader.readAsDataURL(changeEvent.target.files[0]);
    }
  }

  async function handleOnSubmit(event) {
    event.preventDefault();
    const name = event.target[0].value
    const department = event.target[1].value

    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(({ name }) => name === 'fileInput');

    const formData = new FormData();

    for ( const file of fileInput.files ) {
      formData.append('file', file);
    }

    formData.append('upload_preset', 'web-desa-sangkima');

    try {
      if (!accessToken || !verifyJwt(accessToken)) {
        return (
          <ModalPopup />
        )
      } else {
        if (imageSrc !== data.image) {
          const data = await fetch('https://api.cloudinary.com/v1_1/web-desa-sangkima/image/upload', {
            method: 'POST',
            body: formData
          }).then(r => r.json());

          setImageSrc(data.secure_url)
        }

        const dataUpdate = await fetch(`/api/staff/${params.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken,
          },
          body: JSON.stringify({
            name,
            image: imageSrc,
            department,
          })
        })

        router.push('/dashboard/pemerintahan')
      }
    } catch (error) {
      console.log(error)
    }
    // router.push('/dashboard/pemerintahan')

    // setImageSrc(data.secure_url);
    // setUploadData(data.secure_url);
  }

  const departments = [
    {
      nama: '- Jabatan -',
      value: ''
    },
    {
      nama: 'Kepala Urusan Perencanaan',
      value: 'Kepala Urusan Perencanaan'
    },
    {
      nama: 'Kepala Urusan Keuangan',
      value: 'Kepala Urusan Keuangan',
    },
    {
      nama: 'Kepala Urusan Umum',
      value: 'Kepala Urusan Umum',
    },
    {
      nama: 'Kepala Seksi Kesejahteraan',
      value: 'Kepala Seksi Kesejahteraan',
    },
    {
      nama: 'Kepala Seksi Pelayanan',
      value: 'Kepala Seksi Pelayanan',
    },
    {
      nama: 'Sekretaris Desa',
      value: 'Sekretaris Desa',
    },
    {
      nama: 'Kepala Desa',
      value: 'Kepala Desa',
    },
  ]

  if (session.status == 'loading' || isLoading ) {
    return (
      <div className='text-center mt-[50vh]'>
        <Spinner
          aria-label="Extra large spinner example"
          size="xl"
          color='success'
        />
      </div>
    )
  }

  return (
    <>
    { !accessToken || !verifyJwt(accessToken) ? (
      <div>
        <ModalPopup />
      </div>
    ) : (
    <div className="sm:ml-56 mr-12 mt-5">
      <form className="" onSubmit={handleOnSubmit} onChange={handleOnChange} >
        <div>
          <div className="mb-2 block">
            <Label className="text-gray-700" value="Nama : " />
          </div>
          <TextInput type="text" name='title' required defaultValue={data.name} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label className="text-gray-700" value="Jabatan : " />
          </div>
          <Select
          id="countries"
          required
          defaultValue={data.department}
        >
          {
            departments.map((department, index) => (
              <option key={index} value={department.value} >
                {department.nama}
              </option>
            ))
          }
        </Select>
        </div>
        <div>
          <div className='my-3 block'>
          <Image className='max rounded-lg shadow-xl dark:shadow-gray-800' src={imageSrc ? imageSrc : data.image} alt='image' width={300} height={400} />
          </div>
          <div className="mb-2 block">
            <Label className="text-gray-700" value="Upload File : " />
          </div>
          <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" name='fileInput' />
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
        </div>
        <button type="submit" className="mt-3 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Submit
        </button>
      </form>
    </div>
    )
    }
    </>
  )
}