import { useState, useEffect } from 'react';
import axios from '../../services/axios';
import { Wrapper, Title, MovieRow, Poster } from './styles';


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
        <Wrapper>
            <Title>{title}</Title>
            
            <MovieRow>
                {movies.map(movie => (
                    <Poster key={movie.id} src={`${IMG_URL}${movie.poster_path}`} alt={movie.name} />
                ))}
            </MovieRow>

        </Wrapper>
    )
}

export default Row;
