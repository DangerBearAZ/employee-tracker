const express = require('express');
// const mysql = require('mysql2');
const routes = require('./routes')
const db = require('./db/connections');
const inquirer = require('inquirer');
/// console tabel not in use 
const cTable = require('console.table');


const app = express();
const PORT =  3001;

const inquir
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes)


//resonse if not found
app.use((req, res) => {
    res.status(404).end();
  });
  
// Start server // leave at bottom 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

