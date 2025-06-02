var express = require('express');
var app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '');
    console.log('Person server is called. Request is from ', req.get('Host'));
    console.log('Request url is ', req.url);
    next();
})

app.get('/persons', function(req, res) {
    const person = [
        {id:'001', name: 'Jack', price: 10},
        {id:'002', name: 'Rose', price: 11},
        {id:'003', name: 'Truce', price: 13},
    ]
    res.send(person);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, err => {if(!err) console.log('Server person started, call url is http://localhost:', PORT);})