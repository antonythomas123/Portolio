import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar_main}>
      <div>
        <span className={styles.name}>Antony</span>
        <span className={styles.color}>.</span>
      </div>
      <div className={styles.wrapper}>
        <span className={styles.nav}>Home</span>
        <span className={styles.nav}>Resume</span>
        <span className={styles.nav}>Work</span>
        <span className={styles.nav}>Contact</span>
      </div>
    </div>
  );
}

export default Navbar;
