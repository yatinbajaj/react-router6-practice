import React, { useEffect, useState,useReducer } from "react";
import Meal from "./Meal";

function Main({ searchValue }) {
    const [movieList, updateMovieList] = useState([]);
    const [isError, setIsError] = useState(false);

    const fetchData = (searchString) => {
        fetch(`https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`).then((res) => {
            if (!res.ok)
                throw new Error('Something went wrong');
            return res.json();
        }).then((result) => {
            result.Response !== 'False' ? updateMovieList((prevList) => [...prevList, result]) : updateMovieList((prevList) => prevList);
            
        }).catch((err) => {
            console.log(err);
            setIsError(true);
        })
    };

    useEffect(() => {
        const timerIdentifier = setTimeout(() => {
            console.log("useEffect is called");
            console.log(searchValue);
            fetchData(searchValue);
        }, 500);

        return () => {
            console.log("clear timeout is called");
            clearTimeout(timerIdentifier);
        };
    }, [searchValue]);

    console.log(movieList.length);
    console.log(movieList);
    
    return <div>
        {movieList.length > 0 && <Meal movieList={movieList[0]['Search']} />}
        {isError && <div>Something went wrong</div>}
    </div>;
}

export default Main;
