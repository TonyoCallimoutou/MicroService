const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let books = [
  {id: 1, title: "books 1", authorId: 1, categoryId: 1},
  {id: 2, title: "books 2", authorId: 2, categoryId: 2},
  {id: 3, title: "books 3", authorId: 3, categoryId: 3},
  {id: 4, title: "books 4", authorId: 4, categoryId: 4},
  {id: 5, title: "books 5", authorId: 5, categoryId: 5},
];

app.get('/books', async (req,res) => {
  res.json(books)
});

app.get('/books/:id', async (req,res) => {
  const id = parseInt(req.params.id);
  const book = books.find(book => book.id === id);

  if (book) {
    res.json(book);
  }
  else {
    res.status(404).json({error: "Livre non trouvé"});
  }
});

app.listen(3000, () => {
  console.log("MicroService livre sur le port 3000")
})