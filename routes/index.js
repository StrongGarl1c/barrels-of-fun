const express = require('express');
require('dotenv').config({ path: './config/.env' });
const { MongoClient } = require('mongodb');

const uri = process.env.API_URI;
const router = express.Router();

router.get('/', async function (req, res) {
  try {
    // connect to db
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    await client.connect();
    const database = client.db('barrels');
    const collection = database.collection('players');

    // find data
    const sort = { score: -1 };
    const limit = 20;
    const projection = { _id: 1, name: 1, score: 1 };
    const cursor = collection.find().project(projection);
    cursor.sort(sort);
    cursor.limit(limit);

    // send data back to client
    const data = await cursor.toArray();
    res.json(data);
  } catch (error) {
    console.error(error);
  }
});

router.post('/', async function (req, res) {
  try {
    // connect to db
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    await client.connect();
    const database = client.db('barrels');
    const collection = database.collection('players');

    // update data if score is better
    const { name, score } = req.body;
    const player = await collection.findOne({ name });

    if (!player || score > player.score) {
      const options = { upsert: true };
      const query = { name };
      const update = {
        $set: {
          name,
          score,
        },
      };
      collection.updateOne(query, update, options);

      // get new top 20
      const sort = { score: -1 };
      const limit = 20;
      const projection = { _id: 1, name: 1, score: 1 };
      const cursor = collection.find().project(projection);
      cursor.sort(sort);
      cursor.limit(limit);

      // send new top 20 back to client
      const data = await cursor.toArray();
      res.json(data);
    }
    res.status(200).send();
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
