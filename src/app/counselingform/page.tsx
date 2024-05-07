import Header from "../../components/header1";
import Footer from "@/components/footer1";

export default function Form1() {
  return (
    <main className="flex justify-center flex-col">
      {/* Remove empty div elements */}
      <div className="flex justify-center flex-col ">
        <Header HeadText="1. PERSONAL DATA" Head2Text="About You" />
      </div>
      <div></div>
    </main>
  );
}
