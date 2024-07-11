const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    console.log(`Timer triggered at ${new Date().toISOString()}`);
    res.send('Timer triggered successfully');
  });

app.get('/trigger', (req, res) => {
    console.log(`Timer triggered at ${new Date().toISOString()} and it was a GET request !@!`);
    res.send('Timer triggered successfully');
});


app.post('/trigger', (req, res) => {
    console.log(`Timer triggered at ${new Date().toISOString()} and it was a POST request !@!`);
    res.send('Timer triggered successfully');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
