import React,{useState} from 'react'
import Header from './Header'
import Main from './Main'

function Wrapper() {
    const [searhValue, updateSearchValue] = useState("");
    const getSearchValueFromHeader = (searchValue) => {
        updateSearchValue(searchValue);
    }
    return (
        <React.Fragment>
            <Header sendDataToWrapper={getSearchValueFromHeader}/>
            <Main searchValue={searhValue}/>
        </React.Fragment>
    )
}

export default Wrapper
