import { useState } from 'react';
import LoginPage from './Components/LoginPage';
import './App.css';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e, username, password) => {
    e.preventDefault();
    if (username === 'admin' && password === '12345') {
      setLoggedIn(true);
      setError('');
    } else {
      setError('Invalid username or password');
      setTimeout(() => setError(''), 3000);
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setLoggedIn(false);
  };

  return (
    <>
      <div className='container'>
        <h1>Defect Tracker</h1>
        {loggedIn ? (
          <div>
            <button onClick={handleLogout}>Logout</button>
            <br />
            <button>Add Defect</button>
            <button>View Defect</button>
            <p>To be added!!!</p>
          </div>
        ) : (
          <LoginPage handleLogin={handleLogin} error={error} />
        )}
      </div>
    </>
  );
}