import Navbar from "@/components/navbar";
import Header from "@/components/pagecomp/header";
import CardL from "@/components/pagecomp/cardlist";
import Counseling from "@/components/pagecomp/counselingtop";
import Footer from "@/components/pagecomp/footer";

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <div className=" h-[600px] bg-gradient-to-tr from-deepb to-oceanb">
        <div className="flex justify-start ml-4 xl:ml-24 items-center">
          <div className="h-[600px]"></div>
          <Header />
        </div>
      </div>
      <div className="justify-center flex items-center">
        <div className="h-[600px]"></div>
        <div className="">
          <CardL />
        </div>
      </div>
      <div>
        <Counseling />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
