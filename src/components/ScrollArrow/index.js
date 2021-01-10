import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import './style.css';

const ScrollArrow = ({point}) => {
    const [showScroll, setShowScroll] = useState(false);
    useEffect(() => {
        return () => { window.removeEventListener('scroll', checkScrollTop) }
    }, []);

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

    window.addEventListener('scroll', checkScrollTop);

    return (
        <button
            onClick={scrollTop}
            className={classNames("arrowItem ", {showItem: showScroll})}
        >&#8593;</button>
    );
};

export default ScrollArrow;