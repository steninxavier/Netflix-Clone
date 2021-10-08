import React,{useState} from 'react'
import './RowPost.css'
import { useEffect } from 'react/cjs/react.development'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/constants'
export default function RowPost() {
    const [movies,setMovies] = useState([])
    useEffect(() => {
        axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then(response=>{
            console.log(response.data)
            setMovies(response.data.results)
        }).catch(err=>{
            alert("network error")
        })
        
    }, [])
    return (
        <div className="row">
            <h2>Popular on Netflix</h2>
            <div className="posters">

                {movies.map((obj)=>
                
                    <img className="poster" src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
                
                )}
                
                
            </div>
            
        </div>
    )
}
