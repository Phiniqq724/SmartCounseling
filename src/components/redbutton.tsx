import Link from "next/link";

export default function RedButton({ BtnText, Navigate, BtnType }: any) {
  return (
    <Link href={Navigate}>
      <button
        className="bg-redbutton text-white rounded-xl text-[22px] xl:h-[56px] xl:w-[236px] sm:w-[150px] sm:h-[64px]"
        type={BtnType}
      >
        {BtnText}
      </button>
    </Link>
  );
}
