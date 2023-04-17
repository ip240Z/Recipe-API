var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const recipeRouter = require('./routes/recipes');

const port = 3000;

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send("Navigate to /recipes/ to see a list of recipes. Check documentation for further functionality!")
})
app.use('/recipes', recipeRouter);

module.exports = app;

app.listen(port, () => {
    console.log(`Server running at port: ${port}`)
})