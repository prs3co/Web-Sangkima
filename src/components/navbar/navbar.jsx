"use client"

import Image from 'next/image'
import logoKutim from 'public/logoKutim.png'
import Link from 'next/link'

import { useState } from "react";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-green-400 border-gray-200 shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                      <a href="/" className="flex items-center">
                        <Image src={logoKutim} className="h-8 mr-3" width={30} height={30} alt="Flowbite" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-green-700">Sangkima</span>
                      </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="font-medium items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-green-700 hover:text-green-800">
                              <Link href="/profile">
                                Profile
                              </Link>
                            </li>
                            <li className="text-white hover:text-green-800">
                              <Link href="/statistik">
                                Statistik
                              </Link>
                            </li>
                            <li className="text-white hover:text-green-800">
                              <Link href="/blog">
                                Berita
                              </Link>
                            </li>
                            <li className="text-white hover:text-green-800">
                              <Link href="/pemerintahan">
                                Pemerintahan
                              </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

// import Image from 'next/image'
// import logoKutim from 'public/logoKutim.png'
// import Link from 'next/link'

// const Navbar = () => {
//     return (
//         <nav className="bg-green-400 border-gray-200 dark:bg-gray-900">
//           <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//             <a href="/" className="flex items-center">
//               <Image src={logoKutim} className="h-8 mr-3" width={30} height={30} alt="Flowbite" />
//               <span className="self-center text-2xl font-semibold whitespace-nowrap text-green-700">Sangkima</span>
//             </a>
//             <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
//               <span className="sr-only">Open main menu</span>
//               <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
//             </button>
//             <div className="hidden w-full md:block md:w-auto" id="navbar-default">
//               <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-green-400 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//                 <li>
//                   <Link href="/profile" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-green-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
//                       Profile
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/statistik" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-green-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent">
//                     Statistik
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/blog" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-green-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent">
//                     Berita
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/pemerintahan" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-green-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent">
//                     Pemerintahan
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//     )
// }

// export default Navbar