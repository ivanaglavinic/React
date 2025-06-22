"use client";

import "./dangerButton.css";

export const DangerButton = ({ action, text = "Danger Action" }) => {
  return (
    <button onClick={action} className="btn btn-danger">
      {text}
    </button>
  );
};
