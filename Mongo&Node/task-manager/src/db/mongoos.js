///
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true
})


const User = mongoose.model('User', {
  name: {
    type: String
  },
  age: {
    type: Number
  }
})

const me = new User({
  name: "Heath",
  age: "Hello World"
  //_message: 'User validation failed';
})



me.save().then(() => {
  console.log("Saved: ", me);
}).catch((error) => {
  console.log("Error: ", error);
})