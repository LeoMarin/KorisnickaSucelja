import React from "react"
import styles from "./styles.module.css"
import { navigate } from "@reach/router"

export default ({ handleSubmit, handleUpdate }) => (
  <form
    className={styles.form}
    method="post"
    onSubmit={event => {
      handleSubmit(event)
      navigate(`/account/profile`)
    }}
  >
    <div className={styles.tooltip}>
      <input
        className={styles.formInput}
        type="text"
        name="username"
        placeholder="Username"
        autoComplete="off"
        onChange={handleUpdate}
      />
      <span className={styles.tooltiptext}>Username must have at least 3 characters</span>
    </div>
    <div className={styles.tooltip}>
    <input
      className={styles.formInput}
      type="email"
      name="email"
      placeholder="E-mail"
      autoComplete="off"
      onChange={handleUpdate}
    />
    <span className={styles.tooltiptext}>Email must have @ sign</span>
  </div>
  <div className={styles.tooltip}>
    <input
      className={styles.formInput}
      type="password"
      name="password"
      placeholder="Password"
      onChange={handleUpdate}
    />
    <span className={styles.tooltiptext}>Password must have at leat 8 characters</span>
  </div>
  <div className={styles.tooltip}>
    <input
      className={styles.formInput}
      type="password"
      name="repeatPassword"
      placeholder="Repeat Password"
      onChange={handleUpdate}
    />
    <span className={styles.tooltiptext}>Password must match</span>
  </div>
    <input className={styles.formButton} type="submit" value="Register" disabled/>
  </form>
)
