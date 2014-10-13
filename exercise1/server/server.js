'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    repository = require('./repository.js'),
    fixtures = require('./fixtures.js');

app.use(bodyParser.json());

// cross domain stuff
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, X-Requested-With');
    if (req.method === 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});

// load fixture data
fixtures.loadAll();

// users
app.get('/users', function(req, res) {
    res.status(200).json(repository.users);
});

app.post('/users', function(req, res) {
    var newUser = repository.createUser(req.body);
    
    res.location('/users/' + newUser.id);
    res.status(201).json(newUser);
});

app.put('/users/:id', function(req, res) {
    repository.updateUser(req.params.id, req.body);
    
    res.status(204).end();
});

app.delete('/users/:id', function(req, res) {
    repository.deleteUser(req.params.id);
  
    res.status(204).end();
});

// all other routes return a 404
app.use(function(req, res){
    res.status(404).send('404 Not Found');
});

// start server
var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});