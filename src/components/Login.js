import React, {useState} from "react";
import {connect} from "react-redux";
import {signin} from "../store/actions/auth";
import useForm from "../utils/useForm";
import validate from "../utils/validateLoginForm";
import Spinner from "./Spinner";

const Login = ({
                   signin,
                   authMsg,
                   history,
               }) => {
    const [isLoadingProcess, setLoadingProcess] = useState(false);
    const [credentials, handleChange, handleSubmit, errors] = useForm(
        login,
        validate,
    );

    function login() {
        setLoadingProcess(true);
        signin(credentials.email, credentials.password, () =>
            history.push("/")
        );
    }

    return (
        <div className="App">
            <div className="login">
                <h1>Hi there!</h1>
                <h2>Sign in</h2>
                {authMsg && <p className="auth-message">{authMsg}</p>}
                <form onSubmit={handleSubmit} noValidate>
                    {/* Email */}
                    <div className="input-group">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={credentials.email}
                            placeholder="Your e-mail"
                            onChange={handleChange}
                            className={
                                (errors.emailIsEmpty || errors.emailFormatInvalid) &&
                                "input-error"
                            }
                        />
                        {errors.emailIsEmpty && <small>{errors.emailIsEmpty}</small>}
                        {errors.emailFormatInvalid && (
                            <small>{errors.emailFormatInvalid}</small>
                        )}
                    </div>

                    {/* PASSWORD */}
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={credentials.password}
                            placeholder="Your password"
                            onChange={handleChange}
                            className={
                                (errors.passIsStrong || errors.passIsEmpty) && "input-error"
                            }
                        />
                        {errors.passIsStrong && <small>{errors.passIsStrong}</small>}
                        {errors.passIsEmpty && <small>{errors.passIsEmpty}</small>}
                    </div>

                    {/* BUTTONS */}
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
        </div>
    );
};

const mapStateToProps = state => ({
    authMsg: state.authReducer.authMsg,
});

const mapDispatchToProps = dispatch => ({
    signin: (email, password, callback) =>
        dispatch(signin(email, password, callback)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
