import Image from 'next/image';
import Link from 'next/link';
import LoginAccount from './_login-account';

export default function Masuk() {
  return (
    <section className="p-6">
      <div className="md:flex md:items-center md:justify-center">
        <div className="md:w-1/2 md:ml-20">
          <p className="mt-10 text-center md:text-left text-5xl md:text-5xl font-bold">Selamat Datang</p>
          <p className="mt-2 text-center md:text-left text-5xl md:text-5xl font-bold">di Jetly</p>
          <p className="mt-4 md:text-left text-justify text-base md:text-lg font-normal">Perpendek Link, Percepat Aksesmu, Bergabunglah Sekarang!</p>
          <div className="rounded-2xl mt-4 mx-auto md:ml-0 hidden md:block">
            <Image src={'/masuk.png'} width={500} height={500} alt="login" className="rounded-2xl" unoptimized />
          </div>
        </div>
        <div className="md:w-1/2 px-5 mr-9 ml-5">
          <LoginAccount />
        </div>
      </div>
    </section>
  );
}
