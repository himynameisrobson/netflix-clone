import { useState, useEffect } from 'react';
import axios from '../../services/axios';

const IMG_URL = 'https://image.tmdb.org/t/p/w300';

function Row({ title, fetchUrl }) {

    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);        
            return request;
        }
        fetchData();
    }, [fetchUrl])


    return (
        <div>
            <h2>{title}</h2>
            
            <div>
                {movies.map(movie => (
                    <img src={`${IMG_URL}${movie.poster_path}`} alt={movie.name} />
                ))}
            </div>

        </div>
    )
}

export default Row;
