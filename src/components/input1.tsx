"use client";
import React, { ChangeEvent, useState } from "react";

interface CInput {
  InText: string;
  InType?: string;
  InName?: string;
  onChange?: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  value?: string;
}

export const Input = ({ InText, InType, InName, onChange, value }: CInput) => {
  return (
    <label htmlFor="" className="mt-4">
      <span className="text-gray-500 sm:text-2xl xl:text-xl">{InText} :</span>
      <br />
      <input
        type={InType}
        onChange={onChange}
        value={value}
        className="xl:h-[56px] sm:h-[70px] rounded-xl xl:w-full sm:w-full bg-gray-100 text-justify px-4"
        name={InName}
      />
    </label>
  );
};

export const Input2 = ({ InText, InType, InName, onChange, value }: CInput) => {
  return (
    <label htmlFor="" className="mt-4">
      <span className="text-gray-500 xl:text-xl sm:text-2xl">{InText} :</span>
      <br />
      <input
        type={InType}
        onChange={onChange}
        value={value}
        className="xl:h-[56px] rounded-xl sm:h-[70px] xl:w-full sm:w-full bg-gray-100 px-4"
        name={InName}
      />
    </label>
  );
};

export const Input3 = ({ InText, onChange, value, InName }: CInput) => {
  return (
    <label htmlFor="" className="mt-4">
      <span className="text-gray-500 sm:text-2xl xl:text-xl justify-center">
        {InText} :
      </span>
      <br />
      <textarea
        onChange={onChange}
        name={InName}
        value={value}
        className="h-[260px] rounded-xl w-full bg-gray-100 p-4"
        rows={4}
        cols={50}
        required
      ></textarea>
    </label>
  );
};
