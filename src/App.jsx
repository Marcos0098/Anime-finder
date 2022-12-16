import { useState, useEffect } from 'react'

import Header from "./components/Header";
import SideBar from './components/SideBar';
import AnimeCard from "./components/AnimeCard";
import './App.css';


function App() {
  const [topAnimes, setTopAnimes] = useState([])

  const getAnimeNews = async (url) =>{
    const res = await fetch(url)
    const data = await res.json()

    setTopAnimes(data.data);
  };


  useEffect(() => {
    const animeNews = "https://api.jikan.moe/v4/top/anime"

    getAnimeNews(animeNews)

  },[])

  return (
    <div className="App">
      <Header/>
      
      <div className='container-main'>
      <SideBar/>
        
        <div className='main-content'>
          {topAnimes.length == 0 && <p>Loading</p>}
          {topAnimes.length > 0 && topAnimes.map((anime) => <AnimeCard key={anime.mal_id} anime={anime}/>)}
        </div>

     </div>
    </div>
  )
}

export default App
