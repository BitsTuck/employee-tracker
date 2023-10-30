-- Active: 1698700088044@@127.0.0.1@3306
USE rw4bz2y0nt9j6d8j;
DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS department;

CREATE TABLE department (
    id INT AUTO_INCREMENT, 
    dept_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO department (dept_name)
VALUES ("Accounting"),
("Sales"), 
("Shipping");

CREATE TABLE role (
    id INT AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT UNSIGNED NOT NULL,
    PRIMARY KEY (id)
);
INSERT INTO role (title, salary, department_id)
VALUES ("Head of Accounting", 90000, 1),
("Accountant", 85000, 1),
("Sales Manager", 75000, 2),
("Salesperson", 72000, 2),
("Foreperson", 75000, 3),
("Shipping Technician", 70000, 3);


CREATE TABLE employee (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT UNSIGNED NOT NULL,
    manager_id INT,
    PRIMARY KEY(id)

);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Angela", "Martin", 1, 1),
("Oscar", "Martinez", 2, 1),
("Kevin", "Malone", 2, 1),
("Dwight", "Schrute", 2, 2),
("Stanley","Hudson", 2, 2),
("Jim","Halpert", 2, 2),
("Darryl", "Philbin", 3, 3),
("Roy", "Anderson", 4, 4);