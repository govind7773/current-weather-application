const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
console.log(path.join(__dirname, '../views'));
const staticpath = path.join(__dirname, '../public');
app.use(express.static(staticpath));

app.use(express.json());

app.get('/', (req, res) => {
    res.send("welcome to weather app");
});
app.get('*', (req, res) => {
    res.send("oops page note pound");
});

app.listen(port, () => {
    console.log("app is running ");
});