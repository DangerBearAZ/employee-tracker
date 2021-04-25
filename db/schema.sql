-- db employee_tracker
-- DROP DATABASE employee *Delte entire datbase
-- source db/db.sql  *recreate DB and employee table 
-- source db/schema.sql *runs this doc in mysql 

DROP TABLE IF EXISTS employee;

CREATE TABLE employee ( 
id INTEGER AUTO_INCREMENT PRIMARY KEY, 
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INTEGER NOT NULL,
manager_id INTEGER NOT NULL
);