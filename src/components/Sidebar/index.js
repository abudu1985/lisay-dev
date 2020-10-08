import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './style.css';
import affirmations from "../../services/affirmations";
import cat from '../../services/cat.png';
import Card from '../Card';
import {getArticlesTagsTally} from "../../store/selectors/articlesSelectors";
import {setSearchByTag} from "../../store/actions/articles";
import {getSearchTag} from "../../store/selectors/searchSelectors";
import classNames from 'classnames';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {
    const [affirmation, setAffirmation] = useState('');
    const [articlesTagsTally, setArticlesTagsTally] = useState([]);
    const getRandomAffirmation = () => affirmations[Math.floor(Math.random() * affirmations.length)];
    const tagsTally = useSelector(getArticlesTagsTally);
    const searchTag = useSelector(getSearchTag);
    const dispatch = useDispatch();

    useEffect(() => {
        setAffirmation(getRandomAffirmation()) ;
        setArticlesTagsTally(tagsTally);
    }, [tagsTally]);

    const handleSearchSubmit = searchTag => {
        dispatch(setSearchByTag(searchTag))
    };

    const renderTags = () => {
        const keys = Object.keys(articlesTagsTally);
        if(!keys.length) return null;
        const max = Math.max(...Object.values(articlesTagsTally));
        const min = Math.min(...Object.values(articlesTagsTally));
        const fontMin = 10;
        const fontMax = 20;
        return keys.map((item, index) => {
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

  return(
      <div className="sidebarContainer" style={{
          width: props.width
      }}>
          <div className="sidebarAffirmation">{affirmation}</div>
            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>About Me</span>
                </div>
                <div className="profileImageContainer">
                    <img src={cat} alt="" />
                </div>
                <div className="cardBody">
                    <p className="personalBio">My name is Cat I am a software developer specialized in Frontend development....:)</p>
                </div>
            </Card>
          <div className="sidebarAffirmation">{renderTags()}</div>
      </div>
    
   )
};

export default Sidebar