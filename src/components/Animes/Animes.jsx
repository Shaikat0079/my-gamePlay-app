import React, { use } from 'react'


export const Animes = ({animePromise}) => {
  const animes = use(animePromise)
  console.log(animes)
  return (
    <div>
      <h1 className=' text-3xl'>Available Animes {animes.length}</h1>
    </div>
  )
}
