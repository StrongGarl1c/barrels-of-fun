const express = require('express');
require('dotenv').config({ path: './config/.env' });
const { MongoClient } = require('mongodb');

const uri = process.env.API_URI;
const router = express.Router();

router.post('/', function (req, res) {
  async function run() {
    // connect to db
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    await client.connect();
    const database = client.db('treasure');
    const collection = database.collection('players');

    // update data
    const data = req.body;
    const options = { upsert: true };
    const query = { name: data.name };
    const update = {
      $set: {
        name: data.name,
        score: data.score,
      },
    };
    collection.updateOne(query, update, options);

    res.status(200);
  }
  run().catch();
});

module.exports = router;
