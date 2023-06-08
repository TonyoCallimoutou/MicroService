const sql = require("../config/db.config.js");

const request = require("../config/request.js")


function createCategories (req,res) {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  };

  const category = {
    name : req.body.name,
  };

  sql.query(request.sqlCreateCategory(category), (err, result) => {
      if (err) {
        console.log("error: ", err);

        res.status(500).send({error: "Erreur lors de la creation d'une catégorie"});
      }
      category.id = res.insertId

      res.send(category);
  });
}

function getAll (req,res) {

  sql.query(request.sqlGetAllCategories(), (err, result) => {
      if (err) {
        console.log("error: ", err);

        res.status(500).send({error:"Erreur lors de la recuperation des catégories"});
      }

      res.send(result);
  });
}

function getCategoryById (req,res) {

  id = req.params.id

  sql.query(request.sqlGetCategoryById(id), (err, result) => {
      if (err) {
        console.log("error: ", err);
        res.status(500).send({error:"Erreur lors de la recuperation du livre"});
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

  const category = {
    id : req.body.id,
    name : req.body.title,
  };

  sql.query(request.sqlUpdateName(category), (err, result) => {
      if (err) {
        console.log("error: ", err);
        res.status(500).send({error:"Erreur lors de la modification d'une catégorie"});
      }
      res.send(true);
  });
}

function deleteCategory (req,res) {

  id = req.params.id

  sql.query(request.sqlDeleteCategory(id), (err, result) => {
    if (err) {
      console.log("error: ", err);
      res.status(500).send({error:"Erreur lors de la suppression d'une catégorie"});
    }
    res.send(true);
  });
}

module.exports = {
  createCategories,
  getAll,
  getCategoryById,
  updateName,
  deleteCategory
}