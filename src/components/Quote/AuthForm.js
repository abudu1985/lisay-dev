import React from 'react'

import classNames from 'classnames';
import './style.css'
import Spinner from '../Spinner';

const AuthForm = ({isAuth, handleSubmit, handleChange, isLoadingProcess, time}) => {
    return (
        <div className={classNames("quoteLoginBlock", {hided: !isAuth})}>
            <h1>{time > 0 ? time : ''}</h1>
            <form onSubmit={e => handleSubmit(e)} noValidate>
                <div className="input-group">
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your e-mail"
                        onChange={handleChange}
                        className={"input-error"}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Your password"
                        onChange={handleChange}
                        className={"input-error"}
                    />
                </div>
                <div>
                    <button type="submit" className="btn-login">
                        {isLoadingProcess ? (
                            <Spinner/>
                        ) : ("Sign in")
                        }
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AuthForm;