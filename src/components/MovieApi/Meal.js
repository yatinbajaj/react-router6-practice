import React from 'react'
import MealCard from './MealCard'
import styled from 'styled-components'

const CardWrapper = styled.div`

display:grid;
grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
gap:20px;
padding: 10px 40px;
// grid-auto-rows: 150px;   
// grid-auto-flow: row dense;
`
function Meal({movieList}) {
    console.log(movieList);
    const uid = () => {
        const head = Date.now().toString();
        const tail = Math.random().toString(36).substr(2);
        return head + tail;
    };
    return (
        <CardWrapper>
            {movieList.map((movie) => {
                return <MealCard movie={movie} key={uid()}/>
            })}
        </CardWrapper>
    )
}

export default React.memo(Meal)
