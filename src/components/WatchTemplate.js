import React from 'react';
import { MovieCard } from "./MovieTemplate";

const WatchTemplate = ({dataType, title}) => {
    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <div className="view">
                        <h1 className="heading">{title}</h1>
                        <span className="count-pill"> {dataType.length}</span>
                    </div>
                </div>

                {dataType.length > 0 ? (
                    <div className="movie-grid">
                    {dataType.map((movie) => (
                        <div>
                        <MovieCard movie={movie} type={title}/>
                        </div>
                    ))}
                </div>
                ): (<h2 className="no-movies">No Movies Added</h2>
                )}
            </div>
        </div>
    );
};

export default WatchTemplate