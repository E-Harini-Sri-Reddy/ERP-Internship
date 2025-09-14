import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  var employees = [
    { empId: 1234, name: "John", designation: "SE" },
    { empId: 4567, name: "Tom", designation: "SSE" },
    { empId: 8910, name: "Kevin", designation: "TA" },
  ];
  return (
    <>
      <h1> Defect Tracker Application </h1>
    </>
  );
}

export default App;
