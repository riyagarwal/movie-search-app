import { useState } from "react";
import axios from "axios";
import Card from "../card/Card";

import "./Home.css";

function Home() {
  // creating client using axios
  //   const client = axios.create("https://www.omdbapi.com/?");
  const apiKey = "389f9f98";
  // final search string sent to the api
  let search;

  // this state will store movie name entered by user
  const [searchItem, setSearchItem] = useState("");

  // stores responses from api
  const [searchResults, setSearchResults] = useState([{}]);

  // condition to render results
  const [showResults, setShowResults] = useState(false);

  // sets search value according to user input
  const handleChange = (e) => {
    setSearchItem(e.target.value);
  };

  // handles search button
  const handleSearch = () => {
    // get the final string(spaces replaced with +)
    search = searchItem.trim();
    search = search.replaceAll(" ", "+");

    // setting this value to true for conditional rendering later
    // setShowResults(true);

    // send the final string to api
    axios
      .get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${search}`)
      .then((resp) => {
        console.log(resp.data);
        resp.data.Search.map((movie) => {
            setSearchResults([...searchResults, movie])
        })
         //Search is the name of the key in the response
        console.log(searchResults);
        setShowResults(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <nav>Movies App</nav>
      <hr />
      <div className="body">
        <h2>Search For Movies By Their Title</h2>
        <input placeholder="Search..." onChange={handleChange} />
        <br />
        <button onClick={handleSearch}>Search Now!</button>
      </div>
      {/* {showResults && (
        <>
          <h3>Movie Results</h3>
          <div className="card-container">
            {searchResults.map((movie) => {
                // console.log(movie);
                // console.log(movie.Title);
              <Card
                apiKey={apiKey}
                src={movie.Poster}
                title={movie.Title}
                type={movie.Type}
                year={movie.Year}
                id={movie.imdbID}
              />;
            })}
          </div>
        </>
       )}  */}

      {showResults &&
        searchResults.map((i) => {
          <Card />;
        })}

        {/* {showResults && <Card />} */}
    </div>
  );
}
export default Home;
