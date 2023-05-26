const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let authors = [
  {id: 1, name: "auteur 1"},
  {id: 2, name: "auteur 2"},
  {id: 3, name: "auteur 3"},
  {id: 4, name: "auteur 4"},
  {id: 5, name: "auteur 5"},
];

app.get('/authors', async (req,res) => {
  res.json(authors)
});

app.get('/authors/:id', async (req,res) => {
  const id = parseInt(req.params.id);
  const author = authors.find(author => author.id === id);

  if (author) {
    res.json(author);
  }
  else {
    res.status(404).json({error: "Livre non trouvé"});
  }
});

app.listen(4000, () => {
  console.log("MicroService auteurs sur le port 4000")
})