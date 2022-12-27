import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import YouTube from 'react-youtube';

import './AnimePage.css';

function Anime() {
  const {id} = useParams();
  const [animeTitulo, setAnimeTitulo] = useState("")
  const [animeImg, setAnimeImg] = useState("")
  const [animeGenero, setAnimeGenero] = useState([])
  const [animeTrailer, setAnimeTrailer] = useState(null)

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  const getAnime = async (urlAnime) =>{
    const res = await fetch(urlAnime)

    const data = await res.json();

    setAnimeTitulo(data.data.title)
    setAnimeImg(data.data.images.jpg.image_url)
    setAnimeGenero(data.data.genres)
    setAnimeTrailer(data.data.trailer.youtube_id)
    console.log(data.data)
  }

  useEffect(() =>{
    const animeURL= `https://api.jikan.moe/v4/anime/${id}/full`
    getAnime(animeURL)
  },[])

  return (
    <div className='anime-container'>
      {animeTitulo &&
        <div className="anime-infos">
            <img src={animeImg} alt="capa-anime" />
            <div className='titulo-tag'>
              <h2>{animeTitulo}</h2>
              <h4>Gêneros {animeGenero.length > 0 && animeGenero.map((generos) => <p>{generos.name}</p>)}</h4>
            </div>
            <div className='trailer'>
              <h2>Trailer</h2>
              {animeTrailer && 
                <YouTube videoId={animeTrailer} opts={opts}/>
              }
            </div>
        </div>

        
      }

    </div>
  )
}

export default Anime