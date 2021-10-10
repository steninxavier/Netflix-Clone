import React from 'react'
import './NavBar.css'
export default function NavBar() {
    return (
        <div className="navbar">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="NetflixLogo"/>
            <form className="form" role="search">
            <input type="search" id="query" name="q"
             placeholder="Search movies"
             aria-label="Search through site content"/>
             <button className="searchbutton">Search</button>
             </form>
     
   
            <img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar"/>
        </div>
    )
}
