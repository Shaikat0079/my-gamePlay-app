import React, { Suspense } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Animes } from "./components/Animes/Animes";

const animeFetch = async () => {
  const res = await fetch("./animes.json");
  return res.json();
};

function App() {
  const animePromise = animeFetch();

  return (
    <>
      <Navbar />

      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          <Suspense fallback={<h1>Cars are Loading . . .</h1>}>
            <Animes animePromise={animePromise} />
          </Suspense>
        </div>
        <div className="right-container w-[30%]">
          <h1>Reading Count : 0</h1>
          <h1>BookMarked Count : 0</h1>
        </div>
      </div>
    </>
  );
}

export default App;
