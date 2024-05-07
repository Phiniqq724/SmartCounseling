"use client";
import Image from "next/image";
import { useState } from "react";
import Footer3 from "./footer3";

import ExpandRight from "../../public/Ui/Expand_right.svg";

export default function Header3() {
  const [showButton, setShowButton] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowButton(event.target.checked);
  };

  return (
    <main>
      <div className="flex justify-center xl:w-[1040px] md:w-[520px] sm:mr-10 sm:ml-1 xl:ml-0 xl:mr-0 sm:w-[128px]">
        <div></div>
        <div className="flex flex-col mt-10 md:col-auto">
          <div className="flex">
            <p className="text-greyc font-medium">PERSONAL DATA</p>
            <Image src={ExpandRight} alt="Icon" />
            <p className="text-greyc font-medium">PROBLEM</p>
            <Image src={ExpandRight} alt="Icon" />
            <p className="text-oceanb font-medium">POLICY</p>
          </div>
          <div className="h-[2px] mt-[25px] mb-[50px] bg-greyc xl:w-[1040px] sm:w-[520px]" />
          <h1 className="font-semibold xl:text-4xl sm:text-2xl">3. POLICY</h1>
          <h2 className="text-gray-400 font-semibold mt-[50px] mb-[25px] xl:text-xl sm:text-xl">
            Our policy and terms of service
          </h2>
          <p className="xl:text-xl sm:text-2xl text-justify">
            We have a firm policy that you are not allowed to use this website
            to defame people or institutions, spread false or misleading
            information, carry out detrimental actions, threaten, harass or
            intimidate, or carry out any form of abuse that violates the law or
            ethics in using this platform. This policy aims to ensure a safe,
            positive and beneficial experience for all users of this website.
          </p>
          <div className="flex mt-[65px]">
            <label htmlFor="" className="flex">
              <input type="checkbox" onChange={handleCheckboxChange} />
              <p className="xl:text-[16px] sm:text-xl  text-black font-medium ml-4">
                By sending this report, I agree to our{" "}
                <span className="underline ">Terms of use</span> and{" "}
                <span className="underline">Policy</span>
              </p>
            </label>
          </div>
          <div className="flex mt-[16px] w-[630px]">
            <label htmlFor="" className="flex">
              <input type="checkbox" onChange={handleCheckboxChange} />
              <p className="xl:text-[16px] sm:text-xl text-black font-medium ml-4">
                By sending this report, I am also consenting to receive SMS
                messages and emails regarding updates, notifications, or
                follow-ups related to my report.
              </p>
            </label>
          </div>
          {showButton && <Footer3 />}
        </div>
        <div></div>
      </div>
    </main>
  );
}

// export default function Header3({ HeadText, Head2Text }: any) {
//   const [showButton, setShowButton] = useState(false);
//   return (
//     <main>
//       <div className="flex justify-center w-[1040px]">
//         <div></div>
//         <div className="flex flex-col mt-10">
//           <div className="flex">
//             <p className="text-greyc font-medium">PERSONAL DATA</p>
//             <Image src={ExpandRight} alt="Icon" />
//             <p className="text-greyc font-medium">PROBLEM</p>
//             <Image src={ExpandRight} alt="Icon" />
//             <p className="text-oceanb font-medium">POLICY</p>
//           </div>
//           <div className="h-[2px] mt-[25px] mb-[50px] bg-greyc w-[1040px]" />
//           <h1 className="font-semibold text-4xl">{HeadText}</h1>
//           <h2 className="text-gray-400 font-semibold mt-[50px] mb-[25px] text-xl">
//             {Head2Text}
//           </h2>
//           <p className="text-xl text-justify">
//             We have a firm policy that you are not allowed to use this website
//             to defame people or institutions, spread false or misleading
//             information, carry out detrimental actions, threaten, harass or
//             intimidate, or carry out any form of abuse that violates the law or
//             ethics in using this platform. This policy aims to ensure a safe,
//             positive and beneficial experience for all users of this website.
//           </p>
//           <div className="flex mt-[65px]">
//             <label htmlFor="" className="flex">
//               <input type="checkbox" />
//               <p className="text-[16px] text-black font-medium ml-4">
//                 By sending this report, I agree to our{" "}
//                 <span className="underline ">Terms of use</span> and{" "}
//                 <span className="underline">Policy</span>
//               </p>
//             </label>
//           </div>
//           <div className="flex mt-[16px] w-[630px]">
//             <label htmlFor="" className="flex">
//               <input type="checkbox" />
//               <p className="text-[16px] text-black font-medium ml-4">
//                 By sending this report, I am also consenting to receive SMS
//                 messages and emails regarding updates, notifications, or
//                 follow-ups related to my report.
//               </p>
//             </label>
//           </div>
//         </div>
//         <div></div>
//       </div>
//     </main>
//   );
// }
