import React from "react";
import styles from "./Resume.module.css";
import { FaArrowRight } from "react-icons/fa";

function Resume({ ref, handleElementClick }) {
  return (
    <div className={styles.main_container} ref={ref}>
      <div className={styles.resume_title_container}>
        <span className={styles.feel_free_text}>Check out on me</span>
        <span className={styles.resume}>Resume</span>

        <div className={styles.underline_container}>
          <span className={styles.underline_one}></span>
          <span className={styles.underline_two}></span>
          <span className={styles.underline_three}></span>
        </div>
      </div>

      <div className={styles.resume_container}>
        <div className={styles.education_container}>
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
        </div>

        <div className={styles.exp_container}>
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
              <span className={styles.subtitle}>
                Designing and developing responsive financial applications using
                React.js, CSS, and JavaScript to enhance user experience and
                performance. I focus on optimizing complex transaction modules,
                integrating RESTful APIs for real-time updates, and
                collaborating with cross-functional teams to deliver scalable,
                high-quality solutions
              </span>
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
              <span className={styles.subtitle}>
                Developed a cross-platform mobile app for SAP management using
                React Native, React Redux, TypeScript, and GraphQL, streamlining
                logistics and improving operational transparency. By
                implementing real-time tracking, I reduced delivery delays by
                20%, enhancing efficiency and user experience.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.skill_sections}>
        <div>
          <span className={styles.education_title}>Skills</span>
        </div>
      </div>
    </div>
  );
}

export default Resume;
