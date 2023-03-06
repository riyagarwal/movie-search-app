import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import axios from "axios";
import "./MovieInfo.css"

function MovieInfo() {
  const ApiKey = '389f9f98'
  const params = useParams()
  // console.log(params);

  const [movieDetails, setMovieDetails] = useState({})


  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?apikey=${ApiKey}&i=${params.imdbID}`).then((resp) => {
      // console.log(resp.data);
      setMovieDetails(resp.data)
    })
  }, [])
  
  return (
    <div className='movieInfoContainer'>
      <img src={movieDetails.Poster} />
      <ul>
        <li>Writer: {movieDetails.Writer}</li>
        <li>Actors: {movieDetails.Actors}</li>
        <li>Director: {movieDetails.Director}</li>
        <li></li>
      </ul>
    </div>
  )
}

export default MovieInfo