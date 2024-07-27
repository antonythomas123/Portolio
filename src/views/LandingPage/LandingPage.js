import React from "react";
import styles from "./LandingPage.module.css";
import { Typewriter } from "react-simple-typewriter";
import { FaDownload, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function LandingPage() {
  return (
    <div className={styles.main_container}>
      <div className={styles.name_container}>
        <span>hi</span>
        <span>I am</span>
        <span>Antony Thomas</span>
      </div>
      <div className={styles.sub_heading}>
        <span>
          I am a&nbsp;
          <span className={styles.typewriter}>
            <Typewriter
              words={["Frond End Developer", "Technology Associate"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={70}
              delaySpeed={1000}
            />
          </span>
        </span>
      </div>

      <div className={styles.download_container}>
        <button className={`${styles.download_cv} ${styles.type}`}>
          <span className={styles.dowload}>Download CV <FaDownload /></span>
        </button>
      </div>

      <div className={styles.social_container}>
        <span className={styles.social}>
          <FaGithub size={30} />
        </span>
        <span className={styles.social}>
          <FaLinkedin size={30} />
        </span>
        <span className={styles.social}>
          <FaInstagram size={30} />
        </span>
      </div>
    </div>
  );
}

export default LandingPage;