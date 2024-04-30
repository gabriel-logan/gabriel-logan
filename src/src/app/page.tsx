"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

import loganpotter from "../assets/images/loganpotter.png";
import oldLogan from "../assets/images/oldlogan.png";

export default function Home() {
  const [logan, setLogan] = useState<StaticImageData>(oldLogan);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World</h1>
      <p>I&apos;m Gabriel Logan</p>
      <div className="overflow-hidden rounded-3xl border-2 border-opacity-40">
        <button
          onClick={() => {
            setLogan(logan === oldLogan ? loganpotter : oldLogan);
          }}
        >
          <Image src={logan} alt="eu" className="h-auto w-auto" />
        </button>
      </div>
      <p>In develoment...</p>
    </main>
  );
}
