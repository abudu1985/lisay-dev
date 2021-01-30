import React from 'react';
import classNames from 'classnames';
import './style.css';

const RoundButton = ({type = 'button', disabled = false, color, onClick, innerHtml, additionalClass}) => (
    <button
        type={type}
        className={classNames("roundbutton ", additionalClass, {
            "roundbutton-pale": color === 'pale',
            "roundbutton-green": color === 'green',
            "roundbutton-red": color === 'red'
        })}
        onClick={onClick}
        disabled={disabled}
    >
        {innerHtml}
    </button>
);

export default RoundButton;