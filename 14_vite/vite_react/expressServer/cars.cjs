var express = require('express');
var app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '');
    console.log('Car server is called. Request is from ', req.get('Host'));
    console.log('Request url is ', req.url);
    next();
})

app.get('/cars', (req, res) => {
    const cars = [
        {id:'001', name: 'Benze', price: 101},
        {id:'002', name: 'BMW', price: 100},
        {id:'003', name: 'JADE', price: 11},
    ]
    res.send(cars);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, err => {if(!err) console.log('Server car started, call url is http://localhost:', PORT);})