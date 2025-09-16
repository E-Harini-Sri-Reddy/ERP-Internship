import React, { useState } from 'react';
import './Style.css';

const ViewDefect = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="view-div">
      <div className="filter-details">
        <h3> Filter Details </h3>
        Priority 
        <select id="myDropdown" value={selectedValue} onChange={handleChange}>
          <option value="">Choose an option</option>
          <option value="option1"> All </option>
          <option value="option2"> Ascending </option>
          <option value="option3"> Descending </option>
        </select>
      </div>

      <div className="container-table">
        <div className="defects-table">
          <th className="table-heading">
            <td> Defect Category</td>
            <td> Description</td>
            <td> Priority</td>
            <td> Status</td>
            <td> Change Status</td>
          </th>
        </div>
      </div>
    </div>
  );
};

export default ViewDefect;
