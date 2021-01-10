import React from 'react'
import './index.css'
import {NavLink} from "react-router-dom";
import LogoImage from '../../../services/logo192.png';

const Lead = () => (
    <NavLink to="/" className="top-menu-lead">
        <img className="top-menu-lead-logo" src={LogoImage} alt="" />
    </NavLink>
);
export default Lead