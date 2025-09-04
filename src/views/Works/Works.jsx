import React from "react";
import styles from "./Works.module.css";
import Card from "../../components/Card/Card";
import { works } from "../../data/works";
import { motion } from "motion/react";

function Works() {
  return (
    <div style={{ marginTop: "32px" }}>
      <div className={styles.works_title_container}>
        <motion.span
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className={styles.overview_text}
        >
          A little glimpse on my creativity
        </motion.span>

        <motion.span
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className={styles.heading}
        >
          Creativity
        </motion.span>

        <div className={styles.underline_container}>
          <span className={styles.underline_one}></span>
          <span className={styles.underline_two}></span>
          <span className={styles.underline_three}></span>
        </div>
      </div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className={styles.works_container}
      >
        {works.map((work, index) => {
          return (
            <Card
              key={index}
              title={work.title}
              image={work.image}
              hostedLink={work.hostedLink}
              github={work.github}
              tech={work.tech}
            />
          );
        })}
      </motion.div>
    </div>
  );
}

export default Works;
