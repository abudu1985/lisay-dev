import React from 'react'
import {NavLink} from 'react-router-dom'
import './index.css'

const Item = ({ location, text }) => (
    <NavLink to={location} className="top-menu-item">
      {text}
    </NavLink>
);
export default Item