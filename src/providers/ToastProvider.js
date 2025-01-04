import React, { createContext, useContext, useState, useCallback } from "react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toastData, setToastData] = useState(null);

  const showToast = useCallback(
    (message, variant = "success", duration = 3000) => {
      setToastData({ message, variant });
      setTimeout(() => {
        setToastData(null);
      }, duration);
    },
    []
  );

  return (
    <ToastContext.Provider value={{ toastData, showToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
