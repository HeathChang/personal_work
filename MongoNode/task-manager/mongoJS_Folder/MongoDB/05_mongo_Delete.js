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

  //Delete
  //결과가 있든 없든 (에러가 발생한게 아니면) 에러는 아님.
  db.collection('users').deleteMany({
    Age: 28
  }).then((result) => {
    console.log("삭제 수: ", result.deletedCount)
    if (result.deletedCount == 0) {
      console.log("일치하는 데이터가 없습니다");
    } else {
      console.log("Correctly removed: ", result.deletedCount);
    }
  }).catch((error) => {
    console.log("Error");
  })


})






