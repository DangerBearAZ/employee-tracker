const express = require('express');
const mysql = require('mysql2');
const routes = require('./routes')
const db = require('./db/connections');
const PORT =  3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



//test it wroks 
app.get('/', (req,res) => {
    res.json ({
        message: 'sup yo'
    });
});

//resonse if not found
app.use((req, res) => {
    res.status(404).end();
  });
  
// Start server // leave at bottom 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

