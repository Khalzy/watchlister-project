import React, {useState} from 'react'
import {ResultCard} from "./ResultCard"
import axios from "axios"
export const Add = () => {
    const [results, setResults] = useState([]);


    const getMovies = (e) => {
        axios.get(`https://api.themoviedb.org/3/search/multi?api_key=cee634c7a5d4a399f55393d577238c03&language=en-US&page=1&include_adult=false&query=${e.target.value}`
            ).then(response => {
                setResults(response.data.results);
                console.log(response.data.results)
            }).catch(error => {
                setResults([`${error.message}`])
            })
    }

        return (
            <div className="add-page mt-5">
                <input type="text"class="input mb-5" placeholder="Keywords" onChange={(e) => getMovies(e)} />
                {
                    results.map(movie => (
                        <ResultCard movie={movie} key={movie.id}/>
                    ))
                }
            </div>
        )
}
