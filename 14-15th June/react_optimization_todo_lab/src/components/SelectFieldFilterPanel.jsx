import { memo } from "react";

const SelectFieldFilterPanel = ({ name = "", value, onChange, options, placeholder }) => {
  console.log("SelectFieldFilterPanel re-rendered:", name);
  return (
    <select
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
};

export default memo(SelectFieldFilterPanel);
