import React, {useEffect, useState} from 'react'
import classNames from 'classnames';
import RoundButton from '../RoundButton';

const Quote = ({quote, onEdit, onDelete}) => {
    const [hasChanges, setHasChanges] = useState(false);
    const [value, setValue] = useState("");
    const [deleteItemId, setDeleteItemId] = useState(null);

    const onEditClick = (id, value) => {
        setHasChanges(false);
        onEdit(id, value);
    };
    const onQuoteChange = ({target}) => {
        const newValue = target.value;
        setValue(newValue);
        quote.text !== newValue ? setHasChanges(true) : setHasChanges(false);
    };

    useEffect(() => {
        if (deleteItemId) {
            const conf = window.confirm(`Are you sure?`);
            if (conf) {
                onDelete(deleteItemId);
                setDeleteItemId(null);
            } else {
                setDeleteItemId(null);
            }
        }
    }, [deleteItemId]);

    return (
        <div className="quote">
            <textarea
                className={classNames("quoteEdit ", {chosenToAlarm: !!deleteItemId})}
                defaultValue={quote.text}
                onChange={e => onQuoteChange(e)}
            />
            <div>
                {hasChanges ?
                    <RoundButton innerHtml={'Edit'}
                                 onClick={() => onEditClick(quote._id, value)}
                                 color={'blue'}
                    />
                    :
                    <RoundButton innerHtml={'Delete'}
                                 onClick={() => setDeleteItemId(quote._id)}
                                 color={'red'}
                    />
                }
            </div>
        </div>
    );
};

export default Quote;