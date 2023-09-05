import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import parse from 'html-react-parser'
import { Spinner } from '@/components/flowbite-components/flowbite-components'

async function getData() {
  const res = await fetch(`${process.env.URL_LOCAL}/api/blog`, {
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Blog = async () => {
  const data = await getData()

  return (
    <>
        <section className="bg-center bg-no-repeat bg-[url('https://i.ibb.co/bLQvtQr/teluk-lombok2.jpg')] bg-gray-700 bg-blend-multiply">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Selamat Datang di Desa Sangkima</h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Berita Seputar Desa Sangkima</p>
            </div>
        </section>

    <div id='berita' className="mx-12 mt-12">
      <span className="font-bold text-3xl text-gray-700 mr-3">Berita</span>
    </div>
    <div className="mb-5 overflow-x-auto mt-10 grid grid-cols-1 sm:grid-cols-4 gap-4 mx-12">
    {
      data ? (
        data?.map((blog) => (
            <div className="col-span-1 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={blog._id}>
              <a href="#">
                <Image className="rounded-t-lg" src={blog.image} alt={blog.title} width={700} height={400} />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</h5>
                </a>
                <div className="h-[144px] text-elipsis overflow-hidden mb-3 font-normal text-gray-700 dark:text-gray-400">{parse(blog.content)}</div>
                <a href={`/blog/${blog._id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Lebih Lanjut
                  <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </a>
              </div>
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



export default Blog