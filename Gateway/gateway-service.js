const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/books/:id', async (req,res) => {
  try {
    const id = parseInt(req.params.id);
    const bookRepsponse = await axios.get(`http://books:3000/books/${id}`);
    const book = bookRepsponse.data[0];

    const authorRepsponse = await axios.get(`http://authors:4000/authors/${book.authorId}`);
    const author = authorRepsponse.data[0];

    const categoryRepsponse = await axios.get(`http://categories:5000/categories/${book.categoryId}`);
    const category = categoryRepsponse.data[0];

    const bookDetails = {
      id: book.id,
      title: book.title,
      author: author.name,
      category: category.name
    }

    res.json(bookDetails);
  }
  catch (error) {
    res.status(500).json({error: "Erreur lors de la récuperation des details du livre"})
  }
});

app.listen(2000, () => {
  console.log("MicroService livre sur le port 2000")
})