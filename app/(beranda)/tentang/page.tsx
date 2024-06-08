import Image from "next/image";

export default function Tentang() {
  return (
    <section id="about" className="pt-20 pb-20 lg:pt-34 lg:pb-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center">
              <Image 
                src={"/tentang.png"}
                width={450}
                height={450}
                alt="home"
                className="w-5/6 md:w-3/6 lg:w-1/2 mb-10 object-cover object-center rounded"
                unoptimized
              />
              
              <div className="max-w-xl mx-auto text-center mb-16">
                <h2 className="font-bold text-3xl mb-4 sm:text-4xl lg:text-3xl">Satu tautan, banyak kemungkinan</h2>
                <p className="font-normal text-md md:text-lg">Perjalanan kami dimulai dengan ide sederhana: mengubah kekacauan URL yang panjang menjadi tautan yang ringkas dan mudah dibagikan. Tapi visi ini dengan cepat berkembang menjadi misi untuk memberdayakan individu dan organisasi untuk menjelajahi lanskap digital dengan mudah.</p>
              </div>

              <div className="max-w-xl mx-auto text-center mb-16">
                <h2 className="font-bold text-3xl mb-4 sm:text-4xl lg:text-3xl">Mari jelajahi dunia Jetly</h2>
                <p className="font-normal text-md md:text-lg">Menghubungkan hati melalui tautan</p>
              </div>
            </div>

              <div className="container mt-0 mx-auto px-4">
                <div className="flex flex-wrap -m-4">
                  <div className="p-4 md:w-1/3">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 bg-opacity-80 shadow-2xl rounded-lg overflow-hidden">
                      <img className="h-36 w-36 mx-auto mt-5 object-cover object-center" src="visi.png" alt="blog"/>
                      <div className="p-6">
                        <h1 className="title-font text-lg font-medium text-gray-900 text-center mb-3 mt-2">VISI</h1>
                        <p className="leading-relaxed mb-3 text-center">Menjadi website pemendek URL terdepan dan terpercaya di Indonesia yang membantu pengguna untuk membagikan tautan dengan mudah, efektif, dan efisien.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 md:w-1/3">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 bg-opacity-80 shadow-2xl rounded-lg overflow-hidden">
                      <img className="h-36 mt-7 object-cover object-center mx-auto" src="misi.png" alt="blog"/>
                      <div className="p-6">
                        <h1 className="title-font text-lg font-medium text-gray-900 text-center mb-3">MISI</h1>
                        <p className="leading-relaxed mb-3 text-center">Website pemendek URL yang mudah, inovatif, aman, dan terpercaya untuk menjangkau lebih banyak orang dan menjadi pemimpin pasar.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 md:w-1/3">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 bg-opacity-80 shadow-2xl rounded-lg overflow-hidden">
                      <img className="h-36 w-30 mx-auto mt-5 object-cover object-center" src="value.png" alt="blog"/>
                      <div className="p-6">
                        <h1 className="title-font text-lg font-medium text-gray-900 text-center mb-3 mt-2">VALUE</h1>
                        <p className="leading-relaxed mb-3 text-center">Hemat waktu dan tenaga dengan membuat tautan menjadi sederhana, aman dari pelacakan berbahaya, membuat tautan menjadi mudah diingat karena pendek dan rapi sehingga menciptakan kesan profesional.</p>
                      </div>
                    </div>
                  </div>
              </div>
      
            <div className="max-w-xl mx-auto text-center mt-36 mb-5">
              <h2 className="font-bold text-3xl mb-4 sm:text-4xl lg:text-3xl">Jetly Itu</h2>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-5 mt-16 sm:mt-38 py-10 sm:space-y-0 space-y-6">
              <div className="p-4 md:w-1/4 flex flex-col text-center items-center mb-0">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-5 flex-shrink-0">
                  <img className="lg:h-38 w-50 object-cover object-center mx-auto" src="feather.png"/>
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                </div>
                <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Ease</h2>
                    <p className="padding-left: 20px; padding-right: 30px;">Buat dan bagikan tautan dengan mudah dan cepat, tanpa perlu repot-repot menyalin dan menempelkan URL panjang yang rumit.</p>
                </div>
              </div>

                <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-5 flex-shrink-0">
                    <img className="lg:h-38 w-50 object-cover object-center mx-auto" src="shield.png"/>
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Security</h2>
                    <p className="padding-left: 20px; padding-right: 30px;">Bagikan tautan tanpa rasa khawatir, karena website pemendek URL terpercaya menjamin keamanan tautan dari malware dan pelacakan berbahaya.</p>
                  </div>
                </div>

                <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-5 flex-shrink-0">
                    <img className="lg:h-38 w-50 object-cover object-center mx-auto" src="rocket.png"/>
                      <circle cx="12" cy="7" r="4"></circle>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Effectiveness</h2>
                    <p className="padding-left: 20px; padding-right: 30px;">Dapatkan lebih banyak klik dan traffic dengan tautan pendek yang mudah diingat dan dibagikan di berbagai platform online.</p>
                  </div>
                </div>

                <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-5 flex-shrink-0">
                    <img className="lg:h-38 w-50 object-cover object-center mx-auto" src="magnifying-glass.png"/>
                      <circle cx="12" cy="7" r="4"></circle>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Perfectionism</h2>
                    <p className="padding-left: 20px; padding-right: 30px;">Tampilkan kesan profesional dengan tautan pendek yang rapi dan branded (untuk fitur tertentu), cocok untuk penggunaan dalam email, dokumen, dan presentasi.</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </section>
  );
}
