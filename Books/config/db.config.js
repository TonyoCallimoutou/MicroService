const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

async function query(sql, params) {
  try {
      return await connection.execute(sql, params);
  } catch (err) {
      console.error(`Error db.js `, err.message);
      console.error(`db.js :`, sql + " + " + params);
  }
}

module.exports = {
  query
}