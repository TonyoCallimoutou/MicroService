const sql = require("../config/db.config.js");

const request = require("../config/request.js")


function createAuthor (req,res) {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  };

  const author = {
    name : req.body.name,
  };

  sql.query(request.sqlCreateAuthor(author), (err, result) => {
      if (err) {
        console.log("error: ", err);

        res.status(500).send({error: "Erreur lors de la creation d'un auteur"});
      }
      author.id = res.insertId

      res.send(author);
  });
}

function getAll (req,res) {

  sql.query(request.sqlGetAllAuthors(), (err, result) => {
      if (err) {
        console.log("error: ", err);

        res.status(500).send({error:"Erreur lors de la recuperation des auteurs"});
      }

      res.send(result);
  });
}

function getAuthorById (req,res) {

  id = req.params.id

  sql.query(request.sqlGetAuthorById(id), (err, result) => {
      if (err) {
        console.log("error: ", err);
        res.status(500).send({error:"Erreur lors de la recuperation d'un auteur"});
      }
      res.send(result);
  });
}

function updateName (req,res) {

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  };

  const author = {
    id : req.body.id,
    name : req.body.name,
  };

  sql.query(request.sqlUpdateName(book), (err, result) => {
      if (err) {
        console.log("error: ", err);
        res.status(500).send({error:"Erreur lors de la modification de l'auteur"});
      }
      res.send(true);
  });
}

function deleteAuthor (req,res) {

  id = req.params.id

  sql.query(request.sqlDeleteAuthor(id), (err, result) => {
    if (err) {
      console.log("error: ", err);
      res.status(500).send({error:"Erreur lors de la suppression d'un auteur"});
    }
    res.send(true);
  });
}

module.exports = {
  createAuthor,
  getAll,
  getAuthorById,
  updateName,
  deleteAuthor
}