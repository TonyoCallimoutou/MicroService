const express = require('express');
const bodyParser = require('body-parser');
const controlers = require('./controlers/categories.controlers.js');

const app = express();
app.use(bodyParser.json());

app.post('/', async (req,res) => {
  controlers.createCategories(req,res)
});

app.get('/', async (req,res) => {
controlers.getAll(req,res)
});

app.get('/:id', async (req,res) => {
  controlers.getCategoryById(req,res)
});

app.put('/update', async (req,res) => {
  controlers.updateName(req,res)
});

app.delete('/:id', async (req,res) => {
  controlers.deleteCategory(req,res)
});

app.listen(5000, () => {
  console.log("MicroService catégorie sur le port 5000")
})