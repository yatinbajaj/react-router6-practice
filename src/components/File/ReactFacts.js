import React from 'react'
import './ReactFacts.css'
function ReactFacts({ facts }) {
    facts.map(fact => console.log(fact));
    return (
        <main className="main">
            <h1 className="main--title">Fun facts about React</h1>
            <ul className="main--facts">
                {facts.map(fact => {
                    return <li>{fact}</li>
                })}
            </ul>
        </main>
    )
}

export default ReactFacts
