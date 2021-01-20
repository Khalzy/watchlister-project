import React,{ useContext } from 'react';
import {GlobalContext} from "../context/GlobalState";
import {MovieCard} from "./MovieCard";

export const Watchlist = () => {
    const { watchlist } = useContext(GlobalContext);
    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">Watchlist</h1>
                    <span className="count-pill"> {watchlist.length}</span>
                </div>

                {watchlist.length > 0 ? (
                    <div className="movie-grid">
                    {watchlist.map((movie) => (
                        <div>
                        <MovieCard movie={movie} type="watchlist"/>
                        </div>
                    ))}
                </div>
                ): (<h2 className="no-movies">No Movies Added</h2>
                )}
            </div>
        </div>
    );
};
