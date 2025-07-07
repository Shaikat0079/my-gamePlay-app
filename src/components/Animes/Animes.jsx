import React, { use } from 'react'
import { Anime } from '../Anime/Anime'


export const Animes = ({animePromise,handleBookMark}) => {
  const animes = use(animePromise)
  // console.log(animes)
  return (
    <div>
      <h1 className=' text-3xl'>Available Animes {animes.length}</h1>
      <div className='all-blogs grid grid-cols-1 lg:grid-cols-2 gap-4 mx-4 my-6'>
        {
          animes.map(anime=><Anime key={anime.id} anime={anime} handleBookMark={handleBookMark}/>)
        }
      </div>
    </div>
  )
}
