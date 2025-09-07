import { useState } from 'react'
import './App.css'

function App() {
  const [unit, setUnit] = useState('C');
  const [temperature, setTemp] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const convertTemp = () => {
    if (unit === 'C') {
      setTemp((temperature * 9) / 5 + 32);
      setUnit("F");
    } else {
      setTemp(((temperature - 32) * 5) / 9);
      setUnit("C");
    }
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const parsedValue = parseFloat(inputValue);
      if (!isNaN(parsedValue)) {
        setTemp(parsedValue);
        setInputValue('');
      }
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
            <h2> Temperature: {temperature.toFixed(2)}°{unit}</h2>
          </div>
          <div>
            <input
              type="number"
              placeholder="Enter Temp & Press Enter"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className='controls'>
            <button onClick={() => { setTemp(temperature + 1) }}> Increase </button>
            <button onClick={() => { setTemp(temperature - 1) }}> Decrease </button>
            <button onClick={() => { setTemp(0) }}> Set to 0 </button>
            <button onClick={convertTemp}> Convert to {unit === 'C' ? "Fahrenheit" : "Celsius"} </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App