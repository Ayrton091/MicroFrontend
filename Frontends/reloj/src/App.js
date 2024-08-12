import React, { useEffect, useState } from 'react';

function App() {
    const [time, setTime] = useState('');

    useEffect(() => {
        fetch('http://localhost:3001/time')
            .then(response => response.json())
            .then(data => setTime(data.time))
            .catch(error => console.error('Error fetching time:', error));
    }, []);

    return (
        <div>
            <h1>Current Time</h1>
            <p>{time}</p>
        </div>
    );
}

export default App;
