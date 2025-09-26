import { useState } from 'react';
import LoginPage from './Components/LoginPage';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [role, setRole] = useState(''); // admin, developer, tester

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

  return (
    <div className={loggedIn ? 'container container-logged-in' : 'container'}>
      <h1>Defect Tracker</h1>
      {loggedIn ? (
        <Navbar handleLogout={handleLogout} role={role} />
      ) : (
        <LoginPage handleLogin={handleLogin} error={error} />
      )}
    </div>
  );
}

export default App;
