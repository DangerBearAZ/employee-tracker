const express = require('express');
const router = express.Router();
const db = require('../db/connections')

// Get all  employee
router.get('/api/employees', (req, res) => {
    const sql = `SELECT * FROM employee`;
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
})

// exports stays a the bottom 
module.exports = router;

