import { Card } from "flowbite-react";

export default function CardL() {
  return (
    <main className="flex justify-between gap-[100px] flex-row w-[1000px]">
      <div className="">
        <Card href="#" className="max-w-sm h-[192px]">
          <h5 className="text-2xl font-bold tracking-tight text-oceanb dark:text-white text-start">
            Waktu
          </h5>
          <p className="font-normal text-oceanb dark:text-gray-400 text-justify">
            Kamu bisa memilih waktu konseling, yang disesuaikan dengan
            kenyamananmu bercerita.
          </p>
        </Card>
      </div>
      <div>
        <Card href="#" className="max-w-sm h-[192px]">
          <h5 className="text-2xl font-bold tracking-tight text-oceanb dark:text-white text-start">
            Guru
          </h5>
          <p className="font-normal text-oceanb dark:text-gray-400 text-justify">
            Guru BK akan siap mendengarkan cerita mu atau masalah mu dan akan
            memberikan mu saran terbaik
          </p>
        </Card>
      </div>
      <div>
        <Card href="#" className="max-w-sm h-[192px]">
          <h5 className="text-2xl font-bold tracking-tight text-oceanb dark:text-white text-start">
            Topic
          </h5>
          <p className="font-normal text-oceanb dark:text-gray-400 text-justify">
            Setiap individu memiliki masalah yang berbeda-beda, untuk itu kami
            sediakan banyak pilihan topik masalah.
          </p>
        </Card>
      </div>
    </main>
  );
}
