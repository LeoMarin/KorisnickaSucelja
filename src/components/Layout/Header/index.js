import React from "react";
import { Container } from "components";
import Nav from "./Nav";
import NavLink from "./NavLink";
import styles from "./styles.module.css";
import navLinks from "config/menu.js";
import { Link } from "gatsby";
import logo from "static/logo.png";
import { isLoggedIn, getCurrentUser } from "src/utils/auth"

export default () => {
  const nav = navLinks.map(link => (
    <NavLink key={link.path} to={link.path}>
      {link.text}
    </NavLink>
  ));
  let account = "ACCOUNT";
  
  if(isLoggedIn()){
    const {username} = getCurrentUser();
    account = username;
  }
  

  return (
    <header className={styles.Header}>
      <Container className={styles.Container}>
        <img src={logo} alt="Logo" className={styles.Logo} />
        <Nav>{nav}</Nav>
        <Link className={styles.LoginLink} to="/account/profile">{account}</Link>
      </Container>
    </header>
  );
};
