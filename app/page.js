'use client'

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [thumbs, setThumbs] = useState(null)

  const handleClick = () => {
    //
    const randomNumber = Math.random();
    let outcome;

    if (randomNumber < 0.5) {
      outcome = "up";
    } else {
      outcome = "down";
    }

    setThumbs(outcome);
  }

  const getImage = () => {
    //
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
       <h1 className="font-bold text-xl">Do you deserve a thumbs up or thumbs down?</h1>
          <button
          onClick={handleClick}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Find out
          </button>

          {thumbs && (
            <p>{thumbs === "up" ? "Thumbs up" : "Thumbs down" }</p>
          )}
      </main>
    </div>
  );
}
