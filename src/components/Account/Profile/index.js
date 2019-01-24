import React from "react";
import { navigate } from "@reach/router"
import styles from "./styles.module.css";
import { getCurrentUser, logout } from "src/utils/auth"

export default () => {

  const {username, firstName, lastName, email, dob, pictureUrl, bio} = getCurrentUser();

  return (
    <>
      <div className={styles.main}>
        <div className={styles.left}>
          <img className={styles.profilePicture} src={pictureUrl} alt="profilePicture" />
          <p className={styles.bio}>{bio}</p>
        </div>
        <div className={styles.right}>
          <div className={styles.helper}>
          <div className={styles.info}>
            <div className={styles.labels}>
              <p>username</p>
              <p>first name</p>
              <p>last name</p>
              <p>email</p>
              <p>date of birth</p>
            </div>
            <div className={styles.data}>
              <p>{username}</p>
              <p>{firstName}</p>
              <p>{lastName}</p>
              <p>{email}</p>
              <p>{dob}</p>
            </div>
          </div>
          <a
            href="/"
            className={styles.logout}
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/account/login`))
            }}
          >
            Log out
          </a>
        </div>
        </div>
      </div>
      
    </>
  );
}