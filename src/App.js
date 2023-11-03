import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import MovieInfo from './components/movie-info/MovieInfo';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movies/:imdbID' element={<MovieInfo />} />
    </Routes>
  );
}

export default App;
