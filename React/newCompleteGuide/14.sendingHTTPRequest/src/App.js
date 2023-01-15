import React, {useEffect, useState, useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const fetchMoviesHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('https://swapi.dev/api/films')
            if (response.status !== 200) {
                throw new Error('Error Occurred');
            }
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
        } catch (e) {
            setError(e.message);
        } finally {
            console.log('finally')
            setIsLoading(false)
        }
    }, [])


    useEffect(() => {
        fetchMoviesHandler()
    }, [fetchMoviesHandler]);

    return (
        <React.Fragment>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>
                {!isLoading && movies.length > 0 && <MoviesList movies={movies}/>}
                {!isLoading && movies.length === 0 && !error && <p>Found No Movies</p>}
                {!isLoading && error && <p> {error}</p>}
                {isLoading && <p>Loading</p>}
            </section>
        </React.Fragment>
    );

}

export default App;
