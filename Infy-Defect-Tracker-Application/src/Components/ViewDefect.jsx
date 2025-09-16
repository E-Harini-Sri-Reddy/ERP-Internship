import React, { useState } from 'react';
import './Style.css';

// Should be made visible to developer role only
const ViewDefect = () => {
  const [priorityValue, setPriorityValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');

  const handlePriorityChange = (event) => {
    setPriorityValue(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategoryValue(event.target.value);
  };

  return (
    <div className="view-div">
      <div className="filter-details">
        <h3> Filter Details </h3>
        Priority 
        <select id="priorityDropdown" value={priorityValue} onChange={handlePriorityChange}>
          <option value=""></option>
          <option value="all"> All </option>
          <option value="asc"> Ascending </option>
          <option value="desc"> Descending </option>
        </select>

        <br />
        <br />
        Category 
        <select id="catDropdown" value={categoryValue} onChange={handleCategoryChange}>
          <option value=""></option>
          <option value="all"> All </option>
          <option value="ui"> UI </option>
          <option value="functional"> Functional </option>
          <option value="changeRequest"> Change Request </option>
        </select>
      </div>

      <h3> Defect Details </h3>
      <h5> Search Results : 3</h5>
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
