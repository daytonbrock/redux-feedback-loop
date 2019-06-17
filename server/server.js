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

app.get('/admin', (req, res) => {
    pool.query(`
        SELECT * FROM "feedback" ORDER BY "id";`)
    .then((response) => {
        res.send(response.rows);
    }).catch((error) => {
        console.log('error in SELECT query:', error);
        res.sendStatus(500);
    }) // end query
}) 

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});