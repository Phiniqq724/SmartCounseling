import Navbar from "@/components/navbar";
import Header from "@/components/pagecomp/header";
import CardL from "@/components/pagecomp/cardlist";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="w-[1825px] h-[600px] bg-gradient-to-tr from-deepb to-oceanb">
        <div className="flex justify-start ml-24 items-center">
          <div className="h-[600px]"></div>
          <Header />
        </div>
        <div className="justify-center flex items-center mt-10">
          <CardL />
        </div>
      </div>
    </main>
  );
}
