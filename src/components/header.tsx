import Image from "next/image";

import ExpandRight from "../../public/Ui/Expand_right.svg";

export default function Header() {
  return (
    <main>
      <div className="flex justify-center ">
        <div></div>
        <div className="flex flex-col mt-10">
          <div className="flex mb-[25px]">
            <p className="text-oceanb font-medium">PERSONAL DATA</p>
            <Image src={ExpandRight} alt="Icon" />
            <p className="text-greyc font-medium">PROBLEM</p>
            <Image src={ExpandRight} alt="Icon" />
            <p className="text-greyc font-medium">POLICY</p>
          </div>
          <div className="h-[2px] bg-greyc w-[1040px]" />
        </div>
        <div></div>
      </div>
    </main>
  );
}
