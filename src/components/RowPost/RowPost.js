import React,{useState} from 'react'
import './RowPost.css'
import { useEffect } from 'react/cjs/react.development'
import axios from '../../axios'
import {imageUrl} from '../../constants/constants'
export default function RowPost(props) {
    const [movies,setMovies] = useState([])
  
    useEffect(() => {
        axios.get(props.url).then(response=>{
            console.log(response.data)
            setMovies(response.data.results)
        }).catch(err=>{
            alert("network error")
        })    
    }, [])
        
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">

                {movies.map((obj)=>
                
                    <img className={props.isSmall ? "smallposter": "poster"} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
                
                )}
                
                
            </div>
            
            
        </div>
    )
}
