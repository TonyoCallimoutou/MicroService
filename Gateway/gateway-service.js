const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/books/:id', async (req,res) => {
  try {
    const id = parseInt(req.params.id);
    const bookRepsponse = await axios.get(`http://localhost:3000/books/${id}`);
    const book = bookRepsponse.data[0];

    const authorRepsponse = await axios.get(`http://localhost:4000/authors/${book.authorId}`);
    const categoryRepsponse = await axios.get(`http://localhost:5000/categories/${book.categoryId}`);

    const author = authorRepsponse.data;
    const category = categoryRepsponse.data;

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