import Link from "next/link";
import React from "react";

interface IButton {
  BtnText: React.ReactNode;
  Navigate: string;
  BtnType?: "button" | "submit" | "reset" | undefined;
}
export default function RedButton({ BtnText, Navigate, BtnType }: IButton) {
  return (
    <Link href={Navigate}>
      <button className="bg-redbutton text-white rounded-xl text-[22px] xl:h-[56px] xl:w-[236px] sm:w-[150px] sm:h-[64px]" type={BtnType}>
        {BtnText}
      </button>
    </Link>
  );
}
