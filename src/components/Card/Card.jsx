import React from "react";
import styles from "./Card.module.css";
import { FaGithub, FaLink } from "react-icons/fa6";

function Card({ image, hostedLink, github, title, tech }) {
  return (
    <div className={styles.card_container}>
      <div className={styles.image_container}>
        <img src={image} alt={title || ""} height={"200px"} width={"300px"} />
      </div>

      <div className="p-4 flex flex-col gap-4">
        <h2 className="font-semibold text-[14px] tracking-widest">{title}</h2>

        <div className="flex flex-wrap gap-2">
          {tech.map((t, index) => {
            return <div className="bg-[#64ffda1a] rounded-full text-[#00ff9b] px-4 py-1 text-[12px]">{t}</div>;
          })}
        </div>

        <div
          className={`flex ${
            hostedLink ? "justify-between" : "justify-end"
          }  items-center`}
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
    </div>
  );
}

export default Card;
