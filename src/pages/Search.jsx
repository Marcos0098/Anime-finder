import React, {useState, useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';

import AnimeCard from '../components/AnimeCard';

import "../App.css";
function Search() {
  const [searchParams] = useSearchParams();
  const [animes, setAnimes] = useState([]);

  const query = searchParams.get("q");

  const getSearcherdAnime = async (url) =>{
    const res = await fetch(url);
    const data = await res.json();

    setAnimes(data.results);
    console.log(data.results);
  };

  console.log(query)
  useEffect(() => {
    const searchUrl = "https://api.jikan.moe/v4/anime";

    getSearcherdAnime(searchUrl)
  },[query])

  return (
    <div className='search-container'>
      <div className="title">
        <h2>Resultados para: <span className='query-text'>{query}</span></h2>
      </div>
      <div className='anime-container'>
        {animes.length === 0 && <p>Carregando ...</p>}
        {animes.length > 0 && animes.map((anime) => <AnimeCard key={animes.id} anime={anime} />)}
      </div>
    </div>
  )
}

export default Search