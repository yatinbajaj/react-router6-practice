import React from 'react'
import Styled from 'styled-components'


const Card = Styled.div`
color: #000000;
background: white;
max-width:400px;
box-shadow: 11px 11px 9px -11px rgba(0,0,0,0.53);
margin-top: 40px;
overflow:hidden;
`

const CardImage = Styled.img`
width: 100%;
object-fit: cover;
opacity: 0.9;
`

const Heading = Styled.div`
font-size:1.5rem;
color:#212129;
text-align:center;
letter-spacing: 0.1rem;
text-transform: uppercase;
padding: 20px;
`

const Info = Styled.div`
color:#212129;
font-size:1rem;
padding:10px 13px;

`
const ReadBtn = Styled.button`
width:100%;
font-weight: bold;
text-transform: uppercase;
color:#fff;
background:#A3031D;
padding:13px 0px;
border:none;
outline:none;

`
function MealCard(props) {
    return (
        <Card>
            <CardImage src={props.movie.Poster}/>
            <Heading>{props.movie.Title}</Heading>
            <Info>{props.movie.Type}</Info>
            <ReadBtn>Read More</ReadBtn>
        </Card>
    )
}

export default MealCard
