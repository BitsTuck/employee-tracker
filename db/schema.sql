
-- Active: 1698700088044@@127.0.0.1@3306
USE rw4bz2y0nt9j6d8j;
DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS department;

CREATE TABLE department (
    id INT AUTO_INCREMENT, 
    dept_name VARCHAR(30) NOT NULL,
    manager VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO department (dept_name, manager)
VALUES ("Accounting", "Angela Martin"),
("Sales", "Dwight Schrute"), 
("Shipping", "Darryl Philbin");

CREATE TABLE role (
    id INT AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    dept_name VARCHAR(30) NOT NULL, 
    PRIMARY KEY (id)
);
INSERT INTO role (title, salary, dept_name)
VALUES ("Head of Accounting", 90000, "Accounting"),
("Accountant", 85000, "Accounting"),
("Sales Manager", 75000, "Sales"),
("Salesperson", 72000, "Sales"),
("Foreperson", 75000, "Shipping"),
("Shipping Technician", 70000, "Shipping");


CREATE TABLE employee (
    emp_id INT AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT UNSIGNED NOT NULL,
    manager VARCHAR (30),
    PRIMARY KEY(emp_id)
    );

INSERT INTO employee (first_name, last_name, role_id, manager)
VALUES ("Angela", "Martin", 1, "N/A"),
("Oscar", "Martinez", 2, "Angela Martin"),
("Kevin", "Malone", 2, "Angela Martin"),
("Dwight", "Schrute", 3, "N/A"),
("Stanley","Hudson", 4, "Dwight Schrute"),
("Jim","Halpert", 4, "Dwight Schrute"),
("Darryl", "Philbin", 5, "N/A"),
("Roy", "Anderson", 6, "Darryl Philbin");


