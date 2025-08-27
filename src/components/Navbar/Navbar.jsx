import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FaBars, FaXmark } from "react-icons/fa6";

function Navbar() {
  const [icon, setIcon] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.navbar_main}>
      <div>
        <span className={styles.name}>Antony</span>
        <span className={styles.color}>.</span>
      </div>
      <div
        className={
          icon ? `${styles.nav_wrapper} ${styles.active}` : styles.wrapper
        }
      >
        <span className={styles.nav} onClick={() => scrollToSection("home")}>
          Home
        </span>
        <span className={styles.nav} onClick={() => scrollToSection("resume")}>
          Resume
        </span>
        <span className={styles.nav} onClick={() => scrollToSection("works")}>
          Work
        </span>
        <span
          className={styles.nav}
          onClick={() => scrollToSection("contactme")}
        >
          Contact
        </span>
      </div>

      <div className={styles.hamburger} onClick={() => setIcon(!icon)}>
        {icon ? <FaXmark size={25} /> : <FaBars size={25} />}
      </div>
    </div>
  );
}

export default Navbar;
