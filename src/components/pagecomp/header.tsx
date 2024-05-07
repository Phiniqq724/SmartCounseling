import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-normal flex-col items-left xl:w-[800px] sm:w-[400px]">
      <p className="text-white text-4xl font-bold">
        Yuk, Ceritakan Kegelisahanmu dan Dapatkan Solusi Terbaik dari Para Guru
        BK!
      </p>
      <Link href={"/counselingform"} className="mt-10">
        <button>
          <p className="text-white outline p-4 outline-skyb hover:outline-oceanb hover:text-oceanb duration-500 rounded-xl  text-2xl font-bold">
            Mulai Konseling
          </p>
        </button>
      </Link>
    </div>
  );
}
