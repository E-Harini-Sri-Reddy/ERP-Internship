import React, { useState } from 'react';
import './Style.css';

// Should be made visible to developer role only
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

        <br />
        <br />
        Category 
        <select id="myDropdown" value={selectedValue} onChange={handleChange}>
          <option value="">Choose an option</option>
          <option value="opt1"> All </option>
          <option value="opt2"> UI </option>
          <option value="opt3"> Functional </option>
          <option value="opt4"> Change Request </option>
        </select>
      </div>

      <div className="container-table">
        <div className="defects-table">
          <table>
            <thead>
              <tr>
                <th> Defect Category</th>
                <th> Description</th>
                <th> Priority</th>
                <th> Status</th>
                <th> Change Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> UI </td>
                <td> Submit Button coming to the extreme left. Refer the screenshots. </td>
                <td> 2 </td>
                <td> open </td>
                <td> Close Defect </td>
              </tr>

              <tr>
                <td> Functional </td>
                <td> While submitting the form data, a confirmation popup should appear. Refer the SRS document. </td>
                <td> 1 </td>
                <td> open </td>
                <td> Close Defect </td>
              </tr>

              <tr>
                <td> Change Request </td>
                <td> Add remove user functionality </td>
                <td> 3 </td>
                <td> closed </td>
                <td> No action pending </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default ViewDefect;
