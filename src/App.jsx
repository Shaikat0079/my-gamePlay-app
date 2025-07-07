import React, { Suspense } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Animes } from "./components/Animes/Animes";

const animeFetch = async () => {
  const res = await fetch("./animes.json");
  return res.json();
};

function App() {

  const handleBookMark = (anime)=>{
    console.log(anime)
  }
  const animePromise = animeFetch();

  return (
    <>
      <Navbar />

      <div className="main-container flex text-center  flex-col lg:flex-row">
        <div className="left-container lg:w-[70%]">
          <Suspense fallback={<h1>Cars are Loading . . .</h1>}>
            <Animes animePromise={animePromise}  handleBookMark={handleBookMark}/>
          </Suspense>
        </div>
        <div className="right-container lg:w-[30%]">
          <h1>Reading Count : 0</h1>
          <h1>BookMarked Count : 0</h1>
        </div>
      </div>
    </>
  );
}

export default App;
