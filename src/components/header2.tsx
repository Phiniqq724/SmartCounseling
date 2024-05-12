"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ExpandRight from "../../public/Ui/Expand_right.svg";
import Footer2 from "./footer2";
import Dropdown from "./dropdown2";
import { Input3 } from "./input1";

interface FormProblem {
  Problem: string;
  Description: string;
}

export default function Header2({ HeadText, Head2Text }: any) {
  const [formData, setFormData] = useState<FormProblem>({
    Problem: "",
    Description: "",
  });

  useEffect(() => {
    const formDataFromSessionStorage = sessionStorage.getItem("formDataPage2");
    if (formDataFromSessionStorage) {
      const formDataCopy = JSON.parse(formDataFromSessionStorage);
      setFormData(formDataCopy);
    }
  }, []);

  const handleInputsChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    sessionStorage.setItem("formDataPage2", JSON.stringify(formData));
  }, [formData]);

  return (
    <main>
      <div className="flex justify-center xl:w-[1040px] md:w-[520px] sm:w-[128px]">
        <div></div>
        <div className="flex flex-col mt-10">
          <div className="flex">
            <p className="text-greyc font-medium">PERSONAL DATA</p>
            <Image src={ExpandRight} alt="Icon" />
            <p className="text-oceanb font-medium">PROBLEM</p>
            <Image src={ExpandRight} alt="Icon" />
            <p className="text-greyc font-medium">POLICY</p>
          </div>
          <div className="h-[2px] mt-[25px] mb-[50px] bg-greyc xl:w-[1040px] md:w-[520px]" />
          <h1 className="font-semibold xl:text-4xl sm:text-2xl">{HeadText}</h1>
          <h2 className="text-gray-400 font-semibold mt-[50px] mb-[25px] xl:text-xl sm:text-[20px]">
            {Head2Text}
          </h2>
          <form action="">
            <div className="flex flex-col">
              <Dropdown
                onChange={handleInputsChange}
                value={formData.Problem}
                DropText="Problem Category"
                DropVal1="Anything"
                DropVal2="Personal"
                DropVal3="Education"
                DropVal4="Stress"
                DropVal5="Love Problem"
                DropVal6="Bully"
                DropName="Problem"
              />
              <div className="mt-[25px]">
                <Input3
                  onChange={handleInputsChange}
                  value={formData.Description}
                  InText="Problem Description"
                  InType="text"
                  InName="Description"
                />
              </div>
            </div>
          </form>
          <Footer2 />
        </div>
        <div></div>
      </div>
    </main>
  );
}
