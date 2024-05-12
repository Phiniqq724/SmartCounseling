import facebook from "@/../public/Ui/facebook.png";
import youtube from "@/../public/Ui/youtube.png";
import instagram from "@/../public/Ui/instagram.png";
import whatsapp from "@/../public/Ui/whatsapp.png";

import Image from "next/image";

export default function Footer() {
  return (
    <main>
      <div className="bg-deepb w-full">
        <div className="flex items-center justify-center xl:gap-48 sm:gap-24">
          <div className="h-[458px]"></div>
          <div className="flex flex-col gap-4 text-white w-[435px]">
            <h1 className="font-bold text-xl">Tentang Kami</h1>
            <div className="w-[120px] bg-white h-1"></div>
            <p className="text-sm xl:text-[18px]">
              Bagikan Ceritamu memberikan kebebasan padamu untuk bercerita
              apapun masalahnya dan bertemu dengan para guru BK di sekolah untuk
              mendapat jawaban-jawaban terbaik atas keluh kesahmu tanpa khawatir
              keamanan, karena setiap informasi yang kami terima akan kami jaga
              kerahasiaannya.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-white w-[435px]">
            <h1 className="font-bold text-xl">Social Media</h1>
            <div className="w-[120px] bg-white h-1"></div>
            <div className="flex gap-[20px]">
              <a
                href="https://www.facebook.com/GraciaNusantaraSchoolMalang/?locale=id_ID"
                title="Facebook"
              >
                <Image
                  src={facebook}
                  alt="Facebook"
                  className="hover:scale-105"
                />
              </a>
              <a href="wa.me/6282260033361" title="Whatsapp">
                <Image
                  src={whatsapp}
                  alt="Whatsapp"
                  className="hover:scale-105"
                />
              </a>
              <a
                href="https://www.instagram.com/gracianusantara/"
                title="Instagram"
              >
                <Image
                  src={instagram}
                  alt="Instagram"
                  className="hover:scale-105"
                />
              </a>
              <a
                href="https://www.youtube.com/@sekolahgracianusantara3118"
                title="Youtube"
              >
                <Image
                  src={youtube}
                  alt="Youtube"
                  className="hover:scale-105"
                />
              </a>
            </div>
            <h1 className="font-bold text-xl">Alamat Kami</h1>
            <div className="w-[120px] bg-white h-1"></div>
            <p className="text-[18px]">
              Jl. Bunga Lely No.57, Jatimulyo, Kec. Lowokwaru, Kota Malang, Jawa
              Timur 65141
            </p>
          </div>
        </div>
      </div>
      <div className="bg-oceanb w-full h-[80px]"></div>
    </main>
  );
}
