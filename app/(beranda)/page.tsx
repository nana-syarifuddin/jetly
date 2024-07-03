import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-16">
          <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <h2 className="text-3xl text-black font-extrabold md:text-4xl">
              Persingkat <span className="text-[#FF735C]">tautan</span> yang
              panjang secepat jet
            </h2>
            <p>Persingkat, personalisasikan, dan bagikan URL pendekmu</p>
            <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <a
                href=""
                className="block py-2 px-4 text-center text-white font-medium bg-[#FF735C] hover:bg-[#dd513b] active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
              >
                Buat Tautan
              </a>
            </div>
          </div>
          <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
            <Image
              src={"/beranda.png"}
              width={500}
              height={500}
              alt="home"
              className="max-w-full mx-auto"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section>
        <div className="relative items-center w-full px-2 py-8 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <h4 className="font-bold text-center text-lg">Testimoni</h4>
          <h3 className="text-center font-light pb-6">Lihat apa kata mereka</h3>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="flex flex-col w-full max-w-lg text-left lg:mx-auto p-6 bg-[#385A64] rounded-lg">
              <div className="flex justify-center">
                <Image
                  src={"/AMEL.jpg"}
                  width={1000}
                  height={1000}
                  alt="testimonial"
                  className="flex object-cover object-center w-20 h-20 mt-6 rounded-full"
                  unoptimized
                />
              </div>
              <h4 className="font-bold mt-3 mb-3 text-center text-white">
                AMALIA
              </h4>
              <p className="mx-auto font-light leading-relaxed text-white text-center">
                "Sejak menggunakan jetly ini, pekerjaan saya jadi lebih mudah!,
                luar biasa! Sangat user-friendly"
              </p>
            </div>
            <div className="flex flex-col w-full max-w-lg text-left lg:mx-auto p-6 bg-[#385A64] border-opacity-60 rounded-lg">
              <div className="flex justify-center">
                <Image
                  src={"/YASMIN.jpg"}
                  width={1000}
                  height={1000}
                  alt="testimonial"
                  className="flex object-cover object-center w-20 h-20 mt-6 rounded-full"
                />
              </div>
              <h4 className="font-bold mt-3 mb-3 text-center text-white">
                YASMIN
              </h4>
              <p className="mx-auto font-light text-base leading-relaxed text-white text-center">
                "Saya sering membagikan link panjang ke pelanggan, dan aplikasi
                shortlink ini sangat membantu memperpendek dan memanage semua
                link saya. Plus, saya bisa lihat analitiknya juga! Terima
                kasih!"
              </p>
            </div>
            <div className="flex flex-col w-full max-w-lg text-left lg:mx-auto p-6 bg-[#385A64] border-opacity-60 rounded-lg">
              <div className="flex justify-center">
                <Image
                  src={"/NISA.jpg"}
                  width={1000}
                  height={1000}
                  alt="testimonial"
                  className="flex object-cover object-center w-20 h-20 mt-6 rounded-full"
                />
              </div>
              <h4 className="font-bold mt-3 mb-3 text-center text-white">
                ANISA
              </h4>
              <p className="mx-auto font-light text-base leading-relaxed text-white text-center">
                "Shortlink terbaik yang pernah saya gunakan! Membantu menghemat
                waktu dan tenaga dalam mengelola banyak link sekaligus. Hasil
                analitiknya juga sangat mendetail dan mudah dipahami."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}