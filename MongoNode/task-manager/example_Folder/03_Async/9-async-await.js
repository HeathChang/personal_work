////normal: 에러발생
// const doWork2 = () => {
//   return 'Heath'
// }

// doWork2().then((result) => {
//   console.log("result 값:", result);
// }).catch((e) => {
//   console.log("Error: ", e);
// })

///////////////////////////
const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject("Number must be non-negative")
      }
      resolve(a + b)
    }, 100)
  })
}

//async & await
const doWork = async () => {
  //throw new Error("sth went wrong")
  const sum = await add(1, 99) //await 사용시, then 사용안하고 바로 결과값 도출
  const sum2 = await add(sum, 100)
  const sum3 = await add(sum2, 100)
  return sum3
}

doWork().then((result) => {
  console.log("result 값:", result);

}).catch((e) => {
  console.log("Error 발생: ", e);
})