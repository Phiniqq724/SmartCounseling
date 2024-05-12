"use client";
import React, { ChangeEvent } from "react";

interface CDropDown {
  DropName?: string;
  DropTitle?: string;
  DropText?: React.ReactNode;
  DropId?: string;
  children: React.ReactNode;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export default function Dropdown2({ DropName, DropTitle, DropText, DropId, children, onChange }: CDropDown) {
  return (
    <main className="mt-2">
      <label htmlFor="">
        <span className="text-gray-500 xl:text-xl sm:text-2xl">{DropText}</span> : <br />
      </label>
      <select onChange={onChange} name={DropName} id={DropId} title={DropTitle} className="xl:h-[56px] xl:w-[478px] sm:h-[70px] sm:w-[675px] bg-gray-100 rounded-xl px-4">
        {children}
      </select>
    </main>
  );
}
