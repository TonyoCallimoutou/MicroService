const express = require('express');
const bodyParser = require('body-parser');
const controlers = require('./controlers/books.controlers.js');

const app = express();
app.use(bodyParser.json());

app.post('/', async (req,res) => {
  controlers.createBooks(req,res)
});

app.get('/', async (req,res) => {
  controlers.getAll(req,res)
});

app.get('/:id', async (req,res) => {
  controlers.getBookById(req,res)
});

app.put('/update', async (req,res) => {
  controlers.updateTitle(req,res)
});

app.put('/delete-authors/:id', async (req, res) => {
  controlers.deleteAuthors(req,res)
})

app.delete('/:id', async (req,res) => {
  controlers.deleteBooks(req,res)
});

app.listen(3000, () => {
  console.log("MicroService livre sur le port 3000")
})