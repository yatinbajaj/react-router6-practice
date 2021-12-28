import React, { useState } from "react";
import './Form.css'

function Form(props) {

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [error, setError] = useState("");
    const submitHandler = (event) => {
        event.preventDefault();
        if (
            userEmail === "root" &&
            userPassword === "chitkara"
        ) {
            const loginData = { userEmail, userPassword };
            props.sendDataToApp(loginData);
            setError(null);
            setUserEmail("");
            setUserPassword("");
        } else {
            setError('UserName or Password is incorrect');
        }
    };

    const emailChangeHandler = (event) => {
        setUserEmail(event.target.value)
    }

    const passwordChangeHandler = (event) => {
        setUserPassword(event.target.value);
    }

    return (
        <React.Fragment>
            <div className="login-heading">
                Login
            </div>
            <div className="container">
                <form onSubmit={submitHandler}  > 
                    <div className="controls">
                        <label htmlFor="my-email">Email</label>
                        <input type="text" id="my-email" value={userEmail} onChange={emailChangeHandler}  autoComplete="off"/>
                    </div>
                    <div className="controls">
                        <label htmlFor="my-password">Password</label>
                        <input type="password" id="my-password" value={userPassword} onChange={passwordChangeHandler} />
                    </div>
                    <div className="actions">
                        <button type="submit">Authorize</button>
                    </div>
                </form>
            </div>
            {error && <div className="login-heading"> {error} </div>}
        </React.Fragment>
    );
}

export default Form;
