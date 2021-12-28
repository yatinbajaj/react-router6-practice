import React from 'react'
import './Login.css'
import useCounter from '../Hooks/use-counter';
 
function BackwardCounter() {
    const counter = useCounter(false);
    return (
        <div className="container">
            {counter}
        </div>
    )
}

export default BackwardCounter
