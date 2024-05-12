import Image from "next/image";

import RedButton from "./redbutton";

import Arrow from "@/../public/Ui/Arrow_right_long.svg";

export default function Footer2() {
  return (
    <main>
      <div className="flex justify-center">
        <div className="flex mt-[40px] justify-between gap-[430px]">
          <div className="flex items-center invisible">
            <p className="text-xl text-oceanb font-medium">Continue without personal data</p>
            <Image src={Arrow} alt="Icon" />
          </div>
          <RedButton BtnType="button" BtnText="Next" Navigate="/counselingform/form3" />
        </div>
      </div>
    </main>
  );
}
