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
  },

  authorSelect: function (authors, author_id) {
    var tag = '';
    for (var i = 0; i < authors.length; i++) {
      var selected = '';
      if (authors[i].id == author_id) {
        selected = ' selected';
      }
      tag += `<option value ="${authors[i].id}" ${selected}>${authors[i].name}</option>`;
    }
    return `
      <select name = "author">
      ${tag}
      </select>
    `
  }
}

module.exports = template;