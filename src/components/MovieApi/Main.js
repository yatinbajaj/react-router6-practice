import React, { useEffect,useReducer } from "react";
import Meal from "./Meal";

const initialState = { movieList: [], isError: false };

const init = (initialState) => {
    return initialState;
}

const reducerFn = (state, action) => {
    switch (action.type) {
        case 'UPDATE_MOVIE_LIST': return { ...state, movieList: action.payload };
        case 'SET_ERROR': return { ...state, isError: action.payload };
        case 'RESET_STATE': return init(action.payload);
        default: return { ...state };
    }
};

const API_KEY = "a9118a3a";
function Main({ searchValue }) {
    
    const [movieData, dispatch] = useReducer(reducerFn, initialState,init);

    const fetchData = (searchString) => {
        fetch(`https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`).then((res) => {
            if (!res.ok)
                throw new Error('Something went wrong');
            console.log(res);
            return res.json();
        }).then((result) => {
            result.Response !== 'False' ?
                dispatch({ type: 'UPDATE_MOVIE_LIST', payload: result['Search'] }) :
                dispatch({ type: 'UPDATE_MOVIE_LIST', payload: [] });
        }).catch((err) => {
            console.log(err);
            dispatch({ type: 'SET_ERROR', payload: true });
        })
    };

    useEffect(() => {
        const timerIdentifier = setTimeout(() => {
            console.log("useEffect is called");
            console.log(searchValue);
            if (searchValue === "") {
                dispatch({ type: 'RESET_STATE', payload: initialState });
                return;
            }
            fetchData(searchValue);
        }, 500);

        return () => {
            console.log("clear timeout is called");
            clearTimeout(timerIdentifier);
        };
    }, [searchValue]);
    return (
        <div>
            {movieData.movieList.length > 0 && <Meal movieList={movieData.movieList} />}
            {movieData.isError && <div>Something went wrong</div>}
        </div>
    );
}

export default Main;
