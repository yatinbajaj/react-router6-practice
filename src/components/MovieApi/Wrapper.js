import React,{useState,useCallback} from 'react'
import Header from './Header'
import Main from './Main'

function Wrapper() {
    console.log('wrapper');
    const [searhValue, updateSearchValue] = useState("");
    const getSearchValueFromHeader = useCallback((searchValue) => {
        updateSearchValue(searchValue);
    }, []);
    return (
        <React.Fragment>
            <Header sendDataToWrapper={getSearchValueFromHeader}/>
            <Main searchValue={searhValue}/>
        </React.Fragment>
    )
}

export default Wrapper
