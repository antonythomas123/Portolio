import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Success and Error Icons
import { AiOutlineClose } from "react-icons/ai"; // Close Button Icon

const Toast = ({ toastData, onClose }) => {
  if (!toastData) return null;

  const { message, variant } = toastData;

  return (
    <div
      style={{
        ...styles.toastContainer,
        background:
          variant === "success"
            ? "rgba(72, 181, 94, 0.2)"
            : "rgba(255, 77, 77, 0.2)",
      }}
    >
      <div style={styles.iconContainer}>
        {variant === "success" ? (
          <FaCheckCircle style={styles.successIcon} />
        ) : (
          <FaTimesCircle style={styles.errorIcon} />
        )}
      </div>

      <p style={styles.toastMessage}>{message}</p>

      <button style={styles.closeButton} onClick={onClose}>
        <AiOutlineClose size={20} />
      </button>
    </div>
  );
};

const styles = {
  toastContainer: {
    position: "fixed",
    top: "20px", // Position it at the top-right
    right: "20px",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minWidth: "300px",
    padding: "15px 20px",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    backdropFilter: "blur(10px)",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "left",
    transition: "opacity 0.3s ease, transform 0.3s ease",
  },
  iconContainer: {
    marginRight: "10px",
  },
  successIcon: {
    color: "#4caf50",
    fontSize: "20px",
  },
  errorIcon: {
    color: "#f44336",
    fontSize: "20px",
  },
  toastMessage: {
    margin: 0,
    flex: 1,
    fontSize: '12px',
    fontWeight: 400
  },
  closeButton: {
    background: "none",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    padding: "0",
    marginLeft: "15px",
  },
};

export default Toast;
