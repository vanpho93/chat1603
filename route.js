const express = require('express');
const { app } = require('./config');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.get('/', (req, res) => res.render('home'));