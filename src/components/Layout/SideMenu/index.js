import React from "react";
import styles from "./styles.module.css";
import cn from "classnames";
import { NavLink } from "components";
import navLinks from "config/menu.js";
import { isLoggedIn, getCurrentUser } from "src/utils/auth"

const SideMenu = ({ status, className }) => {
  const nav = navLinks.map(link => (
    <NavLink
      key={link.path}
      to={link.path}
      className={styles.NavLink}
      active={styles.NavLink_active}
    >
      {link.text}
    </NavLink>
  ));
  let account = "ACCOUNT"
  if(isLoggedIn()){
    const {username} = getCurrentUser();
    account = username;
  }
  nav.push(
    <NavLink
      key="account"
      to="account/profile"
      className={styles.NavLink}
    >
      {account}
    </NavLink>
  )

  return (
    <nav className={cn(styles.Menu, styles[status], className)}>{nav}</nav>
  );
};

export default SideMenu;
