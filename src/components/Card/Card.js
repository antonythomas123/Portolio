import React from "react";
import styles from "./Card.module.css";
import { LaunchLane } from "../../assets";
import { FaGithub, FaLink } from "react-icons/fa6";

function Card() {
  return (
    <div className={styles.card_container}>
      <div className={styles.image_container}>
        <img src={LaunchLane} alt="" height={"200px"} width={"300px"} />
      </div>

      <h3 className={styles.heading}>Name</h3>

      <div className={styles.bottom_container}>
        <a className={styles.social}>
          <FaLink size={18} />
        </a>

        <a className={styles.social}>
          <FaGithub size={18} />
        </a>
      </div>
    </div>
  );
}

export default Card;
