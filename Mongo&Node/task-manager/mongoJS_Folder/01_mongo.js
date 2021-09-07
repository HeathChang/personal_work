const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }
  const db = client.db(databaseName);
  console.log(db);

  // db.collection('users').insertOne({
  //   name: 'Heath',
  //   age: 27
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to Insert to database!');
  //   }
  //   console.log(result.ops);
  // })

  db.collection('users').insertMany([
    {
      name: 'Jann',
      Age: 27
    },

    {
      name: 'Jenny',
      Age: 28,
      Occupation: "Teacher"
    },
    {
      name: 'June',
      Age: 29,
      Hobby: "Soccer"
    },

  ], (error, result) => {
    if (error) {
      return console.log('Unable to Insert to database!');
    }
    console.log(result.ops);
  })

})





