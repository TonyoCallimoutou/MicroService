const express = require('express');
const bodyParser = require('body-parser');
const controlers = require('./controlers/categories.controlers.js');

const app = express();
app.use(bodyParser.json());

app.post('/categories', async (req,res) => {
  controlers.createCategories(req,res)
});

app.get('/categories', async (req,res) => {
controlers.getAll(req,res)
});

app.get('/categories/:id', async (req,res) => {
  controlers.getCategoryById(req,res)
});

app.put('/categories/update', async (req,res) => {
  controlers.updateName(req,res)
});

app.delete('/categories/:id', async (req,res) => {
  controlers.deleteCategory(req,res)
});

app.listen(5000, () => {
  console.log("MicroService catégorie sur le port 5000")
})