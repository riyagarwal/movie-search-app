import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./MovieInfo.css";

function MovieInfo() {
  const ApiKey = "389f9f98";
  const params = useParams();

  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?apikey=${ApiKey}&i=${params.imdbID}`)
      .then((resp) => {
        setMovieDetails(resp.data);
      });
  }, []);

  console.log(movieDetails);

  return (
    <>
      <div className="movie_heading_div">
        <h1 className="movie_heading">{movieDetails.Title}</h1>
      </div>
      <div className="movieInfoContainer">
        <img src={movieDetails.Poster} className="detail_img" />
        <ul className="movie_details">
          <li>
            <b>Writer:</b> {movieDetails.Writer}
          </li>
          <li>
            <b>Actors:</b> {movieDetails.Actors}
          </li>
          <li>
            <b>Director:</b> {movieDetails.Director}
          </li>
          <li>
            <b>Released on:</b> {movieDetails.Released}
          </li>
          <li>
            <b>Genre:</b> {movieDetails.Genre}
          </li>
          <li>
            <b>Plot:</b> {movieDetails.Plot}
          </li>
        </ul>
      </div>
    </>
  );
}

export default MovieInfo;
