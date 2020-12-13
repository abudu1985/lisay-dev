import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import jwt_decode from "jwt-decode";
import './style.css'
import RoundButton from '../RoundButton';
import withToastProvider from "../../components/Toaster/withToastProvider";
import useToast from "../../components/Toaster/useToast";
import QuoteForm from './QuteForm';
import AuthForm from './AuthForm';
import useForm from "../../utils/useForm";
import useLocalStorage from "../../utils/useStorageWatcher";
import sendQuoteRequest from '../../services/db/sendQuoteRequest';
import * as types from "../../store/actions/actionTypes";
import QuoteList from './QuoteList';


const QuoteBlock = () => {
    const dispatch = useDispatch();
    const [isAuth, setAuthState] = useState(false);
    const [isLoadingProcess, setLoadingProcess] = useState(false);
    const [time, setTime] = useState(0);
    const [token, setToken] = useLocalStorage('jwtToken', '');
    const toast = useToast();

    useEffect(() => {
        if (token) {
            let curToken = token.replace('Bearer ', '');
            const decoded = jwt_decode(curToken);
            const unix = Math.round(+new Date() / 1000);
            const left = decoded.exp - unix;
            setTime(left);
            if (left && left > 0) {
                sendQuoteRequest('/quotes', 'GET', {}, token).then(data => {
                    dispatch({type: types.SET_QUOTES, payload: data})
                })
                    .catch(err => {
                        toast.add(`${err}`, 'danger');
                    });
            }
        }
    }, [isAuth, time, token]);

    const addQuote = text => {
        sendQuoteRequest('/quotes', 'POST', {text}, token).then(quote => {
            dispatch({type: types.ADD_QUOTE, payload: quote});
            toast.add('Quote was added!', 'success');
        })
            .catch(error => {
                toast.add(`${error}`, 'danger');
            });
    };

    const onEdit = (id, text) => {
        if (!id || !text) return;
        sendQuoteRequest(`/quotes/${id}`, 'POST', {id, text}, token).then(quote => {
            dispatch({type: types.EDIT_QUOTE, payload: quote});
            toast.add('Quote was edited!', 'success');
        })
            .catch(error => {
                toast.add(`${error}`, 'danger');
            });
    };

    const onDelete = id => {
        sendQuoteRequest(`/quotes/${id}`, 'DELETE', {}, token).then(data => {
            dispatch({type: types.DELETE_QUOTE, payload: id});
            toast.add('Quote was deleted!', 'success');
        })
            .catch(error => {
                toast.add(`${error}`, 'danger');
            });
    };

    const [credentials, handleChange] = useForm();
    const handleSubmit = e => {
        if (e) e.preventDefault();
        setLoadingProcess(true);
        sendQuoteRequest('/users/login', 'POST', credentials).then(({token}) => {
            setToken(token);
            setLoadingProcess(false);
            toast.add('You are logged!', 'success');
        })
            .catch(error => {
                toast.add(`${error}`, 'danger');
            });
    };

    return (
        <div className="quoteBlock">
            <RoundButton innerHtml={'Auth'}
                         onClick={() => setAuthState((isAuth) => !isAuth)}
                         color={'green'}
            />
            <AuthForm
                handleSubmit={handleSubmit}
                isLoadingProcess={isLoadingProcess}
                time={time}
                isAuth={isAuth}
                handleChange={handleChange}
            />
            <QuoteForm addQuote={addQuote}/>
            <QuoteList
                onEdit={onEdit}
                onDelete={onDelete}
            />
        </div>
    );
};

export default withToastProvider(QuoteBlock);