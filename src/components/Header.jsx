import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import { AiOutlineSearch } from "react-icons/ai"
function Header() {

  const [search, setSearch] = useState("")
  const navigate = useNavigate();

  const handleSearch = (e) =>{
    e.preventDefault();

    if(!search) return

    navigate(`/search?q=${search}`);
    setSearch("");
  }

  return (
    <div className='header'>
      <h2><Link to="/">The<strong>Anime</strong>Database</Link></h2>

      <div className="search-bar">
        <form onSubmit={handleSearch}>
        <button type='submit'><AiOutlineSearch/></button>
        <input type="text" placeholder='Pesquise seu anime' onChange={(e) => setSearch(e.target.value)}/>

        </form>

      </div>
    </div>
  )
}

export default Header