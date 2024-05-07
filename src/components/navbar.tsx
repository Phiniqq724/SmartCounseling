"use client";

import { Button, Navbar } from "flowbite-react";
import Link from "next/link";

export default function Component() {
  return (
    <main className="">
      <Navbar fluid rounded>
        <div className="flex md:order-2 ">
          <Button className="bg-oceanb transition-transform duration-200 transform hover:scale-105 text-xl">
            <Link href={"/counselingform"}>Start Counseling</Link>
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            href="#"
            active
            className="hover:text-oceanb text-deepb bg-transparent no-underline hover:underline hover:underline-offset-1 transition-transform duration-200 transform hover:scale-105 text-xl"
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            className="hover:text-oceanb text-deepb no-underline hover:underline hover:underline-offset-1 transition-transform duration-200 transform hover:scale-105 text-xl"
            href="#"
          >
            Topics
          </Navbar.Link>
          <Navbar.Link
            className="hover:text-oceanb text-deepb no-underline hover:underline hover:underline-offset-1 transition-transform duration-200 transform hover:scale-105 text-xl"
            href="#"
          >
            Credit
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </main>
  );
}
