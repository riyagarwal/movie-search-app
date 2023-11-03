import { useState } from "react";
import axios from "axios";
import Card from "../card/Card";
import Nav from "../nav/Nav";
import "./Home.css";

function Home() {
  const apiKey = "389f9f98";
  let search;

  // this state will store movie name entered by user
  const [searchItem, setSearchItem] = useState("");

  // stores responses from api
  const [searchResults, setSearchResults] = useState([]);

  // condition to render results
  const [error, setError] = useState(false);

  // sets search value according to user input
  const handleChange = (e) => {
    setSearchItem(e.target.value);
  };

  // handles search button
  const handleSearch = () => {
    // get the final string(spaces replaced with +)
    search = searchItem.trim();
    search = search.replaceAll(" ", "+");

    if (!search) {
      setError(true);
    } else {
      // send the final string to api
      axios
        .get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${search}`)
        .then((resp) => {
          if (resp.data.Error) {
            setError(true);
          } else {
            setSearchResults(resp.data.Search);
            setError(false);
          }
        });
    }
  };

  return (
    <div className="home-container">
      <Nav />
      <div className="body">
        <h2 style={{ fontWeight: "400" }}>Search For Movies By Their Title</h2>
        <input placeholder="Search..." onChange={handleChange} />
        <br />
        <button onClick={handleSearch} className="searchBtn">
          Search Now!
        </button>
      </div>
      {error ? (
        <p className="error">Enter a movie name</p>
      ) : (
        <div className="movie-list">
          <h3>Movie Results</h3>
          <div className="card-container">
            {searchResults?.map((movie) => {
              return <Card movie={movie} key={movie.imdbID} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
export default Home;
