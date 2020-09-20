import React, {useState, Fragment, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  faBars  from '@fortawesome/fontawesome-free-solid/faBars'
import {NavLink, withRouter} from "react-router-dom";

import  Item from "./item"
import Lead from './lead'

import './index.css'

import {useSelector, useDispatch} from 'react-redux'
import {isLoggedUser} from "../../store/selectors/userSelectors";
import {signout} from "../../store/actions/auth";
import {getAllArtiles} from "../../store/actions/articles";


const TopMenu = (props) => {
    const [menuClass, setMenuClass] = useState('');
    const isLoggedIn = useSelector(isLoggedUser);
    const dispatch = useDispatch();

    const setToggleTopMenuClass = () => setMenuClass(menuClass ? '' : 'toggled');
    let top_menu_class = `top-menu ${menuClass}`;

    useEffect(() => {
        dispatch(getAllArtiles())
    }, [dispatch]);

    return (
        <div>
            <div className={top_menu_class} >
                <Lead text="lisay-dev" />
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
                            <Item location={'/login'} text='Login' />
                        </Fragment>
                    )}
                </div>
                <FontAwesomeIcon icon={faBars} className='top-menu-icon' onClick={setToggleTopMenuClass}/>
                <div className='clear-fix' />
            </div>
        </div>
    )

    async function logout() {
        dispatch(signout());
        props.history.push('/')
    }
}
export default  withRouter(TopMenu);