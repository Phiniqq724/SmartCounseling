import Footer from "@/components/footer1";
import Forms from "@/components/pagecomp/form";

export default function Form1() {
  return (
    <main className="flex justify-center">
      {/* Remove empty div elements */}
      <div className="flex justify-center max-w-[300px] xl:max-w-full ">
        <Forms />
      </div>
      <div></div>
    </main>
  );
}
