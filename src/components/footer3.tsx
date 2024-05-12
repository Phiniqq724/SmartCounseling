import Image from "next/image";

import RedButton from "./redbutton";

import Arrow from "@/../public/Ui/Arrow_right_long.svg";

export default function Footer3() {
  return (
    <main>
      <div className="flex justify-center">
        <div className="flex mt-[40px] justify-between gap-[430px]">
          <div className="flex items-center invisible">
            <p className="text-xl text-oceanb font-medium">
              Continue without personal data
            </p>
            <Image src={Arrow} alt="Icon" />
          </div>
          <div className="sm:w-[120px]">
            <RedButton BtnType="submit" BtnText="Submit" Navigate=".." />
          </div>
        </div>
      </div>
    </main>
  );
}
