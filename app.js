const express = require('express');
const bootstrap = require('bootstrap');

let app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.html');
});

let PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});