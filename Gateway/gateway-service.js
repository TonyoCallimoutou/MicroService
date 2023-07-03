const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/books/:id', async (req,res) => {
  try {
    const id = parseInt(req.params.id);
    const bookRepsponse = await axios.get(`http://books:3000/${id}`);
    const book = bookRepsponse.data[0];

    const authorRepsponse = await axios.get(`http://authors:4000/${book.authorId}`);
    const author = authorRepsponse.data[0];

    const categoryRepsponse = await axios.get(`http://categories:5000/${book.categoryId}`);
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

app.delete('/authors/:id', async (req,res) => {
  try {
    const id = parseInt(req.params.id);

    const authorRepsponse = await axios.delete(`http://authors:4000/${id}`);
    const bookRepsponse = await axios.put(`http://books:3000/delete-authors/${id}`);

    res.send(authorRepsponse.data && bookRepsponse.data);
  }
  catch (error) {
    res.status(500).json({error: "Erreur lors de la suppression de l'autheur"})
  }
});

app.listen(2000, () => {
  console.log("MicroService livre sur le port 2000")
})