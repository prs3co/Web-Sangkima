'use client';

import { verifyJwt } from '@/utils/jwt';
import { Button, Modal, Spinner, } from '@/components/flowbite-components/flowbite-components';
import { signOut, useSession } from 'next-auth/react';

function ModalPopup() {
  const session = useSession()
  const accessToken = session?.data?.user?.accessToken

  return (
    <>
    {
      !accessToken || !verifyJwt(accessToken) ? (
        <Modal show={true} size="md" popup onClose={() => signOut()} >
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <svg className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Sesi anda telah habis. Silahkan login kembali
              </h3>
              <div className="flex justify-center gap-4">
                <Button color="failure" onClick={() => signOut() }>
                  Ok
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      ) : (
        null
      )
    }
    </>
  )
}

export default ModalPopup
