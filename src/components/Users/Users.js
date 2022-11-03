import React from 'react'
import classes from "./user.module.scss"
function Users() {
  return (
    <div className={classes.content}>
      <main className={classes.main}>
        <h1 className={classes.main__title}>Your Profile </h1>
      </main>
    </div>
  )
}

export default Users