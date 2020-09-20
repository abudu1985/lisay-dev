import React from 'react'
import './index.css'
import {NavLink} from "react-router-dom";

const Lead = ({ text }) => (
    // <div className='top-menu-lead'>
    //     {text}
    // </div>
    <NavLink to="/" className="top-menu-lead">
      {text}
    </NavLink>
);
export default Lead