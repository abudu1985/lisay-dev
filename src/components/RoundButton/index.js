import React from 'react';
import './style.css';

const RoundButton = props  => (
    <input
        type={props.type || 'button'}
        className={"cgnintro-roundbutton" +
        (props.color === 'green' ? ' cgnintro-roundbutton-green' : '') +
        (props.color === 'red' ? ' cgnintro-roundbutton-red' : '')
        }
        onClick={props.onClick}
        disabled={props.disabled}
        value={props.innerHtml}>
    </input>
);

export default RoundButton;