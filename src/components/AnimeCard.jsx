import React from 'react'
import { Link } from "react-router-dom";
import {FaStar} from "react-icons/fa"

function AnimeCard({anime, showLink = true}) {

  return (

    <div className='anime-card'>
        
        <img src={anime.images.jpg.image_url} alt="" />
        <div className="anime-info">
            <p><strong>{anime.title}</strong></p>
            <p>Rating: {anime.score} <FaStar/></p>
            <p>Episodes: {anime.episodes}</p>
        </div>
        <div className="button-details">
          {showLink && <Link to={`/anime/${anime.mal_id}`}></Link>}
        </div>


    </div>
  )
}

export default AnimeCard