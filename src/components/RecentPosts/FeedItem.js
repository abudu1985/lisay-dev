import React, {Fragment, useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom';
import './style.css';
import Card from '../Card';


const FeedItem = ({article}) => {
    const history = useHistory();
  const [chosenArticle, setChosenArticle] = useState(false);

    useEffect(() => {
        if (chosenArticle  ) {
            history.push({
                pathname: `/article/${chosenArticle  .slug}`,
                state: {data: chosenArticle  }
            })
        }
    }, [chosenArticle  ]);

    if (!article) return null;

    return (
        <Fragment>
            {
                chosenArticle  &&
                    <div className="overlaySpinner">
                    </div>
            }
            <Card style={{marginBottom: '20px'}} onClick={() => setChosenArticle(article)}>
                <div>
                    <img className="postImageWrapper" src={article.articlePreview} alt=""/>
                </div>
                <div className="postImageTitle">{article.title}</div>
            </Card>
        </Fragment>
        )
};

export default FeedItem;