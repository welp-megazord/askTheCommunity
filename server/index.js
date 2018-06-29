const express = require('express');
const parser = require('body-parser');
const path = require('path');
const fs = require('fs');
const server = require('http').createServer();

// const { User, Question } = require('../database/schemas.js');
const {
    User,
    Question
} = require('../database/mongoDB/schemas.js');
const cors = require('cors');
const db = require('../database/mongoDB');

const PORT = 3000;

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({
    extended: true
}));

app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.use(cors());

server.on('request', (req, res) => {
    const src = fs.createReadStream('./big.file');
    src.pipe(res);
});

app.post('/api/questions', (req, res) => {
    // db.Question.create({
    //         user_id: req.body.user_id,
    //         restaurant_id: req.body.restaurant_id,
    //         text: req.body.text,
    //         parent_id: req.body.parent_id || null,
    //         helpful: req.body.helpful || null
    //     })
    //     .then(data => {
    //         console.log('Succesfully inserted data into the database...', data);
    //         res.status(201).send(data);
    //     })
    //     .catch(err => {
    //         console.log('Error inserting data into the database', err);
    //         res.status(400).send(err);
    //     })
    Question.insert({
        user_id: req.body.user_id,
                restaurant_id: req.body.restaurant_id,
                text: req.body.text,
                parent_id: req.body.parent_id || null,
                helpful: req.body.helpful || null
    }).then(data => {
        console.log('data was posted to questions')
    })
})

// app.post('/api/users', (req, res) => {
//     User.create({
//             username: req.body.username,
//             imageUrl: req.body.imageUrl
//         })
//         .then(data => {
//             res.status(201).send(data);
//         })
//         .catch(err => {
//             res.status(400).send(err);
//         })
// })

app.get('/api/questions/:id', (req, res) => {
    console.log('HERE>>>>>>>', req.params)
    // db.Question.find({
    //         restaurant_id: req.params
    //     })
    //     .then(data => {
    //         res.status(200).json(data);
    //     })
    //     .catch(err => {
    //         res.send(err);
    //     })
    Question.find({
        // restaurant_id: req.params.id
        type: 1
    }).limit(5)
    .then(data => {
        console.log('Data received', data)
        res.status(200).send(data);
    })
})

// app.get(`/api/getPhoto/:id`, (req, res) => {
//     User.find({
//             where: {
//                 id: req.params.id
//             }
//         })
//         .then(data => {
//             res.status(200).json(data);
//         })
//         .catch(err => {
//             res.status(400).send(err);
//         })
// })

app.get("/api/getAnswers/:id", (req, res) => {
        // Question.find({
        //         where: {
        //             parent_id: req.params.id
        //         }
        //     })
        //     .then(data => {
        //         res.status(200).json(data);
        //     })
        //     .catch(err => {
        //         res.status(400).json(err);
        //     })
    console.log('req.params.id', req.params.id)
    Question.find({
        parent_id: req.params.id
    })
    .then(data => {
        console.log('Answers recieved')
        res.status(200).send(data);
    })
})

app.listen(PORT, () => {
    console.log('Listening on port:', PORT);
})