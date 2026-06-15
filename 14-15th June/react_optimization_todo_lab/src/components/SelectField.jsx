import { memo } from "react";

const SelectField = ({ name, value, onChange, options, placeholder }) => {
  console.log("SelectField re-rendered:", name);
  return (
    <select name={name} value={value} onChange={onChange}>
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
};

export default memo(SelectField);
