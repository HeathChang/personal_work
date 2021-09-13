//Promise Chaining
const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b)
    }, 100)
  })
}

// add(1, 2).then((sum) => {
//   console.log("sum>>", sum)
// }).catch((error) => {
//   console.log(error);
// })

add(1, 2)
  .then((sum) => {
    console.log("sum>>", sum) //3
    return add(sum, sum) //3+3 return
  })
  .then((sum2) => {
    console.log("sum2>>", sum2)
  })
  .catch((error) => {
    console.log(error);
  })
