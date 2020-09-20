import React, { useEffect, useRef } from 'react';
import './style.css'

function Toast({ children, remove, type }) {
    const removeRef = useRef();
    removeRef.current = remove;

    useEffect(() => {
        const duration = 3000;
        const id = setTimeout(() => removeRef.current(), duration);

        return () => clearTimeout(id);
    }, []);

    return (
        <div className={`toast toast-${type}`}>
            <div className="toast__text">
                { children }
            </div>
            <div>
                <button onClick={remove} className="toast__close-btn">x</button>
            </div>
        </div>
    );
}

export default Toast;