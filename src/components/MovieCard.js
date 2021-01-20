import React from 'react'
import { MovieControls } from "./MovieControls";

export const MovieCard = ({movie, type}) => {
    return (
            <div className="movie-card">
             {movie.poster_path ? ( 
                    <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} 
                    alt={`${movie.title ? movie.title : movie.name} Poster`}
                    />
                 ): ( 
                    <div className="filler-poster"></div>
                )}
                <div className="Template">
                    <h5>{movie.title ? movie.title : movie.name}</h5>
                <h6 className="release">{movie.release_date  ? movie.release_date.substring(0, 4) : movie.first_air_date.substring(0, 4) }</h6>
                </div>
                 <MovieControls type={type} movie={movie} />
            </div>
    )
}
