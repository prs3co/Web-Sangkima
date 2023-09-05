'use client'

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Label, Spinner, Table, TextInput, Textarea } from "@/components/flowbite-components/flowbite-components";
import dummyImage from 'public/dummy_700x400.png'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { verifyJwt } from "@/utils/jwt";
import dynamic from "next/dynamic";
import 'suneditor/dist/css/suneditor.min.css';
import ModalPopup from '@/components/modalpopup/modalpopup';

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

export default function AddBlog() {
  const [imageSrc, setImageSrc] = useState(dummyImage);
  const [uploadData, setUploadData] = useState('');
  const [content, setContent] = useState('');
  const session = useSession()
  const router = useRouter()
  const author = session?.data?.user?.name
  const accessToken = session?.data?.user?.accessToken

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

  function handleContentChange(content) {
    setContent(content)
  }

  async function handleOnSubmit(event) {
    event.preventDefault();
    const title = event.target[0].value

    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(({ name }) => name === 'fileInput');

    const formData = new FormData();

    for ( const file of fileInput.files ) {
      formData.append('file', file);
    }

    formData.append('upload_preset', 'web-desa-sangkima');

    try {
      if (!accessToken || !verifyJwt(accessToken)) {
        <ModalPopup />
      } else {
        const data = await fetch('https://api.cloudinary.com/v1_1/web-desa-sangkima/image/upload', {
            method: 'POST',
            body: formData
        }).then(r => r.json());

        const dataAdd = await fetch('/api/blog', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': accessToken,
            },
            body: JSON.stringify({
              title,
              image: data.secure_url,
              content,
              author,
            })
        })

        router.push('/dashboard/blog')
      }
    } catch (error) {
      console.log(error)
    }
    // router.push('/dashboard/blog')

    // setImageSrc(data.secure_url);
    // setUploadData(data.secure_url);
  }

  if (session.status == 'loading') {
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
    {
      !accessToken || !verifyJwt(accessToken) ? (
        <>
          <ModalPopup />
        </>
      ) : (
        <div className="sm:ml-56 mr-12 mt-5">
          <form className="" onSubmit={handleOnSubmit} onChange={handleOnChange} >
            <div>
              <div className="mb-2 block">
                <Label className="text-gray-700" value="Judul : " />
              </div>
              <TextInput type="text" name='title' required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label className="text-gray-700" value="Isi Konten : " />
              </div>
              <SunEditor
                setDefaultStyle="font-family: 'Inter', sans-serif; font-size: 0.875rem;"
                setOptions={{
                  showPathLabel: false,
                  minHeight: "50vh",
                  maxHeight: "50vh",
                  buttonList: [
                    ["undo", "redo"],
                    ["paragraphStyle"],
                    [
                      "bold",
                      "underline",
                      "italic",
                      "strike",
                      "subscript",
                      "superscript"
                    ],
                    ["removeFormat"],
                    "/", // Line break
                    ["outdent", "indent"],
                    ["align", "horizontalRule"],
                    ["table", "link"]
                  ],
                  formats: ["p", "ul", "li", "ol", "div", "h1", "h2", "h3", "h4", "h5", "h6"],
                }}
                onChange={handleContentChange}
              />
            </div>
            <div>
              <div className='my-3 block'>
                <Image className='h-auto max-w-xl rounded-lg shadow-xl dark:shadow-gray-800' src={imageSrc} alt='image' width={700} height={400} />
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