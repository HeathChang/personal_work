var testFolder = './data';
var fs = require('fs');

fs.readdir(testFolder, function (err,fileList) {
  console.log(fileList);
  //배열의 형태로 출력
})