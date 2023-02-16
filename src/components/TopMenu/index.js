import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Item from "./item";
import Lead from "./lead";
import { isLoggedUser } from "../../store/selectors/userSelectors";
import { signout } from "../../store/actions/auth";
import { getAllArtiles, setSearchByString } from "../../store/actions/articles";
import { getSearchString } from "../../store/selectors/searchSelectors";
import useWindowSize from "../../utils/useWindowSize";
import barsSolid from "../../services/bars-solid.svg";
import * as Constant from "../../utils/constants";

import "./index.css";

const TopMenu = ({ history }) => {
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
    history.push("/");
  };

  async function logout() {
    dispatch(signout());
    history.push("/");
  }

  return (
    <div className={top_menu_class}>
      <Lead text="" />
      {width > Constant.SMALL_SIZE ? (
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
          <>
            <Item location={"/rezume"} text="CV" />
          </>
          {isLoggedIn && (
            <>
              <Item location={"/dashboard"} text="Dashboard" />
              <Item location={"/articles/new"} text="New Post" />
              <Item location={"/quote"} text="Quote" />

              <div className="top-menu-item" onClick={logout}>
                Logout
              </div>
            </>
          )}
          {!isLoggedIn && (
            <>
              <Item location={"/login"} text="Login" />
            </>
          )}
        </div>
      ) : (
        <div className="right">
          {isLoggedIn && (
            <>
              <Item location={"/rezume"} text="CV" />
              <Item location={"/dashboard"} text="Dashboard" />
              <Item location={"/articles/new"} text="New Post" />
              <div className="top-menu-item" onClick={logout}>
                Logout
              </div>
            </>
          )}
          {!isLoggedIn && (
            <>
              <Item location={"/rezume"} text="CV" />
              <Item location={"/login"} text="Login" />
            </>
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
      <img
        src={barsSolid}
        alt="SVG as an image"
        className="top-menu-icon"
        onClick={setToggleTopMenuClass}
      />
      <div className="clear-fix" />
    </div>
  );
};
export default withRouter(TopMenu);
