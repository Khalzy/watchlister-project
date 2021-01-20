import React, { useState } from 'react'
import styled from 'styled-components';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import * as Fn from './Api';

export const Slider = () => {
const [NowPlaying, setNowPlaying] = useState([])
const [Genres, setGenre] = useState([])


    Fn.default.then((data) => {
        if (data) {
            setNowPlaying(data.now_playing.results);
            setGenre(data.Genre.genres);
        } else {
            setNowPlaying([])
        }   
    });

    const handleDragStart = (e) => e.preventDefault();

    const getGenres = (ids) => {
       return ids.map(id => {
            // eslint-disable-next-line
               return  Genres.map(genre => {
                    // eslint-disable-next-line
                     if ( genre.id == id ) {
                         const genres = `${genre.name}  `
                        return genres
                    }
                });
        })
    }  
    const items = NowPlaying ?
        NowPlaying.map(tvShow => (
            <Card>
            <img src={`https://image.tmdb.org/t/p/w1280/${tvShow.backdrop_path}`}  onDragStart={handleDragStart} alt={tvShow.name}/>
            <Container>
            <Title>
                <h3>{tvShow.name}</h3>
            </Title>
            <Info>
                <p>{tvShow.vote_average}</p>
                <p>{tvShow.first_air_date.substring(0,4)}</p>
                <p>{getGenres(tvShow.genre_ids)}</p>
            </Info>
            </Container>
        </Card>
        )) : <div>Error No Data</div>

    const response = {
      0: { items: 1 },
      1024: { items: 1 },
      1440: { items: 1 },
    }
    

    return (
        <Contain>
            <Radials>
                <AliceCarousel mouseTracking items={items} responsive={response} controlsStrategy='responsive' disableButtonsControls={false} />
            </Radials>
        </Contain>
    )
}




const Card = styled.div`
    max-height: 600px;
    img {
        width: 100%;
        object-fit: contain;
        background-repeat: no-repeat;
        background-size: 100% auto; 
        z-index:1;
    }
    p {
        font-size: 20px;
    }
    @media screen and (max-width: 680px) {
        p {
            display: none;
        }
    }
`;

 const Contain = styled.div`
    width: 100%;
`;
const Radials = styled.div`
    .alice-carousel {
        cursor: grab;
        background-color: transparent;
    }
    .alice-carousel__dots {
        margin: 30px 3px 5px;
        list-style: none;
        text-align: center;
        bottom: 4em;
        left: 25em;
        @media screen and (max-width: 680px) {
                display: none;
        }
    }
    .alice-carousel__prev-btn, .alice-carousel__next-btn {
        font-weight: 900;
    }

`;

 const Title = styled.div`
    font-weight: 900;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    color: white;
    h3 {
        font-weight: 500;
        margin: 0;
        margin-bottom: .2em;
        text-shadow: 0 1px 10px #111;
    }
`;


const Info = styled.div`
    display: flex;
    width: 100%;
    p {
        padding-right: 10px;
    }
    @media screen and (max-width: 680px) {
        width: 100%;
      }
`;


 const Container = styled.div`
    color: white;
    height: 100px;
    padding: 20px;
    position: absolute;
    bottom: 0em;
    left: 2em;
    z-index: 10;
    p {
        font-weight: 400;
        color: white;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    }
    span {
        background-color: 50px;
        max-height: 50px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    @media screen and (max-width: 680px) {
        position: absolute;
        left: 1em;
        width: auto;
        height: 63px;
        p {
            font-size: 10px;
        }
        span {
            display: none;
        }
      }
`;