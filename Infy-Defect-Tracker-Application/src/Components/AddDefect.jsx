import React from 'react';
import './Style.css';

// Should be made visible to tester role only
const AddDefect = () => {
  return (
    <div className="add-defects-container">
      <div>
        <p className='add'>Add Defects</p>
      </div>
      <div className="main-add">
        <form>
          Defect Category
          <select id="categoryDropdown">
            <option value=""></option>
            <option value="ui"> UI </option>
            <option value="func"> Functional </option>
            <option value="req"> Change Request </option>
          </select>

          <br/>
          Description <textarea id="defect-desc" placeholder="Enter description"></textarea>

          <br/>
          Priority <input type="number" min="1" max="100" id="priority"/>

          <br/>
          <button type="submit" className="submit">Add Defect</button>
        </form>
      </div>
    </div>
  );
};

export default AddDefect;
