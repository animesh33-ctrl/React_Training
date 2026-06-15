import React, { memo } from "react";

const FormField = ({ type = "text", name, placeholder, value, onChange }) => {
  console.log("Form Field Re-Renders : ", name);

  if (type === "textarea") {
    return (
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  }
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default memo(FormField);
