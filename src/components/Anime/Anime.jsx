import React from "react";
import { FaBookmark } from "react-icons/fa";

export const Anime = ({ anime, handleBookMark,handleWatchTime }) => {
  //   console.log(anime);
  const { cover, title, author, author_img, genre,watching_time } = anime;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-sm rounded-4xl">
        <figure className=" rounded-4xl">
          <img className=" w-3xs h-80" src={cover} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {/* <p>Click the button to watch on Crunchyroll app.</p> */}
          <div className="author flex justify-around items-center p-2.5">
            <h3 className=" bg-cyan-400 p-2.5 rounded-2xl">{author}</h3>
            <img className="w-16 rounded-4xl" src={author_img} alt="" />
          </div>
          <ol className="bg-green-300 m-auto flex flex-col rounded-4xl p-5">
            {genre.map((g, index) => (
              <li key={index}>{g}</li>
            ))}
          </ol>
          <div className="card-actions justify-between items-center">
            <FaBookmark
              onClick={() => {
                handleBookMark(anime);
              }}
              className=" text-cyan-400"
              size={25}
            />
            <button onClick={()=>handleWatchTime(anime)}  className="btn btn-primary rounded-2xl text-amber-50">
              Watch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
