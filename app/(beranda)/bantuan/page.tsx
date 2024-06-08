import Image from "next/image";

export default function Bantuan() {
  return (
    <section id="home" className="pt-8 lg:pt-16 pb-16">
    <div className="container mx-auto px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 px-4">
          <div>
            <Image 
                src={"/bantuan.png"}
                width={450}
                height={450}
                alt="home"
                className="max-w-full mx-auto"
                unoptimized
              />
          </div>
        </div>

        <div className="w-full lg:w-1/2 px-4 lg:pl-7 pt-24">
          <h1 className="text-xl font-bold text-hitam md:text-2xl lg:text-4xl">
            Bantuan
          </h1>
          <p className="pt-4 mb-4">
            Untuk bantuan lebih lanjut, silakan hubungi dibawah ini
          </p>
          <a href="mailto:jetly@gmail.com" className="text-base font-light text-[#FF735C] underline"
            >jetly@gmail.com
          </a>
        </div>
      </div>
    </div>
  </section>
  );
}