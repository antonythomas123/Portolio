import React from "react";
import styles from "./Works.module.css";
import Card from "../../components/Card/Card";

function Works() {
  return (
    <div style={{ marginTop: "32px" }}>
      <div className={styles.works_title_container}>
        <span className={styles.overview_text}>
          A little glimpse on my creativity
        </span>

        <span className={styles.heading}>Creativity</span>

        <div className={styles.underline_container}>
          <span className={styles.underline_one}></span>
          <span className={styles.underline_two}></span>
          <span className={styles.underline_three}></span>
        </div>
      </div>

      <div className={styles.works_container}>
        <Card />
      </div>
    </div>
  );
}

export default Works;
