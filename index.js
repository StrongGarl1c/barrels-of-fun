const express = require('express');
const cors = require('cors');

const uri = process.env.API_URI;
const app = express();
const port = process.env.PORT || 5000;

app.listen(port);
app.use('/', express.static('./client/build'));
app.use(express.json());
app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));

const routes = require('./routes/index');

app.use('/api', routes);
