const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let categories = [
  {id: 1, name: "catégorie 1"},
  {id: 2, name: "catégorie 2"},
  {id: 3, name: "catégorie 3"},
  {id: 4, name: "catégorie 4"},
  {id: 5, name: "catégorie 5"},
];

app.get('/categories', async (req,res) => {
  res.json(categories)
});

app.get('/categories/:id', async (req,res) => {
  const id = parseInt(req.params.id);
  const category = categories.find(category => category.id === id);
  
  if (category) {
    res.json(category);
  }
  else {
    res.status(404).json({error: "Livre non trouvé"});
  }
});

app.listen(5000, () => {
  console.log("MicroService catégorie sur le port 5000")
})