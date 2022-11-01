import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAddressCard, faAirFreshener } from '@fortawesome/free-solid-svg-icons';
import classes from '../log-in/logInHero.module.scss';

function LogInHero() {
    const [toggleRegister, setToggleRegister] = useState(false);

    const menuToggleHandlerBtn = () => {
        console.log('yay')
        setToggleRegister((x) => !x);
    };
    
    return(
        <div className={classes.content}>
            <div className={classes.section}>
                <div className={classes.section__main}>
                        <div id="login-form" className={classes.login}>
                            {/* <div className={classes.login__box}> */}
                                {/* <div className={classes.login__box__boxCard}> */}
                                    <input  id="darkmode-toggle"type="checkbox" className={  classes.login__form}aria-label="dark mode btton" />
                                    <label onClick={menuToggleHandlerBtn} className={ !toggleRegister?classes.login__form__boxBtn:classes.login__form__boxBtn__register} htmlFor="darkmode-toggle">
                                        <h3  type="text" className={ classes.login__form__boxBtn__toggleLogin}>Log In</h3>
                                        <h3 type="text" className={classes.login__form__boxBtn__toggleRegister}>Register</h3>
                                    </label>
                                
                                {/* </div> */}
                        {/* </div> */}
                        <div className={classes.form__container}>
                                {toggleRegister ? (
                            <form id="regiter-btn" className={classes.form__input}>
                            <h2 className={classes.form__input__title}>Register</h2>
                                <input type="text"  className={classes.form__input__user}placeholder="User name" id="userName" />
                                <input type="email" className={classes.form__input__filed} id="userEmail" placeholder="Enter Email Address" required />
                                <input type="text" className={classes.form__input__filed} id="userPassword" placeholder="Enter password" required />
                                <input type="checkbox" className={classes.form__input__check__box} /><span className={classes.form__input__check__span__registration}>I agree to the terms & conditions</span>
                                <button type="submit" id="submitData" className={classes.form__input__submit__btn}>Create Account</button>
                        </form>
                        
                        ) : (
                            <form id="login-btn" className={classes.form__input}>
                            <h2 className={classes.form__input__title}>Log in</h2>
                            <input type="text" className={classes.form__input__filed} placeholder="Enter Email Address" id="userSIEmail" required />
                            <input type="text" className={classes.form__input__filed} placeholder="Enter password" id="userSIPassword" required />
                            <input type="checkbox" className={classes.form__input__check__box} /><span className={classes.form__input__check__span__login}>Remember Password</span>
                            <button type="submit" id="signIn" className={classes.form__input__submit__btn}>Log in</button>
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