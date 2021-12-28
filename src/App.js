import React, { useEffect, useState } from "react";
import "./App.css";

import Wrapper from "./components/MovieApi/Wrapper";
import Login from "./components/StoragePractice/Login";
import { AuthProvider } from "./components/store/auth-context";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isAuthorized");
    if (storedUserLoggedInInformation === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = () => {

    localStorage.setItem("isAuthorized", "true");
    setIsLoggedIn(true);

  };

  const logoutHandler = () => {
    localStorage.removeItem("isAuthorized");
    setIsLoggedIn(false);
  };

  return (
    <AuthProvider newValue={{ isLoggedIn, loginHandler, logoutHandler }}>
      {isLoggedIn && <Wrapper />}
      {!isLoggedIn && <Login />}

    </AuthProvider>
  );
}

export default App;
