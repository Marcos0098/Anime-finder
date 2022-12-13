import React from 'react'
import {FaStar} from "react-icons/fa"

function AnimeCard({anime}) {
  return (

    <div className='anime-card'>
        
        <img src={anime.images.jpg.image_url} alt="" />
        <div className="anime-info">
            <p><strong>{anime.title}</strong></p>
            <p>Rating: {anime.score} <FaStar/></p>
            <p>Episodes: {anime.episodes}</p>
        </div>
        
    </div>
  )
}

export default AnimeCard