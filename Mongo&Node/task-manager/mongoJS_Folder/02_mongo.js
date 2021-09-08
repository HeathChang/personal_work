const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log("id>>", id)



MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }
  const db = client.db(databaseName);
  //console.log("DB>>", db);

  //##Can Generate ObjectID
  // db.collection('users').insertOne({
  //   _id: id,
  //   name: 'Nate',
  //   age: 21
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to Insert to database!');
  //   }
  //   console.log(result.ops);
  // })


})





