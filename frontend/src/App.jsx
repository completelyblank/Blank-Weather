import React from 'react';
import WeatherApp from './WeatherApp';

const App = () => 
{
  return (
    <div className="h-screen flex flex-col items-center justify-center" style={{
      backgroundImage: 'url("https://images.pexels.com/photos/1229042/pexels-photo-1229042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}>
      <div className="text-center flex flex-col">
        <div className='bg-gray-900 opacity-70'>
        <h1 className="text-6xl font-bold mb-8 text-white" style={{ fontFamily: "Times New Roman, italic" }}>
  Welcome to Blank Weather
</h1>

        <h1 className="text-3xl font-bold mb-8 text-white" style={{ fontFamily: "Times New Roman, italic" }}>The weather at the city you're looking for is:</h1>
        <WeatherApp />
        </div>
        </div>
      </div>
  );
};

export default App;
