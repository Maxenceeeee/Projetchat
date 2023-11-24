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

const postInscription = function (req, res) {
  var nom = req.body.nom;
  var prenom = req.body.prenom;
  var pseudo = req.body.pseudo;
  var mail = req.body.mail;
  var mdp = req.body.mdp;

  if (!nom || !prenom || !pseudo || !mail || !mdp) {
    res.status(400).redirect('/');
    return;
  }

  var values = [nom, prenom, pseudo, mdp, mail];
  
  con.query("INSERT INTO utilisateur (nom, prenom, pseudo, motDePasse, adresseMail) VALUES (?, ?, ?, ?, ?)", values, function (err, result) {
    if (err) throw err;
    console.log(result);
  });

  res.redirect('/index.html');
};

module.exports = { 
  postInscription 
};