import React from "react";
import styles from "./Resume.module.css";
import { FaArrowRight } from "react-icons/fa";
import Tooltip from "../../components/Tooltip/Tooltip";
import { skills } from "../../data/skills";
import { motion } from "motion/react";
import { tools } from "../../data/tools";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Resume() {
  return (
    <div className={styles.main_container}>
      <div className={styles.resume_title_container}>
        <motion.span
          whileInView={{ opacity: 1, y: 0 }}
          className={styles.feel_free_text}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
        >
          Check out on me
        </motion.span>
        <motion.span
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className={styles.resume}
        >
          Resume
        </motion.span>

        <div className={styles.underline_container}>
          <span className={styles.underline_one}></span>
          <span className={styles.underline_two}></span>
          <span className={styles.underline_three}></span>
        </div>
      </div>

      <div className={styles.resume_container}>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className={styles.education_container}
        >
          <div className={styles.edu_title}>
            <span className={styles.education_title}>Education</span>
          </div>

          <div className={styles.educations}>
            <div>
              <FaArrowRight color="#00ff9b" />
            </div>
            <div className={styles.education_content}>
              <span className={styles.exp_title}>
                BTech in Computer Science and Engineering
              </span>
              <span className={styles.subtitle}>
                APJ Abdul Kalam Technological University, Kerala / 2019 - 2023
              </span>
              <span className={styles.subtitle}>CGPA: 7.72</span>
            </div>
          </div>

          <div className={styles.educations}>
            <div>
              <FaArrowRight color="#00ff9b" />
            </div>
            <div className={styles.education_content}>
              <span className={styles.exp_title}>
                Higher secondary education
              </span>
              <span className={styles.subtitle}>
                Directorate of Higher Secondary Education Kerala / 2017-2019
              </span>
              <span className={styles.subtitle}>Percentage: 78%</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className={styles.exp_container}
        >
          <div className={styles.edu_title}>
            <span className={styles.education_title}>My experiences</span>
          </div>

          <div className={styles.educations}>
            <div>
              <FaArrowRight color="#00ff9b" />
            </div>

            <div className={styles.education_content}>
              <span className={styles.exp_title}>Technology Associate</span>
              <span className={styles.subtitle}>
                Acabes International Pvt Ltd, Kochi, Kerala, India
              </span>
              <span className={styles.subtitle}>July 2023 - Present</span>
              <ul className="text-[12px] list-disc text-[#a8b2d1]">
                <li>
                  Developed and maintained reponsive financial web applications
                  using React JS
                </li>
                <li>
                  Implemented state management solutions using Redux and Context
                  API
                </li>
                <li>
                  Collaborated with design, backend teams and other stakeholders
                  to deliver high quality performant solutions
                </li>
                <li>
                  Optimized application performance and ensured cross-browser
                  compatibility
                </li>
                <li>
                  Participated in code reviews and mentored junior developers
                </li>
              </ul>

              <div className="flex gap-4 flex-wrap">
                <span className="bg-[#64ffda1a] rounded-full text-[#00ff9b] px-4 py-1">
                  React JS
                </span>
                <span className="bg-[#64ffda1a] rounded-full text-[#00ff9b] px-4 py-1">
                  Javascript
                </span>
                <span className="bg-[#64ffda1a] rounded-full text-[#00ff9b] px-4 py-1">
                  React Redux
                </span>
                <span className="bg-[#64ffda1a] rounded-full text-[#00ff9b] px-4 py-1">
                  CSS
                </span>
                <span className="bg-[#64ffda1a] rounded-full text-[#00ff9b] px-4 py-1">
                  Material UI
                </span>
              </div>
            </div>
          </div>

          <div className={styles.educations}>
            <div>
              <FaArrowRight color="#00ff9b" />
            </div>
            <div className={styles.education_content}>
              <span className={styles.exp_title}>
                Software developer intern
              </span>
              <span className={styles.subtitle}>
                Edgaadi Pvt Ltd, Kochi, Kerala, India
              </span>
              <span className={styles.subtitle}>
                October 2022 - December 2022
              </span>
              <ul className="text-[12px] list-disc text-[#a8b2d1]">
                <li>
                  Developed a cross-platform mobile app for SAP management using
                  React Native
                </li>
                <li>Implemented state management solutions using Redux</li>
              </ul>

              <div className="flex gap-4 flex-wrap">
                <span className="bg-[#64ffda1a] rounded-full text-[#00ff9b] px-4 py-1">
                  TypeScript
                </span>
                <span className="bg-[#64ffda1a] rounded-full text-[#00ff9b] px-4 py-1">
                  React JS
                </span>
                <span className="bg-[#64ffda1a] rounded-full text-[#00ff9b] px-4 py-1">
                  React Native
                </span>
                <span className="bg-[#64ffda1a] rounded-full text-[#00ff9b] px-4 py-1">
                  React Redux
                </span>
                <span className="bg-[#64ffda1a] rounded-full text-[#00ff9b] px-4 py-1">
                  GraphQL
                </span>
                <span className="bg-[#64ffda1a] rounded-full text-[#00ff9b] px-4 py-1">
                  Apollo Client
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className={styles.skill_sections}
      >
        {/* <div>
          <span className={styles.education_title}>Skills</span>
        </div> */}

        <div>
          <p className="text-[#00ff9b] text-[18px] font-bold tracking-widest">
            Technical Skills
          </p>
        </div>

        <div className={styles.skills}>
          {skills?.map((skill, index) => {
            return (
              <Tooltip tooltipText={skill?.skill} key={index}>
                <motion.div className={styles.icon_container}>
                  <motion.span
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(index + 1)}
                  >
                    {skill?.icon}
                  </motion.span>
                </motion.div>
              </Tooltip>
            );
          })}
        </div>

        <div className="mt-12">
          <p className="text-[#00ff9b] text-[18px] font-bold tracking-widest">
            Tools & Platforms
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mt-4">
          {tools?.map((skill, index) => {
            return (
              <Tooltip tooltipText={skill?.tool} key={index}>
                <motion.div className={styles.icon_container}>
                  <motion.span
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(index + 1)}
                  >
                    {skill?.icon}
                  </motion.span>
                </motion.div>
              </Tooltip>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

export default Resume;

{
  /* Designing and developing responsive financial applications using
                React.js, CSS, and JavaScript to enhance user experience and
                performance. I focus on optimizing complex transaction modules,
                integrating RESTful APIs for real-time updates, and
                collaborating with cross-functional teams to deliver scalable,
                high-quality solutions */
}
