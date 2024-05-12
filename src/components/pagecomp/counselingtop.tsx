import Image from "next/image";

import PersonalProblem from "../../../public/PersonalProblem.png";
import Sharing from "../../../public/Sharing.png";
import Bullying from "../../../public/Bullying.png";

export default function Counseling() {
  return (
    <main id="Topics">
      <div className="bg-oceanb  sm:w-full xl:w-[600px] h-[200px] items-center flex sm:justify-center xl:justify-normal xl:rounded-r-xl sm:rounded-none">
        <div className="xl:w-[100px] sm:w-0"></div>
        <h1 className="text-white text-center text-[48px] font-bold">
          Counseling Topics
        </h1>
      </div>
      <div className="flex justify-center ">
        <div className="flex flex-col xl:flex-row justify-center gap-24 mt-24 pb-24">
          <div className="flex justify-center items-start w-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex justify-center">
                <div></div>
                <Image src={PersonalProblem} alt="Personal Problem" />
                <div></div>
              </div>
              <div className="text-gray-500 ">
                <h1 className="text-xl text-center font-semibold">
                  Personal Problem
                </h1>
                <p className="text-justify text-[18px]">
                  Personal problem adalah masalah yang dimiliki oleh individu
                  dan dianggap sebagai kesalahan individu itu sendiri. Personal
                  problem dapat menghambat seorang individu sehingga terganggu
                  atau bahkan tidak dapat menjalankan peranannya dengan baik.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-start w-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex justify-center">
                <div></div>
                <Image src={Sharing} alt="Sharing" />
                <div></div>
              </div>
              <div className=" text-gray-500">
                <h1 className="text-xl text-center font-semibold">Sharing</h1>
                <p className="text-justify text-[18px] font-light">
                  adalah cara untuk menceritakan masalah personal kepada
                  orang-orang yang dianggap dekat, seperti keluarga, pasangan,
                  atau pekerjaan. Curhat lebih dari sekadar bercerita, dan bisa
                  menjadi cara untuk mengatasi masalah dan menemukan solusi.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-start w-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex justify-center">
                <div></div>
                <Image src={Bullying} alt="Bullying" />
                <div></div>
              </div>
              <div className="text-gray-500 ">
                <h1 className="text-xl text-center font-semibold">Bullying</h1>
                <p className="text-justify text-[18px]">
                  Bullying adalah tindakan agresif yang dilakukan untuk
                  mengintimidasi atau mendominasi orang lain yang dinilai lebih
                  lemah. Bullying dapat berupa verbal, non-verbal, atau
                  psikologis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
