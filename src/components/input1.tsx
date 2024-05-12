"use client";
import React, { ChangeEvent, useState } from "react";

interface CInput {
  InText: string;
  InType: string;
  InName: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export const Input = ({ InText, InType, InName, onChange, value }: CInput) => {
  return (
    <label htmlFor="">
      <span className="text-gray-500 sm:text-2xl xl:text-xl">{InText} :</span>
      <br />
      <input
        type={InType}
        onChange={onChange}
        value={value}
        className="xl:h-[56px] sm:h-[70px] rounded-xl xl:w-[478px] sm:w-[675px] bg-gray-100 text-justify px-4"
        name={InName}
      />
    </label>
  );
};

export const Input2 = ({ InText, InType, InName, onChange, value }: CInput) => {
  return (
    <label htmlFor="">
      <span className="text-gray-500 xl:text-xl sm:text-2xl">{InText} :</span>
      <br />
      <input
        type={InType}
        onChange={onChange}
        value={value}
        className="xlh-[56px] rounded-xl sm:h-[70px] xl:w-[220px] sm:w-[675px] bg-gray-100 px-4"
        name={InName}
      />
    </label>
  );
};

export const Input3 = ({ InText, InName, onChange, value, InType }: CInput) => {
  return (
    <label htmlFor="">
      <span className="text-gray-500 sm:text-2xl xl:text-xl">{InText} :</span>
      <br />
      <textarea
        className="h-[260px] rounded-xl xl:w-[1040px] sm:w-[675px] bg-gray-100 p-4"
        rows={4}
        cols={50}
      >
        <input type={InType} onChange={onChange} value={value} name={InName} />
      </textarea>
    </label>
  );
};
