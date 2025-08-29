import React, { useRef, useState } from "react";
import styles from "./ContactMe.module.css";
import {
  FaEnvelope,
  FaLocationDot,
  FaMobile,
  FaPaperPlane,
  FaUser,
} from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { useToast } from "../../providers/ToastProvider";
import { motion } from "motion/react";

function ContactMe() {
  const form = useRef();

  const toast = useToast();

  const [message, setMessage] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setMessage((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.showToast("Message sent successfully!", "success");
          setMessage({
            name: "",
            email: "",
            subject: "",
            description: "",
          });
        },
        (error) => {
          toast.showToast(
            "Unable to sent message now. Please try again later!",
            "error"
          );
        }
      );
  };

  return (
    <div style={{ marginTop: "32px" }}>
      <div className={styles.contact_title_container}>
        <motion.span
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className={styles.feel_free_text}
        >
          Feel free to contact me anytime
        </motion.span>
        <motion.span
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className={styles.get_in_touch}
        >
          Get in touch
        </motion.span>

        <div className={styles.underline_container}>
          <span className={styles.underline_one}></span>
          <span className={styles.underline_two}></span>
          <span className={styles.underline_three}></span>
        </div>
      </div>

      <div className={styles.main_container}>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className={styles.form_wrapper}
        >
          <span className={styles.title}>Message me</span>

          <form
            ref={form}
            className={styles.form}
            onSubmit={(e) => handleSendMessage(e)}
          >
            <div className={styles.name_container}>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={message?.name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={message?.email}
                onChange={handleChange}
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className={styles.subject_input}
              value={message?.subject}
              onChange={handleChange}
            />
            <textarea
              type="text"
              placeholder="Message"
              name="description"
              value={message?.description}
              rows={6}
              onChange={handleChange}
            />

            <button
              type="submit"
              className={`${styles.send_message} ${styles.type1}`}
            >
              <FaPaperPlane size={15} />
              <span className={styles.btn_txt}>Send message</span>
            </button>
          </form>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className={styles.contact_info}
        >
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
        </motion.div>
      </div>
    </div>
  );
}

export default ContactMe;
