import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
    const [movies, setMovies] = useState([]);

    const fetchMoviesHandler = async () => {
        const response = await fetch('https://swapi.dev/api/films')

        if (response.status === 200) {
            const movies = await response.json();
            const movieData = movies.results.map(item => {
                return {
                    id: item.episode_id,
                    title: item.title,
                    openingText: item.opening_crawl,
                    releaseData: item.release_date
                }
            })
            setMovies(movieData);
        }
    }

    return (
        <React.Fragment>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>
                <MoviesList movies={movies}/>
            </section>
        </React.Fragment>
    );

}

export default App;
