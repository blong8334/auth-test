const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'testProject';
const client = new MongoClient(url, { useUnifiedTopology: true });

(async function () {
  const client = await getClient();
  const db = client.db(dbName);
  const collection = db.collection('documents');
  const results = await collection.insertOne({ a: 1 });
  console.log('RESULTS', results);
  client.close();
})()

function getClient() {
  return new Promise((resolve, reject) => {
    client.connect((err) => {
      if (err) {
        return reject(err);
      }
      console.log("Connected successfully to server");
      resolve(client);
    });
  });
}