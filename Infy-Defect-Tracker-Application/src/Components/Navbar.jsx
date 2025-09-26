import React, { useState } from 'react';
import AddDefect from './AddDefect';
import ViewDefect from './ViewDefect';

const Navbar = ({ handleLogout, role, defects, addDefect, updateDefectStatus }) => {
  const [activeView, setActiveView] = useState(() => {
    if (role === 'admin') return 'view';
    if (role === 'developer') return 'view';
    if (role === 'tester') return 'add';
    return 'view';
  });

  return (
    <div>
      <button id="logout" className="logout" onClick={handleLogout}>
        Logout
      </button>
      <br />
      {role === 'admin' && (
        <>
          <button id="add-defect" className="add-defect" onClick={() => setActiveView('add')}>
            Add Defect
          </button>
          <button id="view-defect" className="view-defect" onClick={() => setActiveView('view')}>
            View Defect
          </button>
        </>
      )}
      {role === 'developer' && (
        <button id="view-defect" className="view-defect" onClick={() => setActiveView('view')}>
          View Defect
        </button>
      )}
      {role === 'tester' && (
        <button id="add-defect" className="add-defect" onClick={() => setActiveView('add')}>
          Add Defect
        </button>
      )}

      <div>
        {role === 'admin' && (activeView === 'add' ? (
          <AddDefect addDefect={addDefect} />
        ) : (
          <ViewDefect defects={defects} updateDefectStatus={updateDefectStatus} />
        ))}

        {role === 'developer' && (
          <ViewDefect defects={defects} updateDefectStatus={updateDefectStatus} />
        )}

        {role === 'tester' && <AddDefect addDefect={addDefect} />}
      </div>
    </div>
  );
};

export default Navbar;
