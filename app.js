let express = require('express');
let bodyParser = require('body-parser');
let ejs = require('ejs');

let app = express();

let operation = 0;

app.set("view engine", "ejs"); 
app.use(bodyParser());


app.get('/', function (req, res) {
    res.render('index', { 
        resultatCalc01 : operation  
    });
});


function addition(number1, number2) {
    let addition = number1 + number2;
    return addition;
}

function soustraction(number1, number2) {
    let soustraction = number1 - number2;
    return soustraction;
}

function multiplication(number1, number2) {
    let multiplication = number1 * number2;
    return multiplication;
}

function division(number1, number2) {
    let division = number1 / number2;
    return division;
}


// ROUTES
// Addition
app.post('/addition', function (req, res) {
    operation = addition(Number(req.body.number1), Number(req.body.number2));
    res.redirect('/');
});

// Soustraction
app.post('/soustraction', function (req, res) {
    operation = soustraction(Number(req.body.number1), Number(req.body.number2));
    res.redirect('/');
});

// Multiplication
app.post('/multiplication', function (req, res) {
    operation = multiplication(Number(req.body.number1), Number(req.body.number2));
    res.redirect('/');
});

// Division
app.post('/division', function (req, res) {
    operation = division(Number(req.body.number1), Number(req.body.number2));
    res.redirect('/');
}); 

// Clear
app.post('/clear', function (req, res) {
    operation = 0;
    res.redirect('/');
});

// Gestion erreur 404
app.use(function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

app.listen(8080);