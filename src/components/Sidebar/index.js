import React, {useState, useEffect, useContext} from 'react';
import './style.css';
import affirmations from "../../services/affirmations";
import cat from '../../services/cat.png';
import Card from '../Card';

// import blogPost from '../../data/blog.json';
// import { NavLink } from 'react-router-dom';
// import {ArticlesDataContext} from "contexts/articlesData";

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {
    const [affirmation, setAffirmation] = useState('');
    const getRandomAffirmation = () => affirmations[Math.floor(Math.random() * affirmations.length)];
    useEffect(() => {
        setAffirmation(getRandomAffirmation()) ;
    }, []);

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
                    <p className="personalBio">My name is Cat I am a software developer specialization in Front end developement....:)</p>
                </div>
            </Card>

            {/*<Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>*/}
                {/*<div className="cardHeader">*/}
                    {/*<span>Social Network</span>*/}
                {/*</div>*/}
            {/*</Card>*/}

            {/*<Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>*/}
                {/*<div className="cardHeader">*/}
                    {/*<span>Recent Posts</span>*/}
                {/*</div>*/}

                {/*<div className="recentPosts">*/}

                    {/*{*/}
                        {/*posts.map(post => {*/}
                            {/*return (*/}
                                {/*<NavLink key={post.id} to={`/articles/${post.slug}`}>*/}
                                    {/*<div className="recentPost">*/}
                                        {/*<h3>{post.blogTitle}</h3>*/}
                                        {/*<span>{post.postedOn}</span>*/}
                                    {/*</div>*/}
                                {/*</NavLink>*/}
                                {/**/}
                            {/*);*/}
                        {/*})*/}
                    {/*}*/}
                {/*</div>*/}

            {/*</Card>*/}
      </div>
    
   )
}

export default Sidebar