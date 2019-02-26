const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/' , (req,res) => {
    res.render('index');
});

app.get('/contact' , (req,res) => {
    console.log(req.query);
    res.render('contact', {qs: req.query});
});

app.post('/contact' , (req,res) => {
    console.log(req.body);
    res.render('contact-success', {data:req.body});
});

const data = {age:38, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};

app.get('/profile/:name', (req, res) =>{
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);
 