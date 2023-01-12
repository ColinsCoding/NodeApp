const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello Bekonix Team and Friends!");
});

app.get('/timelapse-device', (req, res) => {
    res.send("This is where the timelapse camera will accept data")
});

const port = process.env.port || 3000; //port variable holds preferred by environment (to make aws happy) or port 3000 to run locally 

app.listen(port, () => {
    console.log("IM ALLLIVVE")
});
