
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "chat"
});
connection.connect(function(err){
    if(err){
        console.error('Impossible de se connecter ', err);
    }
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connecté à la base de données MySQL!");
});




const postIndex = function (req, res) {
  var messages = req.body.messages;
  var utilisateurId = req.body.utilisateurId;

  if (!messages || !utilisateurId ) {
    res.status(400).redirect('/');
    return;
  }

  var values = [messages, utilisateurId];

 const query = `INSERT INTO conversation (messages,utilisateurId ) VALUES ('${messages}' . '${utilisateurId}' )`;
connection.query(query, (err, results) => {
      if (err) throw err;
      console.log(`Message saved: ${results.insertId}`);

      io.emit('messages', msg);

      if (callback) {
        callback();
      }
    });

}



