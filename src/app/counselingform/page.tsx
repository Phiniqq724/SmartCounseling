import { useState } from "react";
import Image from "next/image";

import Header from "../../components/header"; // Add this import statement

import ExpandRight from "../../../public/Ui/Expand_right.svg";

export default function Form1() {
  return (
    <main className="flex justify-center ">
      <Header headerVal={1} />
    </main>
  );
}
