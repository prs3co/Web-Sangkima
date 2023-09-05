
import React from 'react'
import Link from 'next/link'
import parse from "html-react-parser";
import Image from 'next/image'
import { Spinner } from '@/components/flowbite-components/flowbite-components';
import useSWR from 'swr'

async function getData(id) {
  const res = await fetch(`${process.env.URL_LOCAL}/api/blog/${id}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const DetailBlog = async ({ params }) => {
  const data = await getData(params.id)

  return (
    <>
    { data ? (
      <>
        <div className="flex justify-center sm:my-5">
          <figure className="max-w-lg">
            <Image className="h-auto max-w-full sm:rounded-lg" src={data.image} width={800} height={400} alt={data.title} />
          </figure>
        </div>

        {/* Cerita */}
        <div className="sm:mx-12 pt-10 px-4 sm:px-8 sm:px-16 mb-7 underline">
          <span className="font-bold text-2xl text-green-700 mr-3">{data.title}</span>
        </div>

        <div className='sm:mx-12 px-4 pb-5 sm:px-8 sm:px-16 text-justify text-gray-500 dark:text-gray-400'>
          {parse(data.content)}
        </div>
      </>
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
    </>
  )
}

export default DetailBlog