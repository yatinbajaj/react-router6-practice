import React from 'react'
import { useLocation } from 'react-router-dom';

function Payment() {
    const location = useLocation();
    console.log(location);
    return (
        <div>
            Enter Card Detail To Pay Total Due : {location.state.totalDue}
        </div>
    )
}

export default Payment
