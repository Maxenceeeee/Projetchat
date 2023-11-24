const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "chat"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connecté à la base de données MySQL!");
});

const postConnection = function (req, res) {
  var pseudo = req.body.pseudo;
  var mail = req.body.mail;
  var mdp = req.body.mdp;

  con.query('SELECT * FROM utilisateur WHERE pseudo = ? AND adresseMail = ? AND motDePasse = ?', [pseudo, mail, mdp], function (err, result) {
    if (err) throw err;

    if (result.length > 0) {
      res.redirect('/index.html');
    } else {
      res.redirect('/connection.html');
    }
  });
}

module.exports = { postConnection };