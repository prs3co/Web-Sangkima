import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Spinner } from '@/components/flowbite-components/flowbite-components'

async function getData() {
  const res = await fetch(`${process.env.URL_LOCAL}/api/staff`, {
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Pemerintahan = async () => {
  const data = await getData()

    return (
        <>
          <div className="mt-5 mb-7 underline flex justify-center items-center">
            <span className="font-bold text-3xl text-green-700 mr-3">Struktur</span>
            <span className="font-bold text-3xl text-gray-700 mr-3">Organisasi</span>
          </div>
          <div className="overflow-x-auto mt-10 grid grid-cols-1 sm:grid-cols-4 gap-4 mx-12 mb-5">
          {
            data ? (
              data?.map((staff) => (
                <div className="col-span-1 max-w-sm bg-white border border-gray-200 rounded-b-lg shadow dark:bg-gray-800 dark:border-gray-700" key={staff._id}>
                  <figure className="max-w-lg">
                    <Image className="h-[400px] w-[400px]" src={staff.image} width={400} height={300} alt={staff.name} />
                    <figcaption className="mt-6 text-xl px-5 text-center text-gray-500 dark:text-gray-400">{staff.department}</figcaption>
                    <figcaption className="mt-4 pb-2 px-5 font-bold text-2xl text-center text-gray-900 dark:text-gray-400">{staff.name}</figcaption>
                  </figure>
                </div>
                ))
            ) : (
              <div className='text-center mt-[50vh]'>
                <Spinner
                  aria-label="Extra large spinner example"
                  size="xl"
                  color='success'
                />
              </div>
            )
          }
          </div>
        </>
  )
}

export default Pemerintahan