const express = require('express');
const path = require('path');
const app = express();
const port = 3002;


app.use('/time', express.static(path.join(__dirname, '../reloj/build')));


app.use('/weather', express.static(path.join(__dirname, '../clima/build')));


app.get('/', (req, res) => {
    res.send('Micro Frontend Container');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
