import React from "react";
import styles from "./styles.module.css";

export default ({ children }) => (
  <main className={styles.Main}>
    {children}
  </main>
);
