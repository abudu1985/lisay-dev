import React from 'react'
import Grumpy from '../services/grumpy_cat.jpg';

const NotFound = () => (
    <div className="image-with-text-container">
        <img src={Grumpy} alt="404" />
        <div className="text-block-above">
            <h4>Nature</h4>
            <p>What a beautiful sunrise</p>
        </div>
    </div>
);
export default NotFound;