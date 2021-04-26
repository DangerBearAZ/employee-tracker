const express = require('express');
const router = express.Router();
const db = require('../db/connections')


// Create role
router.post('/api/role', ({body}, res) => {
    const sql = `INSERT INTO roles (title, salary) VALUES (?,?)`;
    const params = [
        body.title,
        body.salary
      ];

      db.query(sql, params, (err, result) => {
        if (err) {
          res.status(400).json({ error: err.message });
          return;
        }
        res.json({
          message: 'success',
          data: body,
          changes: result.affectedRows
        });
      });

      
}) 

// View a role 


// exports stays a the bottom 
module.exports = router;
