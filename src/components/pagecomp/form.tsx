"use client";

import React, { useState } from "react";
import { Input, Input2, Input3 } from "../input1";
import Dropdown from "../dropdown";
import Dropdown2 from "../dropdown2";
import Image from "next/image";
import ExpandRight from "@/../public/Ui/Expand_right.svg";

interface DText {
  names: string;
}

const ScriptURL =
  "https://script.google.com/macros/s/AKfycbxPs2z5FEC88ljy9i4dP3ACcvLrtNdgzHLPtiQJhsabAgriSIjneCvmzAx5hHamf3cT3w/exec";

const textDropS: DText[] = [
  {
    names: "Anything",
  },
  {
    names: "Personal",
  },
  {
    names: "Education",
  },
  { names: "Stress" },
  { names: "Love Problem" },
  { names: "Bully" },
];

const Forms: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [absent, setAbsent] = useState("");
  const [kelas, setKelas] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [isMutating, setIsMutating] = useState(false);
  const [showButton, setShowButton] = useState(false);
  //   const [isVisible, setIsVisible] = useState(false);

  const hanldeSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsMutating(true);
    try {
      const response = await fetch(ScriptURL, {
        method: "POST",
        body: new FormData(e.currentTarget),
      });
      console.log("Success", response);
      window.location.href = "..";
      alert("Terkirim!");
    } catch (error) {
      console.log("Erroor", (error as Error).message);
    }
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowButton(event.target.checked);
  };

  return (
    <form onSubmit={hanldeSubmit}>
      <div className="flex justify-center">
        <div>
          <div className="flex flex-col ">
            <div className="flex text-[16px] mt-24">
              <p className="text-oceanb font-medium">PERSONAL DATA</p>
              <Image src={ExpandRight} alt="Icon" />
              <p className="text-greyc font-medium">PROBLEM</p>
              <Image src={ExpandRight} alt="Icon" />
              <p className="text-greyc font-medium">POLICY</p>
            </div>
            <div className="h-[2px] mt-[25px] mb-[50px] bg-greyc w-full" />
            <h1 className="font-semibold xl:text-4xl sm:text-2xl">
              1. PERSONAL DATA
            </h1>
            <h2 className="text-gray-400 font-semibold mt-[50px] mb-[25px] xl:text-xl sm:text-xl">
              About You
            </h2>
            <Input
              onChange={(e) => setName(e.target.value)}
              value={name}
              InText="Name"
              InType="text"
              InName="Name"
            />
            <Input2
              onChange={(e) => setKelas(e.target.value)}
              value={kelas}
              InText="Class"
              InType="text"
              InName="Class"
            />
            <Input2
              onChange={(e) => setAbsent(e.target.value)}
              value={absent}
              InText="Absent"
              InType="number"
              InName="Absent"
            />
            <Input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              InText="Student Email"
              InType="email"
              InName="Email"
            />
          </div>
          <div className="flex flex-col">
            <div className="mt-4">
              <Input
                onChange={(e) => setDate(e.target.value)}
                value={date}
                InText="Date"
                InType="date"
                InName="Date"
              />
            </div>
            <div className="">
              <Dropdown
                onChange={(e) => setGender(e.target.value)}
                value={gender}
                DropText="Gender"
                DropVal2="Male"
                DropVal3="Female"
                DropName="Gender"
              />
              <div className="mt-4">
                <Input
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  InText="Phone Number"
                  InType="tel"
                  InName="Phone"
                />
              </div>
              <div className="flex text-[16px] mt-24">
                <p className="text-greyc font-medium">PERSONAL DATA</p>
                <Image src={ExpandRight} alt="Icon" />
                <p className="text-oceanb font-medium">PROBLEM</p>
                <Image src={ExpandRight} alt="Icon" />
                <p className="text-greyc font-medium">POLICY</p>
              </div>
              <div className="h-[2px] mt-[25px] mb-[50px] bg-greyc w-full" />
              <h1 className="font-semibold xl:text-4xl sm:text-2xl">
                2. PROBLEM
              </h1>
              <h2 className="text-gray-400 font-semibold mt-[50px] mb-[25px] xl:text-xl sm:text-xl">
                Describe Your Problem
              </h2>
              <Dropdown2
                onChange={(e) => setCategory(e.target.value)}
                DropText="Problem Category"
                DropName="Problem"
              >
                {textDropS.map((e, i) => (
                  <option key={i} value={e.names}>
                    {e.names}
                  </option>
                ))}
              </Dropdown2>

              <div className="mt-4">
                <Input3
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  InText="Problem Description"
                  InName="Description"
                />
              </div>
              <div className="flex text-[16px] mt-24">
                <p className="text-greyc font-medium">PERSONAL DATA</p>
                <Image src={ExpandRight} alt="Icon" />
                <p className="text-greyc font-medium">PROBLEM</p>
                <Image src={ExpandRight} alt="Icon" />
                <p className="text-oceanb font-medium">POLICY</p>
              </div>
              <div className="h-[2px] mt-[25px] mb-[50px] bg-greyc xl:w-[1040px] sm:w-[520px]" />
              <h1 className="font-semibold xl:text-4xl sm:text-2xl">
                3. POLICY
              </h1>
              <h2 className="text-gray-400 font-semibold mt-[50px] mb-[25px] xl:text-xl sm:text-xl">
                Our policy and terms of service
              </h2>
              <p className="xl:text-xl sm:text-2xl text-justify xl:w-[1000px] sm:w-[600px]">
                We have a firm policy that you are not allowed to use this
                website to defame people or institutions, spread false or
                misleading information, carry out detrimental actions, threaten,
                harass or intimidate, or carry out any form of abuse that
                violates the law or ethics in using this platform. This policy
                aims to ensure a safe, positive and beneficial experience for
                all users of this website.
              </p>
              <div className="flex mt-[65px]">
                <label htmlFor="" className="flex">
                  <input type="checkbox" onChange={handleCheckboxChange} />
                  <p className="xl:text-[16px] sm:text-xl  text-black font-medium ml-4 xl:w-[1000px] sm:w-[600px]">
                    By sending this report, I agree to our{" "}
                    <span className="underline ">Terms of use</span> and{" "}
                    <span className="underline">Policy</span> and Im also
                    consenting to receive SMS messages and emails regarding
                    updates, notifications, or follow-ups related to my report.
                  </p>
                </label>
              </div>
              <div className="mt-24">
                {!isMutating && showButton ? (
                  <button className=" bg-oceanb mb-24  text-white rounded-xl w-full h-16 text-xl font-raleway font-medium hover:bg-lightorange hover:text-white transition-all duration-500 ">
                    Submit
                  </button>
                ) : (
                  <button
                    className=" bg-greyc mb-24 text-white rounded-xl w-full h-16 text-xl font-raleway font-medium hover:bg-lightorange hover:text-white transition-all duration-500"
                    disabled
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Forms;
