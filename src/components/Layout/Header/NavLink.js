import React from "react";
import styles from "./styles.module.css";
import cn from "classnames";
import { Link } from "@reach/router"

const NavLink = props => {
  if(props.to === "/"){
    return (            
        <Link
          to={props.to}
          getProps={({ isCurrent }) => {
            return (isCurrent
              ? { className: cn(styles.NavLink, props.className, styles.NavLink_active, props.active) }
              : { className: cn(styles.NavLink, props.className) }
            )
          }}
        >
          {props.children}
        </Link>
    )
  }
  else{
    return(
      <Link
        to={props.to}
        getProps={({ location }) => {
          return (location.pathname.includes(props.children.toLowerCase())
            ? { className: cn(styles.NavLink, props.className, styles.NavLink_active, props.active) }
            : { className: cn(styles.NavLink, props.className) }
          )
        }}
      >
        {props.children}
      </Link>
    )
  }
}
export default NavLink;