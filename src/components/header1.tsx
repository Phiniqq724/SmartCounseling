"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ExpandRight from "../../public/Ui/Expand_right.svg";
import Dropdown from "./dropdown";
import Footer1 from "./footer1";
import { Input, Input2 } from "./input1";

interface FormIndentitas {
  Name: string;
  Class: string;
  Absent: number;
  Date: string;
  Email: string;
  Gender: string;
  Phone: string;
}

// Memindahkan argumen e ke dalam fungsi handleSubmit
export default function Header1({ HeadText, Head2Text }: any) {
  const [formData, setFormData] = useState<FormIndentitas>({
    Name: "",
    Class: "",
    Absent: 0,
    Date: new Date().toISOString().split("T")[0],
    Email: "",
    Gender: "",
    Phone: "",
  });

  useEffect(() => {
    const formDataFromSessionStorage = sessionStorage.getItem("formData1");
    if (formDataFromSessionStorage) {
      const formDataCopy = JSON.parse(formDataFromSessionStorage);
      setFormData(formDataCopy);
    }
  }, []);

  const handleInputsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    sessionStorage.setItem("formData1", JSON.stringify(formData));
  }, [formData]);

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
          <h2 className="text-gray-400 font-semibold mt-[50px] mb-[25px] xl:text-xl sm:text-xl">{Head2Text}</h2>
          <form>
            {" "}
            <div className="flex xl:flex-row sm:flex-col xl:justify-between sm:justify-center">
              <div className="flex flex-col ">
                <Input onChange={handleInputsChange} value={formData.Name} InText="Name" InType="text" InName="Name" />
                <div className="xl:flex xl:flex-row sm:flex sm:flex-col gap-[5px] mt-[30px] mb-[30px]">
                  <Input2 onChange={handleInputsChange} value={formData.Class} InText="Class" InType="text" InName="Class" />
                  <div className="sm:mt-[20px] sm:ml-0 xl:mt-0 xl:ml-8">
                    <Input2 onChange={handleInputsChange} value={formData.Absent.toString()} InText="Absent" InType="number" InName="Absent" />
                  </div>
                </div>
                <Input onChange={handleInputsChange} value={formData.Email} InText="Student Email" InType="email" InName="Email" />
              </div>
              <div className="flex flex-col">
                <div className="xl:mt-0 sm:mt-4">
                  <Input onChange={handleInputsChange} value={formData.Date} InText="Date" InType="date" InName="Date" />
                </div>
                <div className="mt-[20px]">
                  <Dropdown onChange={handleInputsChange} value={formData.Gender} DropText="Gender" DropVal2="Male" DropVal3="Female" DropName="Gender" />
                  <div className="mt-[30px]">
                    <Input onChange={handleInputsChange} value={formData.Phone} InText="Phone Number" InType="tel" InName="Phone" />
                  </div>
                </div>
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
          <Footer1 />
        </div>
        <div></div>
      </div>
    </main>
  );
}
