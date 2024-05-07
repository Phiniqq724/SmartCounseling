import Image from "next/image";

import ExpandRight from "../../public/Ui/Expand_right.svg";
import Input from "./input1";
import Input2 from "./input2";
import Dropdown from "./dropdown";
import Footer1 from "./footer1";

export default function Header1({ HeadText, Head2Text }: any) {
  return (
    <main>
      <div className="flex justify-center sm:ml-6 xl:ml-0">
        <div></div>
        <div className="flex flex-col mt-10">
          <div className="flex text-[16px]">
            <p className="text-oceanb font-medium">PERSONAL DATA</p>
            <Image src={ExpandRight} alt="Icon" />
            <p className="text-greyc font-medium">PROBLEM</p>
            <Image src={ExpandRight} alt="Icon" />
            <p className="text-greyc font-medium">POLICY</p>
          </div>
          <div className="h-[2px] mt-[25px] mb-[50px] bg-greyc xl:w-[1040px] sm:w-[675px]" />
          <h1 className="font-semibold xl:text-4xl sm:text-2xl">{HeadText}</h1>
          <h2 className="text-gray-400 font-semibold mt-[50px] mb-[25px] xl:text-xl sm:text-xl">
            {Head2Text}
          </h2>
          <form action="">
            <div className="flex xl:flex-row sm:flex-col xl:justify-between sm:justify-center">
              <div className="flex flex-col ">
                <Input InText="Name" InType="text" />
                <div className="xl:flex xl:flex-row sm:flex sm:flex-col gap-[5px] mt-[30px] mb-[30px]">
                  <Input2 InText="Class" InType="text" />
                  <div className="sm:mt-[20px] sm:ml-0 xl:mt-0 xl:ml-8">
                    <Input2 InText="Absent" InType="number" />
                  </div>
                </div>
                <Input InText="Student Email" InType="email" />
              </div>
              <div className="flex flex-col">
                <div className="xl:mt-0 sm:mt-4">
                  <Input InText="Date" InType="date" />
                </div>
                <div className="mt-[20px]">
                  <Dropdown
                    DropText="Gender"
                    DropVal1=""
                    DropVal2="Male"
                    DropVal3="Female"
                  />
                  <div className="mt-[30px]">
                    <Input InText="Phone Number" InType="number" />
                  </div>
                </div>
              </div>
            </div>
          </form>
          <Footer1 />
        </div>
        <div></div>
      </div>
    </main>
  );
}
