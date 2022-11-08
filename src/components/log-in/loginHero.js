import React, { useState,useReducer,useEffect} from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAddressCard, faAirFreshener } from '@fortawesome/free-solid-svg-icons';
import classes from '../log-in/logInHero.module.scss';
//deffining our actions
const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
      return { value: action.val, isValid: action.val.includes('@') };
    }
    if (action.type === 'INPUT_BLUR') {
      return { value: state.value, isValid: state.value.includes('@') };
    }
    return { value: '', isValid: false };
}; 
const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
      return { value: action.val, isValid: action.val.trim().length > 6 };
    }
    if (action.type === 'INPUT_BLUR') {
      return { value: state.value, isValid: state.value.trim().length > 6 };
    }
    return { value: '', isValid: false };
};
  

function LogInHero({isAuthenticated,onLogin,onLogout}) {
    const [toggleRegister, setToggleRegister] = useState(false);
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [emailIsValid, setEmailIsValid] = useState();
    // const [enteredPassword, setEnteredPassword] = useState('');
    // const [passwordIsValid, setPasswordIsValid] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);

//using Reducer email
const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
});
//using pasward reducer 
    
const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
});
   //using  effect
    
 const { isValid: emailIsValid } = emailState;
const { isValid: passwordIsValid } = passwordState;
useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);
  //handling the email input value with a dispature inside a function with a type and payload
    const emailChangeHandler = (event) => {
        dispatchEmail({type: 'USER_INPUT', val: event.target.value});
    
    //     setFormIsValid(
    //       event.target.value.includes('@') && passwordState.isValid
    //     );
      };
    
      const passwordChangeHandler = (event) => {
        // setEnteredPassword(event.target.value);
        dispatchPassword({ type: 'USER_INPUT', val: event.target.value });

    
        // setFormIsValid(
        //   emailState.isValid && event.target.value.trim().length > 6
        // );
      };
    
      const validateEmailHandler = () => {
        dispatchEmail({type: 'INPUT_BLUR'});
      };
    
    //previous
    //   const validatePasswordHandler = () => {
    //     setPasswordIsValid(enteredPassword.trim().length > 6);
    //   };
    
      const validatePasswordHandler = () => {
        dispatchPassword({ type: 'INPUT_BLUR' });
    };
    const enteredEmail = emailState.value;
    const enteredPassword =  passwordState.value;
  const submitHandler = (event) => {
    if (toggleRegister) {
      event.preventDefault();
      onLogin(emailState.value, passwordState.value);
    } else {
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCaK2R-HAo3Lfbm4YaWZxPevIV2_xA6jOk',
        {
          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      ).then((res) => {
        if (res.ok) {
          // ...
        } else {
          return res.json().then((data) => {
            // show an error modal
            console.log(data);
          });
        }
      });
    };
  }

    //handling toogle button for login and registration 
    const menuToggleHandlerBtn = () => {
        console.log('yay')
        setToggleRegister((x) => !x);
    };
    return(
        <div className={classes.content}>
        <div className={classes.section}>
                  <main className={classes.main}>
                  <h1 className={classes.main__title}>Log in to access your cart and profile information!</h1>
                </main>
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
                                    <div className={`${classes.form__input__control} ${emailState.isValid === false ?classes.form__input__invalid:''}` }>
                                        <input
                                            type="email"
                                            id="userEmail"
                                            placeholder="Enter Email Address" required
                                            value={emailState.value}
                                            onChange={emailChangeHandler}
                                            onBlur={validateEmailHandler}
                                            
                                        />
                                    </div>
                                    <div className={`${classes.form__input__control} ${emailState.isValid === false ?classes.form__input__invalid:''}` }>
                                        <input
                                            type="text"
                                            id="userPassword"
                                            placeholder="Enter password"
                                            required
                                            onChange={passwordChangeHandler}
                                            onBlur={validatePasswordHandler}
                                        />
                                    </div>
                                    <button type="submit" id="submitData"  className={classes.form__input__submit__btn}>Create Account</button>
                                </form>
                                ) : (
                                    <form onSubmit={submitHandler} id="login-btn" className={classes.form__input}>
                                        <h2 className={classes.form__input__title}>Log in</h2>
                                        <div className={`${classes.form__input__control} ${emailState.isValid === false ?classes.form__input__invalid:''}` }>
                                            <input
                                                type="text"
                                                placeholder="Enter Email Address"
                                                id="userSIEmail" required
                                                value={emailState.value}
                                                onChange={emailChangeHandler}
                                                onBlur={validateEmailHandler}
                                            />
                                        </div>
                                        <div className={`${classes.form__input__control} ${passwordState.isValid === false ?classes.form__input__invalid:''}` }>
                                            <input
                                                type="password"
                                                placeholder="Enter password" id="userSIPassword"
                                                required
                                                value={passwordState.value}
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