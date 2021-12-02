import React, { useRef, useState, useEffect } from "react";
import "./Login.css";
function Login() {
    const userEmail = useRef();
    const userPassword = useRef();
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("isAuthorized") === 1) {
            setIsAuthorized(true);
        }
    }, []);

    const authorizeHandler = () => {
        if (
            userEmail.current.value === "root" &&
            userPassword.current.value === "chitkara"
        ) {
            localStorage.setItem("isAuthorized", "1");
            setIsAuthorized(true);
        }
    };

    const logoutHandler = () => {
        localStorage.removeItem("isAuthorized");
        setIsAuthorized(false);
    };

    return (
        <React.Fragment>
            <div className="container">
                <div>
                    <label htmlFor="my-email">Email</label>
                    <input type="text" id="my-email" ref={userEmail} />
                </div>
                <div>
                    <label htmlFor="my-password">Password</label>
                    <input type="password" id="my-password" ref={userPassword} />
                </div>
                <div className="actions">
                    {!isAuthorized && <button type="button" onClick={authorizeHandler}>
                        Authorize
                    </button>}

                    {isAuthorized && <button type="button" onClick={logoutHandler}>
                        Log out
                    </button>}

                </div>
            </div>
            {isAuthorized && (
                <div className="container">Congratulation You are Authorized</div>
            )}
            {!isAuthorized && (
                <div className="container">
                    Please Try Again, Credentials are incorrect
                </div>
            )}
        </React.Fragment>
    );
}

export default Login;
