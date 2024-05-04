import { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity]=useState('');
  const [weatherData, setWeatherData] = useState({});

  async function getWeatherDetail(){
    let data = await fetch(`http://localhost:5000/weather/${city}`);
    data = await data.json();
    setWeatherData(data);
  }

  return (
    <div className="App ">
      <input type='text'  onChange={(e)=>setCity(e.target.value)} />
      <button onClick={getWeatherDetail}>Submit</button>
      <div>
        <h3> City: {weatherData.city}</h3>
        <h3> Temperature: {weatherData.temperature}</h3>
        <h3> Description: {weatherData.description}</h3>
      </div>
    </div>
  );
}

export default App;