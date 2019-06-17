// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
// the POST route
app.post('/submit', (req, res) => {
    const feedback = req.body;
    pool.query(`
        INSERT INTO "feedback" ( "feeling", "understanding", "support", "comments" )
        VALUES ( $1, $2, $3, $4 );`,
            [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
        .then(() => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log('error in INSERT query:', error);
            res.sendStatus(500);
        }) // end query
});

// the GET route
app.get('/admin', (req, res) => {
    pool.query(`
        SELECT * FROM "feedback" ORDER BY "id" DESC;`)
    .then((response) => {
        res.send(response.rows);
    }).catch((error) => {
        console.log('error in SELECT query:', error);
        res.sendStatus(500);
    }) // end query
});

// the DELETE route
app.delete('/admin/:id', (req, res) => {
    pool.query(`
        DELETE FROM "feedback" WHERE "id"=$1;`, [req.params.id])
        .then(() => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('Error with DELETE query:', error);
            res.sendStatus(500);
        }) // end query
});

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});