import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { isLoggedUser } from "../../store/selectors/userSelectors";
import { signout } from "../../store/actions/auth";
import { getAllArtiles, setSearchByString } from "../../store/actions/articles";
import { getSearchString } from "../../store/selectors/searchSelectors";
import searcIcon from "../../services/icons8-search-48_new.png";

const Navbar = ({ history }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchString, setSearchString] = useState("");
  const isLoggedIn = useSelector(isLoggedUser);
  const reduxSearchString = useSelector(getSearchString);
  const [barOpened, setBarOpened] = useState(false);
  const formRef = useRef();
  const inputFocus = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllArtiles());
  }, [dispatch]);

  useEffect(() => {
    if (!reduxSearchString.length && searchString) setSearchString("");
  }, [reduxSearchString]);

  const handleSearchChange = (e) => {
    setSearchString(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchByString(searchString));
    history.push("/");
  };

  async function logout() {
    dispatch(signout());
    history.push("/");
  }

  return (
    <Nav>
      <Logo to={"/"}>
        Lisay<span>Dev</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <Form
          barOpened={barOpened}
          onClick={() => {
            setBarOpened(true);
            inputFocus.current.focus();
          }}
          onFocus={() => {
            setBarOpened(true);
            inputFocus.current.focus();
          }}
          onBlur={() => {
            setBarOpened(false);
          }}
          onSubmit={handleSearchSubmit}
          ref={formRef}
        >
          <Button type="submit" barOpened={barOpened}>
            <img src={searcIcon} alt="" />
          </Button>
          <Input
            onChange={handleSearchChange}
            ref={inputFocus}
            value={searchString}
            barOpened={barOpened}
            placeholder="Search..."
          />
        </Form>

        <NavbarLink to={"/rezume"}>CV</NavbarLink>
        {isLoggedIn && (
          <>
            <NavbarLink to={"/dashboard"}>Dashboard</NavbarLink>
            <NavbarLink to={"/articles/new"}>New Post</NavbarLink>
            <NavbarLink to={"/quote"}>Quote</NavbarLink>

            <NavbarLink to={""} onClick={logout}>
              Logout
            </NavbarLink>
          </>
        )}
        {!isLoggedIn && <NavbarLink to={"/login"}>Login</NavbarLink>}
      </Menu>
    </Nav>
  );
};

export default withRouter(Navbar);

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: hsl(240deg 7% 97% / 0%);
  top: 0;
  left: 0;
  right: 0;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;

  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: #4ab8ff;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavbarLink = styled(Link)`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #4ab8ff;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;

  &:hover {
    color: var(--mainTextColor);
  }

  &:active {
    color: var(--mainTextColor);
  }
`;

const Logo = styled(Link)`
  padding: 1rem 0;
  color: #4ab8ff;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #4ab8ff;
  width: ${(props) => (props.barOpened ? "16rem" : "1.2rem")};
  cursor: ${(props) => (props.barOpened ? "auto" : "pointer")};
  padding: 1rem;
  height: 1.2rem;
  border-radius: 10rem;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: ${(props) => (props.barOpened ? "1rem" : "0rem")};
  border: none;
  color: #4ab8ff;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: #4ab8ff;
  }
`;

const Button = styled.button`
  line-height: 1;
  pointer-events: ${(props) => (props.barOpened ? "auto" : "none")};
  cursor: ${(props) => (props.barOpened ? "pointer" : "none")};
  background-color: white;
  border: none;
  outline: none;
  background-color: transparent;

  img {
    height: 1.2rem;
  }
`;
