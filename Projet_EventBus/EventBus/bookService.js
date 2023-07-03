// bookService.js
import { books } from "./book.js";
import EventBus from "./eventBus.js";

EventBus.subscribe('deleteAuthor', (authorId) => {
  books.forEach((book) => {
    if (book.authorId === authorId) {
      book.authorId = null;
    }
  })
})

export const bookService = {
  getAllBooks: () => {
    return books;
  },

  getBookById: (id) => {
    return books.find((book) => book.id === id);
  },

  createBook: (title, authorId, categoryId) => {
    const newBook = {
      id: books.length + 1,
      title,
      authorId,
      categoryId
    };
    books.push(newBook);
    return newBook;
  },

  updateBook: (id, title, authorId, categoryId) => {
    const book = books.find((book) => book.id === id);
    if (book) {
      book.title = title;
      book.authorId = authorId;
      book.categoryId = categoryId;
      return book;
    }
    return null;
  },

  deleteAuthor: (authorId) => {
    books.forEach((book) => {
      if (book.authorId === authorId) {
        book.authorId = null;
      }
    });
    return true;
  },

  deleteBook: (id) => {
    const index = books.findIndex((book) => book.id === id);
    console.log(index)
    if (index !== -1) {
      books.splice(index, 1);
      return true;
    }
    return false;
  }
};
