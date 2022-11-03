import React, { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAddressCard, faAirFreshener } from '@fortawesome/free-solid-svg-icons';
import classes from '../log-in/logInHero.module.scss';

function LogInHero({isAuthenticated,onLogin,onLogout}) {
    const [toggleRegister, setToggleRegister] = useState(false);
    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);
    const menuToggleHandlerBtn = () => {
        console.log('yay')
        setToggleRegister((x) => !x);
    };
    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    
        setFormIsValid(
          event.target.value.includes('@') && enteredPassword.trim().length > 6
        );
      };
    
      const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    
        setFormIsValid(
          event.target.value.trim().length > 6 && enteredEmail.includes('@')
        );
      };
    
      const validateEmailHandler = () => {
        setEmailIsValid(enteredEmail.includes('@'));
      };
    
      const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6);
      };
    
      const submitHandler = (event) => {
        event.preventDefault();
        onLogin(enteredEmail, enteredPassword);
      };
    return(
        <div className={classes.content}>
            <div className={classes.section}>
                <div className={classes.section__main}>
                        <div id="login-form" className={classes.login}>
                            <input  id="darkmode-toggle"type="checkbox" className={  classes.login__form}aria-label="dark mode btton" />
                            <label onClick={menuToggleHandlerBtn} className={ !toggleRegister?classes.login__form__boxBtn:classes.login__form__boxBtn__register} htmlFor="darkmode-toggle">
                                <h3  type="text" className={ classes.login__form__boxBtn__toggleLogin}>Log In</h3>
                                <h3 type="text" className={classes.login__form__boxBtn__toggleRegister}>Register</h3>
                            </label>
                        <div className={classes.form__container}>
                                {toggleRegister ? (
                                <form id="regiter-btn" className={classes.form__input}>
                                    <h2 className={classes.form__input__title}>Register</h2>
                                    <div className={ emailIsValid === false ?classes.form__input__control: classes.form__input__invalid }>
                                        <input
                                            type="email"
                                            className={classes.form__input__filed}
                                            id="userEmail"
                                            placeholder="Enter Email Address" required
                                        />
                                    </div>
                                    <div className={ !passwordIsValid === false ?classes.form__input__control: classes.form__input__invalid }>
                                        <input
                                            type="text"
                                            className={classes.form__input__filed}
                                            id="userPassword"
                                            placeholder="Enter password"
                                            required
                                        />
                                    </div>
                                    <button type="submit" id="submitData" className={classes.form__input__submit__btn}>Create Account</button>
                                </form>
                                ) : (
                                    <form onSubmit={submitHandler} id="login-btn" className={classes.form__input}>
                                        <h2 className={classes.form__input__title}>Log in</h2>
                                        <div className={ emailIsValid === true ?classes.form__input__control: classes.form__input__invalid }>
                                            <input
                                                type="text"
                                                placeholder="Enter Email Address"
                                                id="userSIEmail" required
                                                value={enteredEmail}
                                                onChange={emailChangeHandler}
                                                onBlur={validateEmailHandler}
                                            />
                                        </div>
                                        <div className={ passwordIsValid  === true ?classes.form__input__control: classes.form__input__invalid }>
                                            <input
                                                type="text"
                                                placeholder="Enter password" id="userSIPassword"
                                                required
                                                value={enteredPassword}
                                                onChange={passwordChangeHandler}
                                                onBlur={validatePasswordHandler}
                                            />
                                        </div>
                                        <button type="submit" id="signIn" disabled={!formIsValid} className={classes.form__input__submit__btn}>Log in</button>
                                </form>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default LogInHero;