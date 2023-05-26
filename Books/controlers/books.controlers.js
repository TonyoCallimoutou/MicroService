const sql = require("../config/db.config.js");

const request = require("../config/request.js")


function createBooks (req,res) {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  };

  const book = {
    title : req.body.title,
    authorId : req.body.authorId,
    categoryId: req.body.categoryId,
  };

  sql.query(request.sqlCreateBook(book), (err, result) => {
      if (err) {
        console.log("error: ", err);

        res.status(500).send({error: "Erreur lors de la creation d'un livre"});
      }
      book.id = res.insertId

      res.send(book);
  });
}

function getAll (req,res) {

  sql.query(request.sqlGetAllBooks(), (err, result) => {
      if (err) {
        console.log("error: ", err);

        res.status(500).send({error:"Erreur lors de la recuperation des livres"});
      }

      res.send(result);
  });
}

function getBookById (req,res) {

  id = req.params.id

  sql.query(request.sqlGetBookById(id), (err, result) => {
      if (err) {
        console.log("error: ", err);
        res.status(500).send({error:"Erreur lors de la recuperation du livre"});
      }
      res.send(result);
  });
}

function updateTitle (req,res) {

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  };

  const book = {
    id : req.body.id,
    title : req.body.title,
  };

  sql.query(request.sqlUpdateTitle(book), (err, result) => {
      if (err) {
        console.log("error: ", err);
        res.status(500).send({error:"Erreur lors de la modification du livre"});
      }
      res.send(true);
  });
}

function deleteBooks (req,res) {

  id = req.params.id

  sql.query(request.sqlDeleteBook(id), (err, result) => {
    if (err) {
      console.log("error: ", err);
      res.status(500).send({error:"Erreur lors de la suppression du livre"});
    }
    res.send(true);
  });
}

module.exports = {
  createBooks,
  getAll,
  getBookById,
  updateTitle,
  deleteBooks
}