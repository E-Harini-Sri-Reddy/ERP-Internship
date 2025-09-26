import React, { useState } from 'react';
import AddDefect from './AddDefect';
import ViewDefect from './ViewDefect';

const Navbar = ({ handleLogout, role }) => {
  const [activeView, setActiveView] = useState(() => {
    // Default active view based on role:
    if (role === 'admin') return 'view'; // admin sees view first, can switch
    if (role === 'developer') return 'view'; // only view
    if (role === 'tester') return 'add'; // only add
    return 'view'; // fallback
  });

  const handleAddDefectClick = () => {
    setActiveView('add');
  };

  const handleViewDefectClick = () => {
    setActiveView('view');
  };

  return (
    <div>
      <button id="logout" className="logout" onClick={handleLogout}>
        Logout
      </button>
      <br />
      {/* Admin can see both buttons */}
      {role === 'admin' && (
        <>
          <button id="add-defect" className="add-defect" onClick={handleAddDefectClick}>
            Add Defect
          </button>
          <button id="view-defect" className="view-defect" onClick={handleViewDefectClick}>
            View Defect
          </button>
        </>
      )}

      {/* Developer sees only View */}
      {role === 'developer' && (
        <button id="view-defect" className="view-defect" onClick={handleViewDefectClick}>
          View Defect
        </button>
      )}

      {/* Tester sees only Add */}
      {role === 'tester' && (
        <button id="add-defect" className="add-defect" onClick={handleAddDefectClick}>
          Add Defect
        </button>
      )}

      <div>
        {/* Render components based on role and activeView */}
        {role === 'admin' && (activeView === 'add' ? <AddDefect /> : <ViewDefect />)}
        {role === 'developer' && <ViewDefect />}
        {role === 'tester' && <AddDefect />}
      </div>
    </div>
  );
};

export default Navbar;
