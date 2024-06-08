import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-[#385A64]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between flex-col md:flex-row">
              <div className="mb-6 md:mb-0">
                  <a href="/" className="flex items-center">
                    <Image 
                        src={"/jetly2.png"}
                        width={200}
                        height={200}
                        alt="logo"
                    />
                  </a>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2 p-10">
                  <div className="pr-12 mb-8 md:mb-0">
                      <h2 className="mb-6 text-sm font-bold text-white uppercase dark:text-white">
                          Perusahaan
                      </h2>
                      <ul className="text-white dark:text-gray-400 font-medium">
                          <li className="mb-4">
                            <Link href="/tentang" className="hover:underline"> 
                                Tentang
                            </Link>
                          </li>
                          <li>
                            <Link href="/bantuan" className="hover:underline">
                                Bantuan
                            </Link>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <h2 className="mb-6 text-sm font-bold text-white uppercase dark:text-white">
                          Dukungan
                      </h2>
                      <ul className="text-white dark:text-gray-400 font-medium">
                        <li>
                            <Link href="/kontak" className="hover:underline">Kontak</Link>
                        </li>
                      </ul>
                  </div>
              </div>
          </div>
          <hr
              className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
          />
          <div className="text-center">
            <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2024 
                <Link href="/" className="hover:underline"> Jetly
                </Link>. Terms of Service.
            </span>
          </div>
      </div>
  </footer>  
  )
}

export default Footer