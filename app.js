const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/' , (req,res) => {
    res.sendFile( `${__dirname}/index.html`);
});

app.get('/contact' , (req,res) => {
    res.sendFile(`${__dirname}/contact.html`);
});

const data = {age:38, job: 'ninja'};

app.get('/profile/:name', (req, res) =>{
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);
