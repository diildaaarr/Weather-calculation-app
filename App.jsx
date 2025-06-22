import { useEffect, useState } from 'react';
import './App.css';
import Input from './components/Input';    
import Button from './components/Button';   
import Card from './components/Card';      
import { useWeather } from './components/Weather';

function App() {
  const [input, setInput] = useState('');
  const weather=useWeather();


  const handleRefresh = () => { 
    weather.setSearchCity("");
    weather.fetchCurrentLocation();
  };

  useEffect(() => {
    weather.fetchCurrentLocation();
  }, []);

  return (
    <div>
      <h1>Weather Forecast</h1>
      <Input />
      <Button value="Search" onClick={weather.fetchData} />
      <Card />
      <Button value="Refresh" onClick={handleRefresh} />
    </div>
  );
}

export default App;
