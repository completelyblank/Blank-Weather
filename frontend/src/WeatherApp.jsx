import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherApp = () => 
{
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchWeatherData = () => 
  {
    if (!city) 
    {
      // No need to make a request if the city is empty
      return;
    }

    setLoading(true);

    axios
  .get(`http://localhost:5000/weather?city=${city}`)
  .then((response) => {
    console.log("Fetched data:", response.data);
    setWeatherData(response.data);
    setLoading(false);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
    setLoading(false);
  });
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <input
  type="text"
  value={city}
  onChange={(e) => setCity(e.target.value)}
  placeholder="Enter city"
  className="p-2 border border-gray-800 rounded mb-4 text-black h-12 w-full bg-white"
/>

      <button
        onClick={searchWeatherData}
        className="bg-purple-800 text-white rounded cursor-pointer hover:bg-purple-700 h-24 w-full"
            
      >
        Get Weather
      </button>
      {loading && <p>Loading...</p>}
      {weatherData && (
        <div className="mt-8 p-4 border-4 border-gray-300 rounded text-4x1" style = {{fontSize: '2em'}}>
          <p className="text-4x1 text-white">Temperature: {weatherData.temperature}</p>
          <p className="text-4x1 text-white">Description: {weatherData.description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
