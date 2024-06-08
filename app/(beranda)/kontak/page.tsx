import Image from "next/image";

export default function Kontak() {
  return (
  <div className="container mx-auto px-4 lg:px-0">
    <div className="sm:flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mt-20 mb-4 text-gray-900">Hubungi Kami</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base larger-text">Punya pertanyaan seputar Jetly? Jangan ragu untuk mengisi formulir di bawah ini. Tim Jetly akan berusaha untuk menjawab pertanyaan Anda dalam waktu 1x24 jam.</p>
    </div>
    
    <div className="lg:w-1/2 md:w-2/3 mx-auto px-4 lg:px-0">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-full sm:w-1/2">
          <div className="relative">
            <label id="name" className="leading-7 text-sm text-[#000000] font-medium">Nama</label>
            <input className="w-full bg-white bg-opacity-50 p-2 mt-1 px-8 leading-8 rounded-xl border focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 resize-none transition-colors duration-200 ease-in-out" type="text" name="nama" placeholder="Masukkan nama"/>
          </div>
        </div>
        <div className="p-2 w-full sm:w-1/2">
          <div className="relative">
            <label id="email" className="leading-7 text-sm text-[#000000] font-medium">Email</label>
            <input className="w-full bg-white bg-opacity-50 p-2 mt-1 px-8 leading-8 rounded-xl border focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 resize-none transition-colors duration-200 ease-in-out" type="text" name="email" placeholder="Masukkan email"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label id="message" className="leading-7 text-sm text-[#000000] font-medium">Pesan</label>
            <textarea id="message" name="message" className="w-full mt-1 bg-white bg-opacity-50 rounded-xl border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-2 px-8 resize-none leading-6 transition-colors duration-200 ease-in-out" placeholder="Masukkan pesan"></textarea>
          </div>
        </div>
        <div className="p-2 h-36 w-full">
          <button className="flex mx-auto text-white bg-[#FF735C] border py-2 px-8 focus:outline-none hover:scale-110 duration-300 font-semibold rounded-xl text-lg">Kirim</button>
        </div>
      </div>
    </div>
  </div>
  );
}
