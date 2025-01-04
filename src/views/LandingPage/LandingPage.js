import React, { useEffect, useState } from "react";
import styles from "./LandingPage.module.css";
import { Typewriter } from "react-simple-typewriter";
import { FaDownload, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { ResumeAntony } from "../../assets";

function LandingPage() {
  const [width, setWidth] = useState(window.innerWidth);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = ResumeAntony; // Use the imported PDF as the href
    link.download = "Antony_Thomas.pdf"; // The name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        <button
          className={`${styles.download_cv} ${styles.type}`}
          onClick={() => handleDownload()}
        >
          <span className={styles.dowload}>
            Download CV <FaDownload />
          </span>
        </button>
      </div>

      <div className={styles.social_container}>
        <a
          href="https://github.com/antonythomas123"
          target="_blank"
          rel="noreferrer"
          className={styles.social}
        >
          <FaGithub size={width < 600 ? 20 : 30} />
        </a>
        <a
          href="https://www.linkedin.com/in/antony-thomas123"
          target="_blank"
          rel="noreferrer"
          className={styles.social}
        >
          <FaLinkedin size={width < 600 ? 20 : 30} />
        </a>
        <a
          href="https://www.instagram.com/anto_ny_thom_as/"
          target="_blank"
          rel="noreferrer"
          className={styles.social}
        >
          <FaInstagram size={width < 600 ? 20 : 30} />
        </a>
      </div>
    </div>
  );
}

export default LandingPage;
