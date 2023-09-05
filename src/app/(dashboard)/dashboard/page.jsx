"use client"

import ModalPopup from '@/components/modalpopup/modalpopup'
import { verifyJwt } from '@/utils/jwt'
import { Spinner } from 'flowbite-react'
import { useSession } from 'next-auth/react'
import React from 'react'

const Dashboard = () => {
  const session = useSession()
  const accessToken = session?.data?.user?.accessToken

  if (session.status == 'loading' ) {
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
        <div>
          <section className="sm:ml-44 dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome to Dashboard</h1>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <p className="font-bold text-2xl text-gray-900">Mimin Sangkima</p>
              </div>
            </div>
          </section>
        </div>
      )
    }
    </>
  )
}

export default Dashboard
