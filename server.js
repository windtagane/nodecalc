let express = require('express');
let bodyParser = require('body-parser');

let app = express();
app.use(bodyParser());


app.get('/', function (req, res) {
    res.render('index.ejs');
});

// Addition
app.post('/add', function (req, res) {
    addition = Number(req.body.number1) + Number(req.body.number2);
    res.end(addition.toString());
});

// Soustraction
app.post('/substract', function (req, res) {
    multiplication = Number(req.body.number1) - Number(req.body.number2);
    res.end(multiplication.toString());
}); 

// Multiplication
app.post('/multiply', function (req, res) {
    multiplication = Number(req.body.number1) * Number(req.body.number2);
    res.end(multiplication.toString());
}); 

// Division
app.post('/division', function (req, res) {
    multiplication = Number(req.body.number1) / Number(req.body.number2);
    res.end(multiplication.toString());
}); 

// Gestion erreur 404
app.use(function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

app.listen(8080);