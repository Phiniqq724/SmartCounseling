import Footer from "@/components/footer1";
import Forms from "@/components/pagecomp/form";

export default function Form1() {
  return (
    <main className="flex justify-center flex-col">
      {/* Remove empty div elements */}
      <div className="flex justify-center flex-col ">
        <Forms />
      </div>
      <div></div>
    </main>
  );
}
