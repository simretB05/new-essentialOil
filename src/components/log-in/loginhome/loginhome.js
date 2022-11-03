import React from 'react'
import classes from './loginhome.module.scss'
function HomeLogin(props) {
  return (
    <div className={classes.content}>
      <main className={classes.main}>
        <h1 className={classes.main__title}>Welcome back!</h1>
      </main>
    </div>
  )
}

export default HomeLogin