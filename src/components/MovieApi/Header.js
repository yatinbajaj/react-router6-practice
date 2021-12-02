import React from 'react'
import styled from 'styled-components'

const MovieHeader = styled.header`
padding: 20px 10px;
color:#000;
display:flex;
flex-direction:row;
justify-content:space-between;
align-content:center;
box-shadow: 0px 0px 14px -5px rgba(0,0,0,0.75);
`

const HeaderTitle = styled.div`
font-weight:bold;
font-size:1.5rem;
`
const Search = styled.div`
`

const SearchInputField = styled.input`
padding: 10px;
outline:none;
border-radius:10px;
`
function Header(props) {
    const searchFieldHandler = (event) => {
        props.sendDataToWrapper(event.target.value);
    }
    return (
        <MovieHeader>
            <HeaderTitle>The Movie App</HeaderTitle>
            <Search>
                <SearchInputField type="text" placeholder="Movie Name" onChange={searchFieldHandler}/>
            </Search>
        </MovieHeader>
    )
}

export default Header
