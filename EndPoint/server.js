const express = require('express');
const cors = require('cors');
const app = express();
const port = 3003;


app.use(cors());
app.get('/weather', (req, res) => {
    const weatherData = {
        temperature: 25,
        condition: 'Sunny',
        location: 'New York',
        humidity: 60
    };
    res.json(weatherData);
});


app.get('/time', (req, res) => {
    const timeData = {
        time: new Date().toLocaleTimeString()
    };
    res.json(timeData);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
