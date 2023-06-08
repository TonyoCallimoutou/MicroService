class Request {
  static sqlCreateCategory(data) {
      return `INSERT INTO Categories (name)
              Values ("${data.name}")`
  }

  static sqlGetAllCategories() {
      return `SELECT *
              FROM Categories`
  }

  static sqlGetCategoryById(id) {
      return `SELECT *
              FROM Categories
              WHERE id = ${id}`
  }

  static sqlUpdateName(data) {
      return `UPDATE Categories
              SET name = "${data.name}"
              WHERE id = ${data.id}`
  }

  static sqlDeleteCategory(id) {
      return `DELETE
              FROM Categories
              WHERE id = ${id}`
  }
}

module.exports = Request;