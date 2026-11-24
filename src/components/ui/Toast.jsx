
import {
  CheckCircle2,
  AlertCircle,
  Info,
  LoaderCircle,
  X,
  XCircle,
} from "lucide-react";

const toastConfig = {
  success: {
    icon: CheckCircle2,
    className: "toast-success",
    title: "Success",
  },
  error: {
    icon: XCircle,
    className: "toast-error",
    title: "Something went wrong",
  },
  warning: {
    icon: AlertCircle,
    className: "toast-warning",
    title: "Warning",
  },
  info: {
    icon: Info,
    className: "toast-info",
    title: "Information",
  },
  loading: {
    icon: LoaderCircle,
    className: "toast-loading",
    title: "Please wait",
  },
};

const Toast = ({ toast, onClose }) => {
  const config = toastConfig[toast.type] || toastConfig.success;
  const Icon = config.icon;

  return (
    <div
      className={`toast-item ${config.className}`}
      role={toast.type === "error" ? "alert" : "status"}
      aria-live={toast.type === "error" ? "assertive" : "polite"}
    >
      <div className="toast-icon">
        <Icon
          size={22}
          className={toast.type === "loading" ? "toast-spin" : ""}
        />
      </div>

      <div className="toast-content">
        <h4>{config.title}</h4>
        <p>{toast.message}</p>
      </div>

      <button
        type="button"
        className="toast-close"
        onClick={() => onClose(toast.id)}
        aria-label="Close notification"
      >
        <X size={17} />
      </button>
    </div>
  );
};

export default Toast;
