import { useState } from 'react';
import LoginPage from './Components/LoginPage';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [role, setRole] = useState(''); // admin, developer, tester

  // Defects state managed here and passed down
  const [defects, setDefects] = useState([
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
  ]);

  const handleLogin = (e, username, password) => {
    e.preventDefault();

    if (username === 'admin' && password === '12345') {
      setLoggedIn(true);
      setError('');
      setRole('admin');
    } else if (username === 'developer' && password === '12345') {
      setLoggedIn(true);
      setError('');
      setRole('developer');
    } else if (username === 'tester' && password === '12345') {
      setLoggedIn(true);
      setError('');
      setRole('tester');
    } else {
      setError('Invalid username or password');
      setTimeout(() => setError(''), 3000);
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setLoggedIn(false);
    setRole('');
  };

  // Function to add a defect (used in AddDefect)
  const addDefect = (newDefect) => {
    setDefects((prevDefects) => [...prevDefects, newDefect]);
  };

  // Function to update defect status (for example, to close defects)
  const updateDefectStatus = (index, newStatus) => {
    setDefects((prevDefects) => {
      const updatedDefects = [...prevDefects];
      updatedDefects[index] = {
        ...updatedDefects[index],
        status: newStatus,
        action: newStatus === 'closed' ? 'No action pending' : 'Close Defect',
      };
      return updatedDefects;
    });
  };

  return (
    <div className={loggedIn ? 'container container-logged-in' : 'container'}>
      <h1>Defect Tracker</h1>
      {loggedIn ? (
        <Navbar
          handleLogout={handleLogout}
          role={role}
          defects={defects}
          addDefect={addDefect}
          updateDefectStatus={updateDefectStatus}
        />
      ) : (
        <LoginPage handleLogin={handleLogin} error={error} />
      )}
    </div>
  );
}

export default App;
