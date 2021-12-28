import React from 'react'
import './Congo.css'

function Congo({logoutHandler}) {
    return (
        <div className='congo-container'>
            <p>Congratulation! You Login in Succesfully </p>
            <button type="button"  className='logout-button' onClick={logoutHandler}>Logout</button>
        </div>
    )
}

export default Congo
