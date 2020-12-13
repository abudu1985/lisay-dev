import React from 'react'
import {useSelector} from 'react-redux'
import './style.css'
import Quote from './Quote';
import {getQuotes} from "../../store/selectors/quotesSelectors";


const QuoteList = ({ onEdit, onDelete }) => {
    const quotes = useSelector(getQuotes);

    return (
        <React.Fragment>
            {
                quotes.length &&
                <div
                    className="quote-list">
                    {quotes.map(quote => (
                        <Quote
                            key={quote._id}
                            quote={quote}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />
                    ))}
                </div>
            }
        </React.Fragment>
    );
};

export default QuoteList;