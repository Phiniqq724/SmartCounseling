"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Footer3 from "./footer3";
import ExpandRight from "../../public/Ui/Expand_right.svg";

export default function Header3() {
  const [showButton, setShowButton] = useState(false);
  const [formData, setFormData] = useState({});
  const [isMutating, setIsMutating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const ScriptURL =
    "https://script.google.com/macros/s/AKfycbyB17lZv6VsXEKBRUjHBvb2rsyA-EeWIoDyNN3T7D-IUWKYi3KotnvK5gPtpFaeDnAj_Q/exec";

  useEffect(() => {
    const formData1 = JSON.parse(sessionStorage.getItem("formData1") || "{}");
    const formData2 = JSON.parse(sessionStorage.getItem("formData2") || "{}");
    setFormData({ ...formData1, ...formData2 });
  }, []);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsMutating(true);
    setIsVisible(false);

    try {
      const formDataObject = Object.fromEntries(
        Object.entries(formData).filter(([_, v]) => v != null)
      );

      const response = await fetch(ScriptURL, {
        mode: "no-cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formDataObject }),
      });

      const data = await response.json();
      console.log("Success!", data);
      setIsMutating(false);
      setIsVisible(true);
    } catch (error) {
      console.error("Error!", (error as Error).message);
      setIsMutating(false);
    }
  };

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
          {showButton && (
            <button onClick={handleSubmit}>
              {isMutating ? (
                <div>Loading...</div>
              ) : isVisible ? (
                <div>Data Sent</div>
              ) : (
                <div>Submit</div>
              )}
            </button>
          )}
        </div>
        <div></div>
      </div>
    </main>
  );
}
