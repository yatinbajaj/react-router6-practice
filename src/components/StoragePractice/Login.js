import React, { useRef, useContext } from "react";
import "./Login.css";
import AuthContext from "../store/auth-context";

function Login() {
    const userEmail = useRef();
    const userPassword = useRef();
    const ctx = useContext(AuthContext);

    const submitHandler = (event) => {
        event.preventDefault();
        if (
            userEmail.current.value === "root" &&
            userPassword.current.value === "chitkara"
        ) {
            ctx.loginHandler();
          }
    };


    return (
        <React.Fragment>
        {!ctx.isLoggedIn && (
            <div className="login-heading">
                Login
            </div>
        )}
            <div className="container">
                <form onSubmit={submitHandler}>
                    <div className="controls">
                        <label htmlFor="my-email">Email</label>
                        <input type="text" id="my-email" ref={userEmail} />
                    </div>
                    <div className="controls">
                        <label htmlFor="my-password">Password</label>
                        <input type="password" id="my-password" ref={userPassword} />
                    </div>
                    <div className="actions">
                        {!ctx.isLoggedIn && <button type="submit" >
                            Authorize
                        </button>}
                    </div>
                </form>
            </div>

            
            
        </React.Fragment>
    );
}

export default Login;
