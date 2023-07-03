class Request {
  static sqlCreateBook(data) {
      return `INSERT INTO Books (title, authorId, categoryId)
              Values ("${data.title}", ${data.authorId}, ${data.categoryId})`
  }

  static sqlGetAllBooks() {
      return `SELECT *
              FROM Books`
  }

  static sqlGetBookById(id) {
      return `SELECT *
              FROM Books
              WHERE id = ${id}`
  }

  static sqlUpdateTitle(data) {
      return `UPDATE Books
              SET title = "${data.title}"
              WHERE id = ${data.id}`
  }

  static sqlDeleteAuthors(id) {
    return `UPDATE Books
            SET authorId = null
            WHERE authorId = ${id}`
}

  static sqlDeleteBook(id) {
      return `DELETE
              FROM Books
              WHERE id = ${id}`
  }
}

module.exports = Request;