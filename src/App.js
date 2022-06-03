import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("Peshawar");
  const [city, setcity] = useState("");
  const [country, setcountry] = useState("");
  const [temp, settemp] = useState("");
  const [icon, seticon] = useState("");
  const [condition, setcondition] = useState("");
  const [humidity, sethumidity] = useState("");
  const [cloud, setcloud] = useState("");
  const [wind, setwind] = useState("");

  const API = "https://api.openweathermap.org/data/2.5/weather?q=";
  const key = "&appid=e6403a781a6084cb02e9d407d8734401&units=metric";

  const fetchHandler = () => {
    fetch(API + query + key)
      .then((res) => res.json())
      .then((weather) => {
        setcity(weather.name);
        setcountry(weather.sys.country);
        settemp(weather.main.temp);
        seticon(weather.weather[0].icon);
        setcondition(weather.weather[0].main);
        sethumidity(weather.main.humidity);
        setcloud(weather.clouds.all);
        setwind(weather.wind.speed);
        console.log(weather);
      });
  };
  useEffect(() => fetchHandler(), []);

  return (
    <div className='App'>
      <div className='search'>
        <input
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={fetchHandler}>Search</button>
      </div>
      <div className='city'>
        <i id='icon' class='fas fa-map-marker-alt'>
          {" "}
        </i>{" "}
        {city}, {country}
      </div>
      <div className='temp'>
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt='' />
        <h1>{Math.trunc(temp)}&deg;</h1>
      </div>
      <div className='condition'>
        <h2>{condition}</h2>
      </div>
      <div className='detail'>
        <div className='humidity'>
          <i class='fas fa-tint'></i> Humidity : {humidity}
        </div>
        <div className='cloud'>
          <i class='fas fa-cloud'></i> Cloud : {cloud}
        </div>
        <div className='wind'>
          <i class='fas fa-wind'></i> Wind : {wind}
        </div>
        <div className='uv'>
          <i class='fas fa-sun'></i> UV index: 9
        </div>
      </div>
    </div>
  );
}

export default App;
