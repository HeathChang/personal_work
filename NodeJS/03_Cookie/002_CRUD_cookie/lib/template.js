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
        <a href ="/login">Login</a> 
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
      list += `<li><a href="/?id=${fileList[i]}">${fileList[i]}</a></li>`;
    }
    list += "</ul>";
    return list;
  }
}

module.exports = template;