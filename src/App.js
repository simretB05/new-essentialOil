import React, { useState,useEffect } from 'react';
import Home from "./pages/Home";
import About from "./pages/about-page";
import Collection from "./pages/collection-page";
import LogIn from "./pages/log-in";
import ContactUs from "./pages/contact-us";
import ErrorPage from "./pages/ErrorPage";
import SharedLayout from "./pages/shearedLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/styles/styles.scss"
import CartProvider from "./components/store/CartProvider";
import YourCartPage from './pages/YourCartPage';
import UserPage from './pages/UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

 
  useEffect(() => {
    const storedUserLogInfo = localStorage.getItem('isLoggedIn');

    if (storedUserLogInfo === '1') {
      setIsLoggedIn(true);
    }
     
  }, [ ]);

      const loginHandler = (email, password) => {
          
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', '1');
      };
    
      const logoutHandler = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn')
      };
  return (
    <CartProvider>
    <Router>
      <Routes>
          <Route path="/" element={<SharedLayout isAuthenticated={isLoggedIn} onLogout={logoutHandler} onLogin={loginHandler } />} >
          <Route path="/" element={<Home />} />
          <Route path="/collection" exact element={<Collection />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" exact element={<ContactUs />} />
          <Route path="/user" exact element={<UserPage />} />
          <Route path="/your-cart" exact element={<YourCartPage />} />
          <Route path="/log-in" exact element={<LogIn isAuthenticated={isLoggedIn} onLogin={loginHandler } onLogout={logoutHandler} />} />
          <Route path="*" exact element={<ErrorPage />} />
       
        </Route>
      </Routes>
      </Router>
    </CartProvider>

  );
}

export default App;
