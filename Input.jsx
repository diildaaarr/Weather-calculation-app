import React from 'react';
import { useWeather } from './Weather';

const Input = () => {

  const weather=useWeather();
  console.log("weather",weather);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      weather.fetchData();
    }
  };

  return (
    <div>
      <input
        className="input-field"
        placeholder="Search city..."
        value={weather.searchCity}
        onChange={(e)=>{
          weather.setSearchCity(e.target.value)
        }}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Input;
