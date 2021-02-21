const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 27017;

app.use(cors());
app.listen(port);
app.use(express.static('public'));
app.use(express.json());

const top15 = require('./routes/top15');
const submitResult = require('./routes/submitResult');

app.use('/top15', top15);
app.use('/submitResult', submitResult);
