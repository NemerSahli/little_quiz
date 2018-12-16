const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use(cors());

if (fs.existsSync(__dirname + '/../data/questions.json')) {
  console.log(' file exist');
}

app.get('/questions', (req, res) => {
  console.log('get request');

  fs.readFile(__dirname + '/../data/questions.json', 'utf-8', (err, data) => {
    if (err) res.send({ err: err });
    let questions = JSON.parse(data);
    res.send({ result: questions });
  });
});

app.listen(8000);
