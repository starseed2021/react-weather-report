import React from 'react';
import { useState } from 'react';
// import Temperature from './components/Temperature'

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(30);

  const [temperatureColor, setTemperatureColor] = useState('cold');

  const increaseTemperature = () => {
    const newTemperature = temperatureValue + 1;
    setTemperatureValue(newTemperature);

    // UPDATING THE COLORS TO DIFFERENT TEMPERATURES
    if (newTemperature > 40 && newTemperature <= 50) {
      setTemperatureColor('chilly');
    } else if (newTemperature > 50 && newTemperature <= 60) {
      setTemperatureColor('temperate');
    } else if (newTemperature > 60 && newTemperature <= 75) {
      setTemperatureColor('warm');
    } else if (newTemperature > 75 && newTemperature <= 98) {
      setTemperatureColor('hot');
    }
  };
  
  const decreaseTemperature = () => {
    const newTemperature = temperatureValue - 1;
    setTemperatureValue(temperatureValue - 1);

    if (newTemperature < 30 && newTemperature >= 20) {
      setTemperatureColor('cold');
    } else if (newTemperature > 40 && newTemperature <= 50) {
      setTemperatureColor('chilly');
    } else if (newTemperature > 50 && newTemperature <= 60) {
      setTemperatureColor('temperate');
    } else if (newTemperature > 60 && newTemperature <= 75) {
      setTemperatureColor('warm');
    } else if (newTemperature > 75 && newTemperature <= 98) {
      setTemperatureColor('hot');
  };
};


	return (
		<div className='app-container'>
			<div className='temperature-display-container'>
      <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°F</div>
			</div>
			<div className='button-container'>
        <button onClick={() => setTemperatureValue(increaseTemperature)}>+</button>
				<button onClick={() => setTemperatureValue(decreaseTemperature)}>-</button>
			</div>
		</div>
	);
};


export default App;
