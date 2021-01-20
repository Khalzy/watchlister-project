import React, {useContext, useEffect} from 'react';
import {GlobalContext} from "../context/GlobalState";
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const ResultCard = ({movie}) => {
    const { 
        addMovieToWatchlist,
        addMovieToWatched, 
        watchlist,
        watched
    } = useContext(GlobalContext);
    let storedMovie = watchlist.find((o)=> o.id === movie.id);
    let storedMovieWatched = watched.find((o) => o.id === movie.id)
    const watchlistDisabled = storedMovie
    ? true
    : storedMovie



   const watchedDisabled = storedMovieWatched
   ? true
   : storedMovieWatched;

   const poster = movie.backdrop_path ?? movie.poster_path;

    return (
        <div className="result-card">
            <div className="poster-wrapper">
                { poster ? (
                           <Link to={{ 
                               pathname: `/details/${movie.title ? movie.title : movie.name}`, 
                               state:{ 
                                results: movie
                               } }}>
                                <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path ?? movie.backdrop_path}`} alt={`${movie.title} Poster`}/>
                            </Link>         
                ): (
                    <div className="filler-poster"></div>
                )}
            </div>

            <div className="info">
                <div className="Header">
                    <h3 className="title">{movie.title ? movie.title : movie.name}</h3>
                    <h4 className="release-date">
                        {movie.release_date  ? movie.release_date: movie.first_air_date }
                    </h4>
                </div>

                <div className="btn-controls-add">

                    <div className="controls">
                        <Btn className="btn"
                        disabled={watchlistDisabled}
                        onClick={() => addMovieToWatchlist(movie)}>
                            Add to Watchlist
                        </Btn>
                    </div>

                    <div className="controls">
                        <Btn
                        disabled={watchedDisabled}
                        onClick={() => addMovieToWatched(movie)}>
                            Add to Watched
                        </Btn>
                    </div>
                 </div>
            </div>
        </div>
    )
}

const Btn = styled.button`
padding: 10px 15px;
background-color: var(--secondary);
color: var(--primary);
border-radius: 5px;
text-transform: uppercase;
font-weight: 700;
display: inline-block;
border: none;
font-size: 1rem;
transition: all 0.3s ease;
line-height: 1.1;

@media screen and (max-width: 400px) {
    font-size: 0.75rem;
}
:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;