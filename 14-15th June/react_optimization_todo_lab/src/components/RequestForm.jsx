import { memo } from "react";
import FormField from "./FormField";
import SelectField from "./SelectField";

const CATEGORY_OPTIONS = [
  "Water Leakage",
  "Garbage Pickup",
  "Streetlight Issue",
  "Road Damage",
  "Drainage Blockage",
];

const PRIORITY_OPTIONS = ["Low", "Medium", "High"];

function RequestForm({ formData, onChange, onSubmit }) {
  console.log("RequestForm re-rendered");

  return (
    <div className="card">
      <h3>New Request Form</h3>
      <form onSubmit={onSubmit} className="form-grid">
        <FormField
          type="text"
          name="residentName"
          placeholder="Resident Name"
          value={formData.residentName}
          onChange={onChange}
        />

        <FormField
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={onChange}
        />

        <FormField
          type="text"
          name="area"
          placeholder="Area"
          value={formData.area}
          onChange={onChange}
        />

        <SelectField
          name="category"
          value={formData.category}
          onChange={onChange}
          options={CATEGORY_OPTIONS}
          placeholder="Select Category"
        />

        <SelectField
          name="priority"
          value={formData.priority}
          onChange={onChange}
          options={PRIORITY_OPTIONS}
          placeholder="Select Priority"
        />

        <FormField
          type="date"
          name="visitDate"
          value={formData.visitDate}
          onChange={onChange}
        />

        <FormField
          type="textarea"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={onChange}
        />

        <button type="submit">Add Request</button>
      </form>

      <div className="todo-box">
        <strong>TODO:</strong> Split this form into smaller field components and
        optimize the controlled component behavior.
      </div>
    </div>
  );
}

export default memo(RequestForm);
