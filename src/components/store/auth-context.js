import React from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    loginHandler:()=>{},
    logoutHandler:()=>{},
});

export const AuthProvider = (props) => {
    return <AuthContext.Provider value={props.newValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext