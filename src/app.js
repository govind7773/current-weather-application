
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const path = require('path');
// console.log(path.join(__dirname, '../views'));


app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');
const staticpath = path.join(__dirname, '../public');
// app.use(express.static(staticpath));
app.use("/public", express.static(staticpath));

app.use(express.json());
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/weather', (req, res) => {
    res.render('weather');
});
app.get('/aboutus', (req, res) => {
    res.render('aboutus');
});

app.get('*', (req, res) => {
    res.render('error');
});

app.listen(port, () => {
    console.log("app is running ");
});