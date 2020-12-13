import React, {useState} from 'react'
import {useSelector} from "react-redux";
import classNames from "classnames";
import {getQuotes} from "../../store/selectors/quotesSelectors";
import withToastProvider from "../Toaster/withToastProvider";
import useToast from "../Toaster/useToast";

const QuoteForm = ({addQuote}) => {
    const [value, setValue] = useState("");
    const [quoteExist, setQuoteExist] = useState(false);
    const quotes = useSelector(getQuotes);
    const toast = useToast();

    const handleSubmit = e => {
        e.preventDefault();
        if (!value || quoteExist || value.length < 10) {
            toast.add('Wrong text for quote!!!', 'danger');
            return;
        }
        addQuote(value);
        setValue("");
    };

    const handleValue = e => {
        const {value} = e.target;
        setValue(value);
        const alreadyExist = quotes.some(quote => quote.text === value);
        if (alreadyExist) setQuoteExist(true);
        if (!alreadyExist && quoteExist) setQuoteExist(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                className={classNames("quoteCreate ", {chosenToAlarm: quoteExist})}
                value={value}
                onChange={handleValue}
            />
        </form>
    );
};

export default withToastProvider(QuoteForm);