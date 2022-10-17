import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../Constants/const'
import Youtube from 'react-youtube'

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId,setUrlId] = useState([])
    useEffect(() => {
        axios.get(props.url).then((res) => {
            console.log(res.data.results)
            setMovies(res.data.results)
        }).catch((err) => {
            alert('Network Error')
        })
    }, [])
    const opts = {
        height:'390',
        width:'100%',
        playerVars:{
            autoplay:1
        }
    }

    const handleMovie = (id) =>{
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
        .then(res=>{
            console.log(res.data)
            if(res.data.results.length !==0){
                setUrlId(res.data.results[0])
                console.log(res.data.results[0])
            } else{
                console.log('Trailer no available')
            }
        })
    }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {
                    movies.map((movie) =>
                        <img onClick={()=>handleMovie(movie.id)} className={props.isSmall ? 'small-poster' : 'poster'} alt="poster" src={`${imageUrl + movie.backdrop_path}`} />
                    )
                }

            </div>
            {
                urlId.site==='YouTube' ? <Youtube videoId={urlId.key} opts={opts}/> :''
            }
        </div>
    )
}

export default RowPost