import { useState, useEffect } from 'react';
import axios from '../../services/axios';
import requests from '../../services/requests';
import { InfoWrapper, MainWrapper, MovieTitle, ButtonWrapper, Button, Description, FadeBottom } from './styles';


function Main() {

    const IMG_URL = 'https://image.tmdb.org/t/p/original'

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            let data = request.data.results;
            let randomIndex = Math.floor(Math.random() * data.length);
            setMovie(
                data[randomIndex]
            );
            return request;
        }
        fetchData();
    }, []);
    

    return (
        <MainWrapper background={`${IMG_URL}${movie.backdrop_path}`} alt={movie.name}>
            <InfoWrapper>
                <MovieTitle>{movie?.title || movie?.name || movie?.original_name}</MovieTitle>
                <ButtonWrapper>
                    <Button
                    backgroundColor={'#343a40'}
                    onHoverColor={'#2b2d42'}>
                        Play
                    </Button>
                    <Button
                    backgroundColor={'#2b2d42'}
                    onHoverColor={'#343a40'}>
                        My List
                    </Button>
                </ButtonWrapper>
                <Description>{movie?.overview}</Description>
            </InfoWrapper>
            <FadeBottom />
        </MainWrapper>

    )
}

export default Main;
