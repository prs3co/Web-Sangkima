'use client'

import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image';
import { Avatar, Spinner, Table } from "@/components/flowbite-components/flowbite-components";
import Link from 'next/link'
import useSWR from "swr";
import { useSession } from 'next-auth/react';
import ModalPopup from '@/components/modalpopup/modalpopup';
import { verifyJwt } from '@/utils/jwt';


export default function Potensi() {
  const session = useSession()
  const accessToken = session?.data?.user.accessToken

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/potency`,
    fetcher
  );

  async function handleDelete(id) {
    try {
      await fetch(`/api/potency/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': accessToken,
        },
      })
      mutate()
    } catch (error) {
      console.log(error)
    }
  }

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
    //
    <>
    {
      !accessToken || !verifyJwt(accessToken) ? (
        <>
          <ModalPopup />
        </>
      ) : (
        <>
          <div className="my-5 flex flex-col items-center justify-center">
            <Link href='/dashboard/potensi/add'>
              <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">+ Tambah Data</button>
            </Link>
          </div>
          <div className="sm:ml-44">
            <Table className="">
              <Table.Head>
                <Table.HeadCell className="bg-stone-950 text-stone-50 py-5">
                    NOMOR
                </Table.HeadCell>
                <Table.HeadCell className="bg-stone-950 text-stone-50 py-5">
                    TITLE
                </Table.HeadCell>
                <Table.HeadCell className="bg-stone-950 text-stone-50 py-5">
                    GAMBAR
                </Table.HeadCell>
                <Table.HeadCell className="bg-stone-950 text-stone-50 py-5">
                    ACTION
                </Table.HeadCell>
              </Table.Head>
              {data?.map((potency, index) => (
                <Table.Body className="divide-y" key={potency._id}>
                {/* {data != null && data.map((res, index) => {
                    return ( */}
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap font-medium text-grdark:text-white">
                          {/* {index + 1} */}
                          {index + 1}
                      </Table.Cell>
                      <Table.Cell>
                        {potency.title}
                          {/* {res.title} */}
                      </Table.Cell>
                      <Table.Cell>
                      <Avatar
                        img={potency.image}
                        size="xl"
                      />
                          {/* {truncateDescriptionListTable(res.job_qualification)} */}
                      </Table.Cell>
                      <Table.Cell>
                        <div className="flex flex-wrap gap-2">
                          <div>
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                              <Link href={`/dashboard/potensi/${potency._id}`}>
                                Edit
                              </Link>
                            </button>
                          </div>
                          <div>
                            <button
                            type="button"
                            onClick={() => handleDelete(potency._id)}
                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                Delete
                            </button>
                          </div>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                    {/* )
                  })} */}
                </Table.Body>
              ))}
            </Table>
          </div>
        </>
      )
    }
    </>
  )
}