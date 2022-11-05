import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './loginhome.module.scss'



function HomeLogin(props) {
  return (
    <div className={classes.content}>
      <div className={classes.section}>
      <main className={classes.main}>
        <h1 className={classes.main__title}>Welcome back!</h1>
        <div className={classes.loginNav}>
            <ul className={classes['loginNav-list']}>
            <NavLink  to="/user" className={classes['loginNav-list__item__link']} ><li className={classes['loginNav-list__item']}> Go to Your Profile</li></NavLink>
            <NavLink to="/your-cart"  className={classes['loginNav-list__item__link']} > <li className={classes['loginNav-list__item']}> Go to Your Cart</li></NavLink>

            </ul>
        </div>

        </main>
        </div>

     

    </div>
  )
}

export default HomeLogin