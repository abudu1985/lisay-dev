import React, { useState, Fragment, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import faBars from "@fortawesome/fontawesome-free-solid/faBars";
import { NavLink, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Item from "./item";
import Lead from "./lead";
import { isLoggedUser } from "../../store/selectors/userSelectors";
import { signout } from "../../store/actions/auth";
import { getAllArtiles, setSearchByString } from "../../store/actions/articles";
import { getSearchString } from "../../store/selectors/searchSelectors";
import useWindowSize from "../../utils/useWindowSize";

import "./index.css";

const TopMenu = (props) => {
  const [menuClass, setMenuClass] = useState("");
  const [searchString, setSearchString] = useState("");
  const isLoggedIn = useSelector(isLoggedUser);
  const reduxSearchString = useSelector(getSearchString);
  const dispatch = useDispatch();
  const { width } = useWindowSize();

  const setToggleTopMenuClass = () => setMenuClass(menuClass ? "" : "toggled");
  let top_menu_class = `top-menu ${menuClass}`;

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
  };

  async function logout() {
    dispatch(signout());
    props.history.push("/");
  }

  return (
    <div>
      <div className={top_menu_class}>
        <Lead text="" />
        {width > 600 ? (
          <div className="right">
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                name="search"
                placeholder="Search.."
                onChange={handleSearchChange}
                value={searchString}
              />
            </form>
            {isLoggedIn && (
              <Fragment>
                <NavLink to="/dashboard" className="top-menu-item">
                  Dashboard
                </NavLink>
                <NavLink to="/articles/new" className="top-menu-item">
                  New Post
                </NavLink>
                <NavLink to="/quote" className="top-menu-item">
                  Quote
                </NavLink>
                <div className="top-menu-item" onClick={logout}>
                  Logout
                </div>
              </Fragment>
            )}
            {!isLoggedIn && (
              <Fragment>
                <Item location={"/login"} text="Login" />
              </Fragment>
            )}
          </div>
        ) : (
          <div className="right">
            {isLoggedIn && (
              <Fragment>
                <NavLink to="/dashboard" className="top-menu-item">
                  Dashboard
                </NavLink>
                <NavLink to="/articles/new" className="top-menu-item">
                  New Post
                </NavLink>
                <div className="top-menu-item" onClick={logout}>
                  Logout
                </div>
              </Fragment>
            )}
            {!isLoggedIn && (
              <Fragment>
                <Item location={"/login"} text="Login" />
              </Fragment>
            )}
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                name="search"
                placeholder="Search.."
                onChange={handleSearchChange}
                value={searchString}
              />
            </form>
          </div>
        )}
        <FontAwesomeIcon
          icon={faBars}
          className="top-menu-icon"
          onClick={setToggleTopMenuClass}
        />
        <div className="clear-fix" />
      </div>
    </div>
  );
};
export default withRouter(TopMenu);
