import { useToast } from "../../providers/ToastProvider";
import Toast from "./Toast";

const ToastContainer = () => {
  const { toastData, showToast } = useToast();

  return (
    toastData && <Toast toastData={toastData} onClose={() => showToast(null)} />
  );
};

export default ToastContainer;
