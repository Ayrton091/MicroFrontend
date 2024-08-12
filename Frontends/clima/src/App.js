import React, { useEffect, useState } from 'react';

function App() {
    const [weather, setWeather] = useState({});

    useEffect(() => {
        fetch('http://localhost:3001/weather')
            .then(response => response.json())
            .then(data => setWeather(data))
            .catch(error => console.error('Error fetching weather:', error));
    }, []);

    return (
        <div>
            <h1>Weather Data</h1>
            <p>Temperature: {weather.temperature}°C</p>
            <p>Condition: {weather.condition}</p>
            <p>Location: {weather.location}</p>
            <p>Humidity: {weather.humidity}%</p>
        </div>
    );
}

export default App;
