import React, { useState } from "react";
import "./Style.css";

const AddDefect = ({ addDefect }) => {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category || !description.trim()) {
      alert("Please fill in all required fields.");
      return;
    }

    const finalPriority = priority ? parseInt(priority) : 100;

    const defectData = {
      category,
      description,
      priority: finalPriority,
      status: "open", // default status when adding
      action: "Close Defect",
    };

    addDefect(defectData);

    alert("Defect added successfully!");

    // Clear form
    setCategory("");
    setDescription("");
    setPriority("");
  };

  return (
    <div className="add-defects-container">
      <div>
        <p className="add">Add Defects</p>
      </div>
      <div className="main-add">
        <form className="add-form" onSubmit={handleSubmit}>
          <label>
            Defect Category
            <select
              id="categoryDropdown"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value=""></option>
              <option value="UI">UI</option>
              <option value="Functional">Functional</option>
              <option value="Change Request">Change Request</option>
            </select>
          </label>

          <br />

          <label>
            Description
            <textarea
              id="defect-desc"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>

          <br />

          <label>
            Priority
            <input
              type="number"
              min="1"
              max="100"
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            />
          </label>

          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddDefect;
