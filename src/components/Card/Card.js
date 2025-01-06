import React from "react";
import styles from "./Card.module.css";
import { FaGithub, FaLink } from "react-icons/fa6";

function Card({ image, hostedLink, github, title }) {
  return (
    <div className={styles.card_container}>
      <div className={styles.image_container}>
        <img src={image} alt={title || ""} height={"200px"} width={"300px"} />
      </div>

      <h3 className={styles.heading}>{title}</h3>

      <div
        className={styles.bottom_container}
        style={{ justifyContent: hostedLink ? "space-between" : "flex-end" }}
      >
        {hostedLink && (
          <a
            href={hostedLink}
            target="_blank"
            rel="noreferrer"
            className={styles.social}
          >
            <FaLink size={18} />
          </a>
        )}

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className={styles.social}
          >
            <FaGithub size={18} />
          </a>
        )}
      </div>
    </div>
  );
}

export default Card;
