var template = {
  HTML: function (title, list, body, control) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>WEB1 - ${title} </title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        ${list}
        ${control}
        ${body}
      </body>
    </html>
    `;
  },
  list: function (fileList) {
    var list = "<ul>";
    for (var i = 0; i < fileList.length; i++) {
      //fileList에 담긴 데이터들이 배열안에 객체 형태로 들어가있으므로, 프로퍼티 사용 
      list += `<li><a href="/?id=${fileList[i].id}">${fileList[i].title}</a></li>`;
    }
    list += "</ul>";
    return list;
  }
}

module.exports = template;