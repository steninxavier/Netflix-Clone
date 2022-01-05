import React, { useState } from 'react'
import './Banner.css'
import {useEffect} from 'react'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/constants'

export default function Banner() {
    const [movie,setMovie]= useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>
       {
           console.log(Response.data.results[6]);
           setMovie(Response.data.results[6])
           
       } )
        
    }, [])
    return (
        <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}}
         className="banner">
            <div className="content">
                <h1 className="title">{movie ? movie.title: ""}</h1>
                <div className="bannerbuttons">
                    <button className="buttonbanner">Play</button>
                    <button className="buttonbanner">My List</button>
                </div>
                <div>
                    <h1  className="description">{movie ? movie.overview : ""}</h1>
                </div>
            </div>
            <div className="fadebottom"></div>
        </div>
    )
}
