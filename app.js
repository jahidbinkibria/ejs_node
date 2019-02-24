const express = require('express');
const app = express();
app.get('/' , (req,res) => {
    res.send("This is the home page");
});

app.get('/contact' , (req,res) => {
    res.send("This is the contact page");
});

app.get('/profile/:id', (req, res) =>{
    res.send('You want to see a profile with the id of ' + req.params.id);
});

app.listen(3000);
