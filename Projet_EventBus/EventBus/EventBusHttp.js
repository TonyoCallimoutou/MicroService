import express from "express";
import { authorService } from "./authorService.js";
import { bookService } from "./bookService.js";
import { categoryService } from "./categoryService.js";
import axios from "axios";

const app = express();
const port = 4000;

app.use(express.json());


app.delete("/authors/:id", async (req, res) => {

  try {
    const authorId = parseInt(req.params.id);
    const resultAuthor = authorService.deleteAuthor(authorId);
  
    const resultBook = await axios.put(`http://localhost:5000/books-update-author/${authorId}`)
    res.send(resultBook)
  }
  catch (error) {
    res.status(500).json({error: error})
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
