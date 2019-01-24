import React from "react";
import { Link } from "gatsby";
import styles from "./styles.module.css";

export default ({ children, className, to, image,  ...rest }) => (
    <Link
        to={to}
        className={styles.newsItem}
    >
        <img src={image} className={styles.postImage} alt="News"/>
        <div className={styles.postOverlay}></div>
        <div className={styles.postTitle}>{children}</div>
        <button className={styles.postButton}>Read more</button>
    </Link>
);