import React from 'react'
import LogInHero from '../components/log-in/loginHero'
import HomeLogin from '../components/log-in/loginhome/loginhome';
// import MainLogedInHeader from '../components/log-in/MainLoginHeader/MainLogedInHeader';


function LogIn(props) {

      
      return (
            <>

            <section className='content'>
                        {!props.isAuthenticated && <LogInHero isAuthenticated={props.isAuthenticated}  onLogin={props.onLogin} onLogout={props.onLogout} />}
                        {props.isAuthenticated && <HomeLogin onLogout={props.onLogout} />}
            </section>
         </>
      );
          
        

}
      export default  LogIn; 