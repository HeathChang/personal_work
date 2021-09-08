const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }
  const db = client.db(databaseName);

  //Update: 특수 operations이 있음
  //updateOne
  const updatePromise = db.collection("users").updateMany({
    _id: new ObjectID("613843414cc5f916e402f299")
  }, {
    $set: {
      name: "HSC",
      Age: 29
    }
    // $inc: {
    //   Age: 2
    // }
  }).then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  })//end updateOne


})






