import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import './style.css';

const ScrollArrow = ({point}) => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return function cleanup() {
            window.removeEventListener('scroll', checkScrollTop)
        }
    });

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > point) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= point) {
            setShowScroll(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <button
            onClick={scrollTop}
            className={classNames("arrowItem ", {showItem: showScroll})}
        >&#8593;</button>
    );
};

export default ScrollArrow;