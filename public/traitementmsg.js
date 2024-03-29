const mysql = require('mysql');
var app = require('express')();
var http = require('http').Server(app);
var session = require('express-session');

app.use(session({ secret: 'super secret' }));

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "chat"
});
connection.connect(function (err) {
  if (err) {
    console.error('Impossible de se connecter ', err);
  }
});

connection.connect(function (err) {
  console.log("Connecté à la base de données MySQL!");
});




const postIndex = function (req, res) {
  var messages = req.body.messages;
  var utilisateurId = req.session.user_id = result[0].id;

  if (!messages || !utilisateurId) {
    res.status(400).redirect('/');
    return;
  }

  var values = [messages, utilisateurId];

  connection.query("INSERT INTO conversation (messages,utilisateurId ) VALUES (?, ?)", values, function (err, result) {
    if (err) throw err;

    connection.query(query, (err, results) => {
      if (err) throw err;
      console.log(`Message saved: ${results.insertId}`);

      io.emit('messages', msg);

      if (callback) {
        callback();
      }
    })
  });

}

module.exports = {
  postIndex
};



