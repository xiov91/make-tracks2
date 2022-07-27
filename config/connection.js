const mysql = require('mysql2');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'ebonHawk3!',
    database: 'employees'
  },
  console.log("Connected to Database!")
  );

  module.exports = db;