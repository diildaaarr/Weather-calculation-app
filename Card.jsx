import React from 'react';
import { useWeather } from './Weather';

const Card = (props) => {

  const Weather=useWeather();


  return (
    <div className="weather-card">
      <img src={Weather?.data?.current?.condition?.icon} alt="weather image" style={{ width: '150px' }} />
      <h2>{Weather?.data?.current?.temp_c}°C</h2>
      <h5>{Weather?.data?.location?.name},{Weather?.data?.location?.region},{Weather?.data?.location?.country}   </h5>
    </div>
  );
};

export default Card;