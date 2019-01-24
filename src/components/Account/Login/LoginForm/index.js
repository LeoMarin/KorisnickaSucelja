import React from "react"
import styles from "./styles.module.css"

export default ({ handleSubmit, handleUpdate }) => (
  <form
    className={styles.form}
    method="post"
    onSubmit={event => {
      handleSubmit(event)
    }}
  >
     <input
      className={styles.formInput}
      type="text"
      name="username"
      placeholder="Username"
      autoComplete="off"
      onChange={handleUpdate}
    />
    <input
      className={styles.formInput}
      type="password"
      name="password"
      placeholder="Password"
      onChange={handleUpdate}
    />
    <input className={styles.formButton} type="submit" value="Login" />
  </form>
)
