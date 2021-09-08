const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve → reject 순으로
    resolve([7, 4, 1])
    reject("Error")
  }, 2000)
})

//.then(): success일떄,
doWorkPromise
  .then((result) => {
    console.log("success", result);
  })
  //.catch는 에러일떄
  .catch((error) => {
    console.log("Fail:", error);
  })