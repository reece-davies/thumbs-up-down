'use client'

import { useState } from "react";
import { ThumbsUp, ThumbsDown, Loader } from "lucide-react";

export default function Home() {
  const [thumbs, setThumbs] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setThumbs(null);

    setTimeout(() => {
      const randomNumber = Math.random();

      const outcome = randomNumber < 0.5 ? "up" : "down";

      setThumbs(outcome);
      setLoading(false);
    }, 2000);
  }

  const getIcon = () => {
    if (thumbs === "up")
      return (
        <>
          <ThumbsUp size={100} className="text-green-500" />
          <p className="text-2xl font-bold m-3 text-green-500">Thumbs Up</p>
        </>
      );
    else
      return (
        <>
          <ThumbsDown size={100} className="text-red-500" />
          <p className="text-2xl font-bold m-3 text-red-500">Thumbs Down</p>
        </>
      );
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
       <h1 className="font-medium text-xl">Do you deserve a thumbs up or thumbs down?</h1>
        <button
          onClick={handleClick}
          className="rounded-full border border-dashed border-foreground transition transition-colors duration-300 flex items-center justify-center bg-foreground hover:bg-background text-background gap-2 hover:text-foreground font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
        >
          Find out
        </button>

        {(loading || thumbs) && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
            onClick={() => {
              setThumbs(null);
              setLoading(false);
            }}
          >
            <div
              className="bg-gray-100 rounded-2xl p-10 flex flex-col items-center shadow-xl min-w-[250px]"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Loading state */}
              {loading && (
                <>
                  <Loader className="m-3 w-10 h-10 animate-spin [animation-duration:2s] text-blue-600" viewBox="0 0 24 24" />
                  <p className="text-lg text-gray-700 font-medium">Loading...</p>
                </>
              )}

              {/* Result state */}
              {!loading && thumbs && (getIcon())}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
