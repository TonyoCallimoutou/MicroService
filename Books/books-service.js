const express = require('express');
const bodyParser = require('body-parser');
const controlers = require('./controlers/books.controlers.js');

const app = express();
app.use(bodyParser.json());

app.post('/books', async (req,res) => {
  controlers.createBooks(req,res)
});

app.get('/books', async (req,res) => {
controlers.getAll(req,res)
});

app.get('/books/:id', async (req,res) => {
  controlers.getBookById(req,res)
});

app.put('/books/update', async (req,res) => {
  controlers.updateTitle(req,res)
});

app.delete('/books/:id', async (req,res) => {
  controlers.deleteBooks(req,res)
});

app.listen(3000, () => {
  console.log("MicroService livre sur le port 3000")
})