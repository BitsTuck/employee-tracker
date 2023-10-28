CREATE TABLE employees (
id INT AUTO_INCREMENT NOT NULL,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
title VARCHAR(30) NOT NULL,
salary INT NOT NULL,
department_name VARCHAR(20) NOT NULL,
manager VARCHAR(60),
PRIMARY KEY (id)
);

INSERT INTO employees (first_name, last_name, title, salary, department_name, manager)
VALUES ("Angela", "Martin", "Head of Accounting", 90000, "Accounting", "N/A"),
("Oscar", "Martinez", "Accountant", 85000, "Accounting", "Angela Martin"),
("Kevin", "Malone", "Accountant", 85000, "Accounting", "Angela Martin"),
("Dwight", "Schrute", "Head of Sales", 75000, "Sales", "N/A"),
("Stanley","Hudson", "Senior Salesperson", 72000, "Sales", "Dwight Schrute"),
("Jim","Halpert", "Salesperson", 70000, "Sales", "Dwight Schrute"),
("Darryl", "Philbin", "Foreperson", 75000, "Shipping", "N/A"),
("Roy", "Anderson", "Shipping Technician", 70000, "Shipping", "Darryl Philbin");

CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL, 
    dept_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
)

INSERT INTO department (dept_name)
VALUES ("Accounting", "Sales", "Shipping")

CREATE TABLE role (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    PRIMARY KEY (id)
)

INSERT INTO role (title, salary)
VALUES ("Head of Accounting", 90000.00)
("Accountant", 85000.00)
("Sales Manager", 75000.00)
("Salesperson", 72000.00)
("Foreperson", 75000.00)
("Shipping Technician", 70000.00)


CREATE TABLE employee (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    FOREIGN KEY (role_id)
    REFERENCES role(id)

)

INSERT INTO employee (first_name, last_name)