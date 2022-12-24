import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Anime() {
  const {id} = useParams();
  const [animeTitulo, setAnimeTitulo] = useState("")
  const [animeImg, setAnimeImg] = useState("")
  const [animeGenero, setAnimeGenero] = useState([])
  const [animeTrailer, setAnimeTrailer] = useState(null)

  const getAnime = async (urlAnime) =>{
    const res = await fetch(urlAnime)

    const data = await res.json();

    setAnimeTitulo(data.data.title)
    setAnimeImg(data.data.images.jpg.image_url)
    setAnimeGenero(data.data.genres)
    setAnimeTrailer(data.data.trailer.url)
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
            <h2>{animeTitulo}</h2>
            <h4>{animeGenero.length > 0 && animeGenero.map((generos) => <p>{generos.name}</p>)}</h4>
            <div className='trailer'>
              {animeTrailer && 
                <iframe width={"600"} height={"400"} frameborder= "0" allow='accelerometer' allowFullScreen src={animeTrailer}></iframe>
              }
            </div>
        </div>

        
      }

    </div>
  )
}

export default Anime