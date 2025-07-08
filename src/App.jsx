import React, { Suspense, useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Animes } from "./components/Animes/Animes";

const animeFetch = async () => {
  const res = await fetch("./animes.json");
  return res.json();
};

function App() {
  const [bookMarked, setBookMarked] = useState([]);
  const [watchCount,setWatchCount] = useState(0)

  // console.log(bookMarked)
  const animePromise = animeFetch();

    const handleBookMark = (anime) => {
    // console.log(anime)
    setBookMarked([...bookMarked, anime]);
    // const newBookMarked = [...bookMarked,anime];
    // setBookMarked(newBookMarked)
  };
  const handleWatchTime = (anime)=>{
    // console.log(time)
    setWatchCount(anime.watching_time+watchCount);
    // const newBookMarked = 
    setBookMarked(bookMarked.filter(book=>book.id !== anime.id))
    // console.log(bookMarked)
    // console.log(anime)
    // console.log(newBookMarked)
  }

  return (
    <>
      <Navbar />

      <div className="main-container flex text-center  flex-col lg:flex-row">
        <div className="left-container lg:w-[70%]">
          <Suspense fallback={<h1>Animes are Loading . . .</h1>}>
            <Animes
              animePromise={animePromise}
              handleBookMark={handleBookMark}
              handleWatchTime={handleWatchTime}
            />
          </Suspense>
        </div>
        <div className="right-container lg:w-[30%]">
          <h1>Reading Count : {watchCount}</h1>
          <h1>BookMarked Count : {bookMarked.length}</h1>
          {bookMarked.map((booked) => (
            <p className=" bg-white my-2.5 py-5" key={booked.id}>{booked.title}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
