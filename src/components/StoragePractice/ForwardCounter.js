import React from 'react'
import './Login.css'
import useCounter from '../Hooks/use-counter';
 
function ForwardCounter() {
    const counter = useCounter(true);
    return (
        <div className="container">
            {counter}
        </div>
    )
}

export default ForwardCounter
