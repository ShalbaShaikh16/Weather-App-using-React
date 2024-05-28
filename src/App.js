import React, { useState } from 'react';
import "./css/style.css"
import './App.css';

const api={
  key: 'eca117d04c4250789ba3b30b97b41d7a',
  base: 'https://api.openweathermap.org/data/2.5/',

};
function App() {
  const  [search,setSearch]=useState("");
  const [weather,setWeather]=useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then(res=>res.json())
    .then((result)=>{
     setWeather(result);
    });
  
  };
  return (
    <div className="App">
      <header className='App-header'>
      <h1>Weather App</h1>

      <div>
      <input type='text' className='city' placeholder='Enter your city/town'
      onChange={(e)=>setSearch(e.target.value)}
      />
      
      <button type='button' className='butt' onClick={searchPressed}>Search</button>
      </div>

      {typeof weather.main!=="undefined"? (
        <div>
        <p>{weather.name}</p>
  
        <p>{weather.main.temp}°C</p>
  
        <p>{weather.weather[0].main}</p>
        <p>{weather.weather[0].discription}</p>
        </div>
        
      ):(
        ""
      )}
    </header>
      </div>
  );
}
 
export default App;
