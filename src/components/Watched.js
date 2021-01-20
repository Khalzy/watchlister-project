import React, {useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const Watched = () => {
    const {watched} = useContext(GlobalContext);

    const movieCard =  watched.map((movie) => (
        <div>
        <MovieCard movie={movie} type="watched"/>
        </div>
    ));

    return (
        <div>
            <div className="movie-page">
                <div className="container">
                    <div className="header">
                        <h1 className="heading">Watched Movies</h1>
                        <span className="count-pill"> {watched.length}</span>
                    </div>
                    {watched.length > 0 ? (
                        <div className="movie-grid" key={movieCard.title}>
                        {movieCard}
                    </div>
                    ): (<h2 className="no-movies">No Movies Added</h2>
                    )}
                </div>
            </div>
    </div>
    )
}
