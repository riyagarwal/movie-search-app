import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import MovieInfo from './components/movie-info/MovieInfo';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   App
    // </div>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movies' element={<MovieInfo />} />
    </Routes>
  );
}

export default App;
