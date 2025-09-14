import React, { useState } from 'react';
import '../App.css';

const LoginPage = ({ handleLogin, error }) => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleFormSubmit = (e) => {
handleLogin(e, username, password);
};

  return (
    <div className='login-div'>
      <p className='login'>Login</p>
      <form onSubmit={handleFormSubmit}>
        <div className='login-maindiv'>
          <label htmlFor='userName'>Username</label>
          <input
            type='text'
            id='userName'
            placeholder='Enter Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label htmlFor='pwd'>Password</label>
          <input
            type='password'
            id='pwd'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          {error && <p className='error-message'>{error}</p>}
          <button type='submit' id='signin' className='signin'>
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;