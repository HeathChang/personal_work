///
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true
})


const Task = mongoose.model('Task', {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
})

const task = new Task({
  description: 'Learn the Mongoose Library',
  completed: false
})



task.save().then(() => {
  console.log("Saved: ", task);
}).catch((error) => {
  console.log("Error: ", error);
})