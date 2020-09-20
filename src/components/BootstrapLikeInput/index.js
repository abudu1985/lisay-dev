/**
 <div class="input-group">
 <div class="input-group-icon">@</div>
 <div class="input-group-area"><input type="text" placeholder="Email Address"></div>
 </div>

 <div class="input-group">
 <div class="input-group-icon">Income:</div>
 <div class="input-group-area"><input type="text" value="0.00"></div>
 <div class="input-group-icon">$</div>
 </div>
 </br>
 <div class="input-group">
 <div class="input-group-area"><input type="text" placeholder="Email Address"></div>
 </div>
 */
import React from 'react';
import './style.css';

const BootstrapLikeInput = (props) => (
    <div className="input-group">
        {props.iconStart ? <div className="input-group-icon">{props.iconStart}</div> : ''}
        <div className="input-group-area">
            <input {...props}/>
        </div>
        {props.iconEnd ? <div className="input-group-icon">{props.iconEnd}</div> : ''}
    </div>
);
export default BootstrapLikeInput;