import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import classNames from 'classnames';
import './style.css';
import {getArticlesTagsTally} from "../../store/selectors/articlesSelectors";
import {setSearchByTag} from "../../store/actions/articles";
import {getSearchTag} from "../../store/selectors/searchSelectors";

/**
 * @author
 * @function Sidebar
 **/

const Tags = () => {
    const [articlesTagsTally, setArticlesTagsTally] = useState([]);
    const tagsTally = useSelector(getArticlesTagsTally);
    const searchTag = useSelector(getSearchTag);
    const dispatch = useDispatch();


    useEffect(() => {
        setArticlesTagsTally(tagsTally);
    }, [tagsTally]);

    const handleSearchSubmit = searchTag => {
        dispatch(setSearchByTag(searchTag))
    };

    const keys = Object.keys(articlesTagsTally);
    if (!keys.length) return null;
    const max = Math.max(...Object.values(articlesTagsTally));
    const min = Math.min(...Object.values(articlesTagsTally));
    const fontMin = 10;
    const fontMax = 20;

    return keys.sort((a, b) => {
        let nameA=a.toLowerCase(), nameB=b.toLowerCase();
        if (nameA < nameB)
            return -1;
        if (nameA > nameB)
            return 1;
        return 0;
    }).map((item, index) => {
        let count = articlesTagsTally[item];

        let size = count === min ? fontMin
            : (count / max) * (fontMax - fontMin) + fontMin;
        return (
            <div
                className={classNames("articlesTagsElement", {active: searchTag && searchTag === item})}
                style={{fontSize: size}}
                onClick={() => handleSearchSubmit(item)}
                key={index}
            >
                {item}&nbsp;
            </div>
        )
    });
};

export default Tags;