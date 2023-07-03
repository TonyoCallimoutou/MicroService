const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const controlers = require('./controlers/authors.controlers.js');

const app = express();
app.use(bodyParser.json());

app.post('/', async (req,res) => {
  controlers.createAuthor(req,res)
});

app.get('/', async (req,res) => {
controlers.getAll(req,res)
});

app.get('/:id', async (req,res) => {
  controlers.getAuthorById(req,res)
});

app.put('/update', async (req,res) => {
  controlers.updateName(req,res)
});

app.delete("/:id", async (req, res) => {

  try {
    const authorId = parseInt(req.params.id);
    controlers.deleteAuthor(req,res);
  
    const resultBook = await axios.delete(`http://gateway:2000/authors/${authorId}`)
    
    res.send(resultBook.data)
  }
  catch (error) {
    res.status(500).json({error: error})
  }
});

app.listen(4000, () => {
  console.log("MicroService auteurs sur le port 4000")
})