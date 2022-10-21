import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faAirFreshener } from '@fortawesome/free-solid-svg-icons';
import classes from '../log-in/logInHero.module.scss';

const LogInHero = () => (
    <>
        <div className={classes.content}>
                <div id="login-form" className={classes.login__form}>
                    <div className={classes.login__form__box}>
                        <div className={classes.login__form__boxCard}>
                            <div className={classes.login__form__boxBtn}></div>
                                <button type="button" className={classes.login__form__toggleLogin__btn}>Log In</button>
                                <button type="button" className={classes.login__form__toggleRegister__btn}>Register</button>
                            </div>
                        </div>
                        <form id="login-btn" className={classes.form__input}>
                            <input type="text" className={classes.form__input__filed} placeholder="Enter Email Address" id="userSIEmail" required/>
                            <input type="text" className={classes.form__input__filed} placeholder="Enter password"  id="userSIPassword" required/>
                            <input type="checkbox" className={classes.form__input__check__box}/><span className={classes.form__input__check__span__login}>Remember Password</span>
                             <button type="submit" id="signIn" className={classes.form__input__submit__btn}>Log in</button>
                        </form>
                        <form id="regiter-btn" className={classes.form__input}>
                                <h2 className={classes.title}>Register</h2>
                                <input type="text" placeholder="User name" id="userName" />
                                <input type="email" className={classes.form__input__filed} id="userEmail" placeholder="Enter Email Address" required/>
                                <input type="text" className={classes.form__input__filed} id="userPassword" placeholder="Enter password" required/>
                                <input type="checkbox" className={classes.form__input__check__box} /><span className={classes.form__input__check__span__registration}>I agree to the terms & conditions</span>
                                <button type="submit" id="submitData" className={classes.form__input__submit__btn}>Create Account</button>
                        </form>
                
                </div>
        </div>
    
    
    </>


);

export default LogInHero;