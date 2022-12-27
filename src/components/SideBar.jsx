import React from 'react'
import { useState, useEffect} from 'react';


function SideBar() {
  const [animeGenre, setAnimeGenre] = useState([])

  const getGenre = async(urlGenre) => {
    const resGenre = await fetch(urlGenre);
    const dataGenre = await resGenre.json();
    
    setAnimeGenre(dataGenre.data);

  }
  console.log(animeGenre)

  useEffect(()=>{
    const genreURL = "https://api.jikan.moe/v4/genres/anime?filter=demographics"

    getGenre(genreURL)
  },[])
  return (

    <div className='sidebar'>
      <div className="generos-sidebar">
        {animeGenre.length === 0 && <p>Loading</p>}
        {animeGenre.length > 0 && animeGenre.map((generos) => <p key={generos.mal_id}>{generos.name}</p>)}
      </div>

    </div>
  )
}

export default SideBar