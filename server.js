let express = require('express');
let bodyParser = require('body-parser');

let app = express();
app.use(bodyParser());


app.get('/', function (req, res) {
    res.render('index.ejs');
});

app.post('/add', function (req, res) {
    addition = Number(req.body.number1) + Number(req.body.number2);
    res.end(addition.toString());
});

app.post('/mult', function (req, res) {
    multiplication = Number(req.body.number1) * Number(req.body.number2);
    res.end(multiplication.toString());
}); 
    
app.use(function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

app.listen(8080);