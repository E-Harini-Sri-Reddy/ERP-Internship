import React, { useState } from 'react';
import './Style.css';

// Should be made visible to Developer role only
const ViewDefect = () => {
  const [priorityValue, setPriorityValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');

  const handlePriorityChange = (event) => {
    setPriorityValue(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategoryValue(event.target.value);
  };

  const defects = [
    {
      category: 'UI',
      description: 'Submit Button coming to the extreme left. Refer the screenshots.',
      priority: 2,
      status: 'open',
      action: 'Close Defect',
    },
    {
      category: 'Functional',
      description: 'While submitting the form data, a confirmation popup should appear. Refer the SRS document.',
      priority: 1,
      status: 'open',
      action: 'Close Defect',
    },
    {
      category: 'Change Request',
      description: 'Add remove user functionality',
      priority: 3,
      status: 'closed',
      action: 'No action pending',
    },
  ];

  return (
    <div className="view-div">
      <div className="filter-details">
        <h3>Filter Details</h3>
        Priority
        <select id="priorityDropdown" value={priorityValue} onChange={handlePriorityChange}>
          <option value=""></option>
          <option value="all">All</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

        <br />
        <br />
        Category
        <select id="catDropdown" value={categoryValue} onChange={handleCategoryChange}>
          <option value=""></option>
          <option value="all">All</option>
          <option value="ui">UI</option>
          <option value="functional">Functional</option>
          <option value="changeRequest">Change Request</option>
        </select>
      </div>

      <h3>Defect Details</h3>
      <h5>Search Results : {defects.length}</h5>
      <div className="container-table">
        <div className="defects-table">
          <table>
            <thead>
              <tr>
                <th>Defect Category</th>
                <th>Description</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Change Status</th>
              </tr>
            </thead>
            <tbody>
              {defects.map((defect, index) => (
                <tr key={index}>
                  <td>{defect.category}</td>
                  <td>{defect.description}</td>
                  <td>{defect.priority}</td>
                  <td>{defect.status}</td>
                  <td className={defect.status === 'closed' ? 'status-closed' : 'status-open'}>
                    {defect.action}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewDefect;
