import {useState, useEffect} from 'react'
import SideBar from '../components/SideBar';
import AnimeCard from "../components/AnimeCard";

import '../App.css';

function Home() {
    const [topAnimes, setTopAnimes] = useState([])

    const getAnimeNews = async (url) =>{

      const res = await fetch(url)
      const data = await res.json();
      
      setTopAnimes(data.data);
    };

    useEffect(() => {
      const animeNews = "https://api.jikan.moe/v4/top/anime?limit=10";

      getAnimeNews(animeNews)
    },[])
  
    console.log(topAnimes)
  return (
    <div className='container-main'>
      {topAnimes && 
      <>
        <div className='main-content'>
          {topAnimes.length === 0 && <p>Loading</p>}
          {topAnimes.length > 0 && topAnimes.map((anime) => <AnimeCard key={anime.mal_id} anime={anime}/>)}
        </div>
      </>

      
      }
   </div>
  )
}

export default Home