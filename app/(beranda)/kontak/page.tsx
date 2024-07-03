import Image from "next/image";

export default function Kontak() {
  return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Hubungi Kami
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Punya pertanyaan seputar Jetly? Jangan ragu untuk menghubungi kontak di bawah ini. Tim Jetly akan berusaha untuk menjawab pertanyaan Anda dalam waktu 1x24 jam.
            </p>
          </div>

          <div className="flex flex-wrap justify-center -m-2">
            <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
            <a target="_blank" href={"mailto:jetly@gmail.com"}>  
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg shadow-xl">
                <Image 
                      src={"/google.png"}
                      width={500}
                      height={500}
                      alt="google"
                      className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                      unoptimized
                    />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                      Email
                  </h2>
                </div>
              </div>
              </a>
            </div>

            <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
              <a target="_blank" href={"https://wa.me/+6281213080454"}>  
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg shadow-xl">
                  <Image 
                      src={"/whatsapp.png"}
                      width={500}
                      height={500}
                      alt="whatsapp"
                      className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                      unoptimized
                  />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                      WhatsApp
                  </h2>
                </div>
              </div>
              </a>
            </div>
            
            <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                <a target="_blank" href={"https://www.instagram.com/jetly.shortlink?igsh=MmdoYnd1ZWtrajd3"}>
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg shadow-xl">
                <Image 
                      src={"/instagram.png"}
                      width={500}
                      height={500}
                      alt="instagram"
                      className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                      unoptimized
                  />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Instagram
                  </h2>
                </div>
              </div>
              </a>
            </div>

            <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
              <a target="_blank" href={"https://x.com/jetlyshortlink?s=09"}>
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg shadow-xl">
              <Image 
                      src={"/twitter.png"}
                      width={500}
                      height={500}
                      alt="twitter"
                      className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                      unoptimized
                  />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Twitter
                  </h2>
                </div>
              </div>
              </a>
            </div>
            
            <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
              <a target="_blank" href={"https://www.facebook.com/share/AyoPNG1DBcpZSpxu/?mibextid=qi2Omg"}>
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg shadow-xl">
                <Image 
                      src={"/facebook.png"}
                      width={500}
                      height={500}
                      alt="facebook"
                      className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                      unoptimized
                  />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Facebook
                  </h2>
                </div>
              </div>
              </a>
            </div>
            
            <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
            <a target="_blank" href={"http://www.tiktok.com/@jetlyshortlink"}>
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg shadow-xl">
                <Image 
                      src={"/tik-tok.png"}
                      width={500}
                      height={500}
                      alt="tiktok"
                      className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                      unoptimized
                />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Tiktok
                </h2>
              </div>
            </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
