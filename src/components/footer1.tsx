import Image from "next/image";

import RedButton from "./redbutton";

import Arrow from "@/../public/Ui/Arrow_right_long.svg";

export default function Footer1() {
  return (
    <main>
      <div className="flex justify-center">
        <div className="flex mt-36 justify-between xl:gap-[430px] sm:gap-[215px]">
          <div className="flex items-center">
            <p className="xl:text-xl sm:text-2xl text-oceanb font-medium">Continue without personal data</p>
            <Image src={Arrow} alt="Icon" />
          </div>
          <div className="sm:mr-5 xl:mr-0">
            <RedButton BtnType="button" BtnText="Next" Navigate="/counselingform/form2" />
          </div>
        </div>
      </div>
    </main>
  );
}
