import React, { useContext } from "react";
import styled from "styled-components";
import AuthContext from "../store/auth-context";

const MovieHeader = styled.header`
  width:100%;
  padding: 20px 10px;
  color: #000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  box-shadow: 0px 0px 14px -5px rgba(0, 0, 0, 0.75);
  overflow:hidden;
`;

const HeaderTitle = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;
const SearchContainer = styled.div`
  display:flex;
  justify-content: space-around;
  align-content: center;
`;

const SearchInputField = styled.input`
  padding: 10px;
  outline: none;
  border-radius: 10px;
`;
const LogoutButton = styled.button`
  font: inherit;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  background-color: #bf1e2d;
  color: white;
  margin-right: 1rem;
  margin-left: 1rem;
  padding: 0.8rem 2.6rem;
  border: none;
  border-radius: 5px;
`;

function Header(props) {
  console.log('header');
    const ctx = useContext(AuthContext);
    const searchFieldHandler = (event) => {
        props.sendDataToWrapper(event.target.value);
    };

    return (
        <MovieHeader>
            <HeaderTitle>The Movie App</HeaderTitle>
            <SearchContainer>
                <SearchInputField
                    type="text"
                    placeholder="Movie Name"
                    onChange={searchFieldHandler}
                />
                <LogoutButton onClick={ctx.logoutHandler}>Logout</LogoutButton>

            </SearchContainer>
        </MovieHeader>
    );
}

export default React.memo(Header);
