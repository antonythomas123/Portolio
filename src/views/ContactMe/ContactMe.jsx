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
  const [errors, setErrors] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setMessage((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (
      !message.name ||
      !message.email ||
      !message.subject ||
      !message.description
    ) {
      setErrors((prev) => ({
        ...prev,
        name: message?.name ? "" : "Field cannot be empty",
        email: message?.email ? "" : "Field cannot be empty",
        subject: message?.subject ? "" : "Field cannot be empty",
        description: message?.description ? "" : "Field cannot be empty",
      }));

      return;
    }

    setErrors(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
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
            className="flex gap-[12px] flex-col mt-[12px] justify-center items-center md:justify-start md:items-start"
            onSubmit={(e) => handleSendMessage(e)}
          >
            <div className="flex flex-col w-full md:flex-row gap-[12px]">
              <div className="flex flex-col w-full md:w-1/2">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={message?.name}
                  className={`bg-[#9c9c9c60] h-[36px] p-2 rounded ${errors?.name ? "border-red-500" : " border-none"} ${errors?.name ? "border-2" : "border-none"} focus:outline-none`}
                  onChange={handleChange}
                />
                {errors?.name && <p className="text-red-500">{errors?.name}</p>}
              </div>
              <div className="flex flex-col w-full md:w-1/2 ">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={message?.email}
                  className={`bg-[#9c9c9c60] h-[36px] p-2 rounded focus:outline-none ${errors?.email ? "border-red-500" : " border-none"} ${errors?.email ? "border-2" : "border-none"}`}
                  onChange={handleChange}
                />
                {errors?.email && (
                  <p className="text-red-500">{errors?.email}</p>
                )}
              </div>
            </div>

            <div className="w-full">
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                className={`w-full bg-[#9c9c9c60] h-[36px] p-2 rounded focus:outline-none ${errors?.subject ? "border-red-500" : " border-none"} ${errors?.subject ? "border-2" : "border-none"}`}
                value={message?.subject}
                onChange={handleChange}
              />
              {errors?.subject && (
                <p className="text-red-500">{errors?.subject}</p>
              )}
            </div>

            <div className="w-full">
              <textarea
                type="text"
                placeholder="Message"
                value={message?.description}
                name="description"
                className={`w-full bg-[#9c9c9c60] rounded p-2 focus:outline-none ${errors?.description ? "border-red-500" : " border-none"} ${errors?.description ? "border-2" : "border-none"}`}
                rows={6}
                onChange={handleChange}
              />
              {errors?.description && (
                <p className="text-red-500">{errors?.description}</p>
              )}
            </div>
            <button
              type="submit"
              className="flex gap-4 border-[#00ff9b] border-2 p-4 rounded-full text-[#00ff9b] cursor-pointer active:bg-[#64ffda33] hover:bg-[#64ffda1a]"
            >
              <FaPaperPlane size={15} />
              <span>Send message</span>
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
                <span className="text-[#a8b2d1]">Antony Thomas</span>
              </div>
            </div>

            <div className={styles.info}>
              <FaLocationDot size={20} color="#00ff9b" />
              <div className={styles.information}>
                <span>Location</span>
                <span className="text-[#a8b2d1]">Kochi, Kerala, India, 682 042</span>
              </div>
            </div>

            <div className={styles.info}>
              <FaMobile size={20} color="#00ff9b" />
              <div className={styles.information}>
                <span>Call me</span>
                <span className="text-[#a8b2d1]">+91 6238785393</span>
              </div>
            </div>

            <div className={styles.info}>
              <FaEnvelope size={20} color="#00ff9b" />
              <div className={styles.information}>
                <span>Email</span>
                <span className="text-[#a8b2d1]">antonythomas993@gmail.com</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactMe;
