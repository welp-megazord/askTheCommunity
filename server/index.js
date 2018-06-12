const express = require('express');
const parser = require('body-parser');
const path = require('path');
const { User } = require('../database/schemas.js');
const { Question } = require('../database/schemas.js');
const cors = require('cors');
const PORT = 3000;

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.use(cors());

app.post('/api/questions', (req, res) => {
   console.log("'Hit endpoint on server...", req.body);
   Question.create({
       user_id: req.body.user_id,
       restaurant_id: req.body.restaurant_id,
       text: req.body.text,
       parent_id: req.body.parent_id || null,
       helpful: req.body.helpful || null
   })
   .then(data => {
       console.log('Succesfully inserted data into the database...', data);
       res.status(201).send(data);
   })
   .catch(err => {
       console.log('Error inserting data into the database', err);
       res.status(400).send(err);
   })
})

app.post('/api/users', (req, res) => {
    console.log('Hit endpoint for user on server', req.body);
    User.create({
        username: req.body.username,
        imageUrl: req.body.imageUrl
    })
    .then(data => {
        console.log('Successfully added user to the database...', data);
        res.status(201).send(data);
    })
    .catch(err => {
        console.log('Error adding user to the database...', err);
        res.status(400).send(err);
    })
})

app.get('/api/questions/:id', (req, res) => {
    console.log('Hit questions endpoint...', req.params)
    Question.findAll({
        where: {
            restaurant_id: req.params.id
        }
    })
    .then(data => {
        console.log('Data back from the database...', data);
        res.status(200).json(data);
    })
    .catch(err => {
        console.log('Error getting data from the database...', err);
        res.send(err);
    })
})

app.get(`/api/getPhoto/:id`, (req, res) => {
    User.find({
        where: {
            id: req.params.id
        }
    })
    .then(data => {
        console.log('User data from question get request', data);
        res.status(200).json(data);
    })
    .catch(err => {
        console.log('Error getting user photo from the database...', err);
        res.status(400).send(err);
    })
})

app.get("/api/getAnswers/:id", (req, res) => {
    Question.find({
        where: {
            parent_id: req.params.id
        }
    })
    .then(data => {
        console.log('Data from answer query on the server...', data);
        res.status(200).json(data);
    })
    .catch(err => {
        console.log('Error getting answers on server...', err);
        res.status(400).json(err);
    })
})

app.listen(PORT, () => {
    console.log('Listening on port:', PORT);
})