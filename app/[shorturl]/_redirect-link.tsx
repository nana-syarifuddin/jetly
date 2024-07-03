'use client';

import { Link } from '@prisma/client';
import React, { useEffect } from 'react';
import Image from 'next/image';

const RedirectLink = ({ link }: { link: Link | null }) => {
  if (!link) {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col h-screen">
              <div className="text-center lg:w-2/3 w-full mb-8">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Link Tidak Ditemukan</h1>
                <p className="mb-8 leading-relaxed text-gray-900">Maaf, tautan tidak ditemukan</p>
              </div>
              <Image 
                      src={"/not.png"}
                      width={500}
                      height={500}
                      alt="notfound"
                      className="lg:w-1/6 md:w-3/6 w-5/6 mb-8 object-cover object-center rounded"
                      unoptimized
                />
            </div>
          </section>
    );
  }

  useEffect(() => {
    if (link) {
    //   window.location.hostname = link.url;
        window.location.href = link.url.includes('https://') ? link.url : `https://${link.url}`;
    }
  }, []);

  return (
      <section className="py-72">
        <div
          className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-center overflow-hidden md:flex md:px-16"
        >
          <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <div
              className="flex-none mt-14 md:mt-0 md:max-w-xl text-center md:text-left"
            >
              <img
                className="h-16 mx-auto md:mx-0"
                src="/jetly.png"
                alt="Jetly Logo"
              />
            </div>
            <h3 className="text-center md:text-left">
              You are being redirected to .....
            </h3>
          </div>
        </div>
      </section>
  );
};

export default RedirectLink;
