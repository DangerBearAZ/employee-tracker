
const mysql = require('mysql2');

// connects to database 
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Root',
      database: 'employee_tracker'
    },
    console.log('Connected to the employee database.')
  );

  module.exports = db;