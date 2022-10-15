import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../Constants/const'

function RowPost() {
    const [movies,setMovies] = useState([])
    useEffect(()=>{
        axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((res)=>{
            console.log(res.data.results)
            setMovies(res.data.results)
        }).catch((err)=>{
            alert('Network Error')
        })
    },[])
    return (
        <div className='row'>
            <h2>Netflix Orginals</h2>
            <div className="posters">
                {
                    movies.map((movie)=>
                        <img className='poster' alt="poster" src={`${imageUrl+movie.backdrop_path}`} />
                    )
                }

            </div>
        </div>
    )
}

export default RowPost