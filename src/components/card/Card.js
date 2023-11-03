import { useNavigate } from "react-router-dom";
import "./Card.css";

function Card({ movie }) {
  const navigate = useNavigate();

  console.log(movie);
  return (
    <div className="card">
      <div className="img-container">
        <img src={movie.Poster} />
      </div>
      <ul>
        <li>Title: {movie.Title}</li>
        <li>Type: {movie.Type}</li>
        <li>Year: {movie.Year}</li>
      </ul>
      <div className="btn">
        <button
          className="know_more_btn"
          onClick={() => {
            navigate(`/movies/${movie.imdbID}`);
          }}
        >
          Know More
        </button>
      </div>
    </div>
  );
}

export default Card;
