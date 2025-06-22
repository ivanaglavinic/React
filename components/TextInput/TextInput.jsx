"use client";

import "./textInput.css";

export const TextInput = ({
  placeholder = "Type something here",
  value,
  onChange,
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="text-input"
    />
  );
};
