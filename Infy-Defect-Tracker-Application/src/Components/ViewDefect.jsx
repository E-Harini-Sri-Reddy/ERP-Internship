import React, { useState, useMemo } from "react";
import "./Style.css";

const ViewDefect = ({ defects, updateDefectStatus }) => {
  const [priorityFilter, setPriorityFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  // Normalize category filter input to match defect categories
  const normalizedCategoryFilter = categoryFilter.toLowerCase();

  // Filter and sort defects based on selected filters
  const filteredDefects = useMemo(() => {
    let filtered = [...defects];

    // Filter by category
    if (categoryFilter && categoryFilter !== "all") {
      filtered = filtered.filter(
        (defect) => defect.category.toLowerCase() === normalizedCategoryFilter
      );
    }

    // Sort by priority
    if (priorityFilter === "asc") {
      filtered.sort((a, b) => a.priority - b.priority);
    } else if (priorityFilter === "desc") {
      filtered.sort((a, b) => b.priority - a.priority);
    }

    return filtered;
  }, [defects, categoryFilter, priorityFilter, normalizedCategoryFilter]);

  // Handle closing defect by index
  const handleCloseDefect = (index) => {
    updateDefectStatus(index, "closed");
  };

  return (
    <div className="view-div">
      <div className="filter-details">
        <h3>Filter Details</h3>
        Priority
        <select
          id="priorityDropdown"
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
        >
          <option value=""></option>
          <option value="all">All</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

        <br />
        <br />
        Category
        <select
          id="catDropdown"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value=""></option>
          <option value="all">All</option>
          <option value="ui">UI</option>
          <option value="functional">Functional</option>
          <option value="change request">Change Request</option>
        </select>
      </div>

      <div className="defects-container">
        <h3>Defects List</h3>

        <p className='view-res'>
          Search Results: {filteredDefects.length}
        </p>

        {filteredDefects.length === 0 ? (
          <p>No defects found.</p>
        ) : (
          <table className="view-defects-table" border="1">
            <thead>
              <tr>
                <th>Category</th>
                <th>Description</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredDefects.map((defect, index) => (
                <tr key={index}>
                  <td>{defect.category}</td>
                  <td>{defect.description}</td>
                  <td>{defect.priority}</td>
                  <td>{defect.status}</td>
                  <td>
                    {defect.status === "open" ? (
                      <button
                        className="close-but"
                        onClick={() => handleCloseDefect(index)}
                      >
                        Close Defect
                      </button>
                    ) : (
                      defect.action
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ViewDefect;
