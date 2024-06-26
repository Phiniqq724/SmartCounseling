import Link from "next/link";

export default function Header() {
  return (
    <main className="max-w-full ">
      <div className="flex justify-normal flex-col items-left w-full xl:w-[800px]">
        <p className="text-white text-4xl font-bold">
          Yuk, Ceritakan Kegelisahanmu dan Dapatkan Solusi Terbaik dari Para
          Guru BK!
        </p>
      </div>
      <div className="mt-10 w-[220px]">
        <Link href={"/counselingform"} className="mt-10">
          <button>
            <p className="text-white outline p-4 outline-skyb hover:outline-oceanb hover:text-oceanb duration-500 rounded-xl  text-2xl font-bold">
              Mulai Konseling
            </p>
          </button>
        </Link>
      </div>
    </main>
  );
}
