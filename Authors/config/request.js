class Request {
  static sqlCreateAuthor(data) {
      return `INSERT INTO Authors (name)
              Values ("${data.name}")`
  }

  static sqlGetAllAuthors() {
      return `SELECT *
              FROM Authors`
  }

  static sqlGetAuthorById(id) {
      return `SELECT *
              FROM Authors
              WHERE id = ${id}`
  }

  static sqlUpdateName(data) {
      return `UPDATE Authors
              SET name = "${data.name}"
              WHERE id = ${data.id}`
  }

  static sqlDeleteAuthor(id) {
      return `DELETE
              FROM Authors
              WHERE id = ${id}`
  }
}

module.exports = Request;