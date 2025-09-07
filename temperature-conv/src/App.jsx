import { useState } from 'react'
import './App.css'

function App() {
  const [unit, setUnit] = useState('C');
  const [temperature, setTemp] = useState(0);

  const convertTemp = () => {
    if (unit === 'C') {
      setTemp((temperature * 9) / 5 + 32);
      setUnit("F");
    } else {
      setTemp(((temperature - 32) * 5) / 9);
      setUnit("C");
    }
  }

  return (
    <>
      <div className='container'>
        <div className='Heading'>
          <h1>Temperature Converter</h1>
        </div>

        <div className='Display'>
          <div className='temp'>
            <p> Temperature: {temperature.toFixed(2)}°{unit}</p>
          </div>
          <div className='controls'>
            <button onClick={() => {setTemp(temperature + 1)}}> Increase </button>
            <button onClick={() => {setTemp(temperature - 1)}}> Decrease </button>
            <button onClick={convertTemp}> Convert to {unit === 'C' ? "Fahrenheit" : "Celsius"} </button>
            <button onClick={() => {setTemp(0)}}> Set to 0 </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
