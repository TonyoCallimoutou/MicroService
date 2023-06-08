const express = require('express');
const bodyParser = require('body-parser');
const controlers = require('./controlers/authors.controlers.js');

const app = express();
app.use(bodyParser.json());

app.post('/authors', async (req,res) => {
  controlers.createAuthor(req,res)
});

app.get('/authors', async (req,res) => {
controlers.getAll(req,res)
});

app.get('/authors/:id', async (req,res) => {
  controlers.getAuthorById(req,res)
});

app.put('/authors/update', async (req,res) => {
  controlers.updateName(req,res)
});

app.delete('/authors/:id', async (req,res) => {
  controlers.deleteAuthor(req,res)
});

app.listen(4000, () => {
  console.log("MicroService auteurs sur le port 4000")
})