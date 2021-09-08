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

  //Read: 대소문자 구분
  //Object_id는 찾을수 없음 →new ObjectID("613843414cc5f916e402f29b" 이런식으로 찾아야함. 
  db.collection("users").findOne({ _id: new ObjectID("613843414cc5f916e402f29b") }, (error, user) => {
    if (error) {
      return console.log('Unable to Find!')
    }
    console.log("Here is the result: ", user);
  })

  //find 사용 시, return 값은 cursor로 DB의 포인터 역할을 한다.
  db.collection("users").find({ Age: 27 }).toArray((error, user) => {
    if (error) {
      return console.log('Unable to Find!')
    }
    console.log("Here is the result: ", user)
  })
  db.collection("users").find({ Age: 27 }).count((error, user) => {
    if (error) {
      return console.log('Unable to Find!')
    }
    console.log("Here is the result: ", user)
  })

})





