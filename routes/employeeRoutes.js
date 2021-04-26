const express = require('express');
const router = express.Router();
const db = require('../db/connections')


// Get all  employee
router.get('/api/employees', (req, res) => {
    const sql = `SELECT employee.*, roles.title
    FROM employee
    LEFT JOIN roles ON employee.role_id = roles.id;
    `;
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

// Create employee
router.post('/api/employee', ({body}, res) => {
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
    const params = [
        body.first_name,
        body.last_name,
        body.role_id,
        body.manager_id
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

// exports stays a the bottom 
module.exports = router;

