import React from "react";
import styles from "./ContactMe.module.css";
import {
  FaEnvelope,
  FaLocationDot,
  FaMobile,
  FaPaperPlane,
  FaUser,
} from "react-icons/fa6";

function ContactMe() {
  return (
    <div style={{ marginTop: "32px" }}>
      <div className={styles.contact_title_container}>
        <span className={styles.feel_free_text}>
          Feel free to contact me anytime
        </span>
        <span className={styles.get_in_touch}>Get in touch</span>

        <div className={styles.underline_container}>
          <span className={styles.underline_one}></span>
          <span className={styles.underline_two}></span>
          <span className={styles.underline_three}></span>
        </div>
      </div>

      <div className={styles.main_container}>
        <div className={styles.form_wrapper}>
          <span className={styles.title}>Message me</span>

          <div className={styles.form}>
            <div className={styles.name_container}>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email/Phone" />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className={styles.subject_input}
            />
            <textarea type="text" placeholder="Message" rows={6} />

            <button className={`${styles.send_message} ${styles.type1}`}>
              <FaPaperPlane size={15} />
              <span className={styles.btn_txt}>Send message</span>
            </button>
          </div>
        </div>

        <div className={styles.contact_info}>
          <span className={styles.title}>Contact info</span>

          <span>
            Always available for work if the right projects came along, feel
            free to contact me!
          </span>

          <div className={styles.info_container}>
            <div className={styles.info}>
              <FaUser size={20} color="#00ff9b" />
              <div className={styles.information}>
                <span>Name</span>
                <span>Antony Thomas</span>
              </div>
            </div>

            <div className={styles.info}>
              <FaLocationDot size={20} color="#00ff9b" />
              <div className={styles.information}>
                <span>Location</span>
                <span>Kochi, Kerala, India, 682 042</span>
              </div>
            </div>

            <div className={styles.info}>
              <FaMobile size={20} color="#00ff9b" />
              <div className={styles.information}>
                <span>Call me</span>
                <span>+91 6238785393</span>
              </div>
            </div>

            <div className={styles.info}>
              <FaEnvelope size={20} color="#00ff9b" />
              <div className={styles.information}>
                <span>Email</span>
                <span>antonythomas993@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
