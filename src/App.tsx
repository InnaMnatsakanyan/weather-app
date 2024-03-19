import React from 'react';
import WeatherView from './presentation/screen/weather/WeatherView';


const App: React.FC = () => {
  return (
      <div>
        <h1>Weather App</h1>
        <WeatherView/>
      </div>
  );
};

export default App;
