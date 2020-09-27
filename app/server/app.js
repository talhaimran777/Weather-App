// My app key to access to the weather data
//const apiKey = 'DNIYlR9kBJZDZZy0TYGXh0nULOsdhOzO';

const express = require('express');
const app = express();
const path = require('path');


// Setting up express for static files like js, css and img
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.sendFile('./views/index.html', {root: path.resolve()});
});


app.listen(3000, ()=>{
    console.log('Listening on port 3000!');
});