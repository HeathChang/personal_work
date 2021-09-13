require('../src/db/mongoose')
const Task = require('../src/models/task')

//613c5e57731b366474dccdba
Task.findByIdandDelete('613c5e57731b366474dccdba').then((task) => {
  console.log(task);
  return Task.countDocuments({ complete: false }) //age가 x인 애들 찾아줘
}).then((result) => {
  console.log("확인: ", result);
}).catch((e) => {
  console.log(e);
})
