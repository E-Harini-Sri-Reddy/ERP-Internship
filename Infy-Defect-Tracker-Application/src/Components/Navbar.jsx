import React, { useState } from 'react';
import AddDefect from './AddDefect';
import ViewDefect from './ViewDefect';

const Navbar = ({ handleLogout }) => {
  const [activeView, setActiveView] = useState('view');
  
  const handleAddDefectClick = () => {
    setActiveView('add');
  };

  const handleViewDefectClick = () => {
    setActiveView('view');
  };

  return (
    <div>
      <button id='logout' className='logout' onClick={handleLogout}>Logout</button>
      <br /><br />
      <button id='add-defect' className='add-defect' onClick={handleAddDefectClick}>Add Defect</button>
      <button id='view-defect' className='view-defect' onClick={handleViewDefectClick}>View Defect</button>

      <div>
        {activeView === 'add' ? <AddDefect /> : <ViewDefect />}
      </div>
    </div>
  );
}

export default Navbar;