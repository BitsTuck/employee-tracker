USE rw4bz2y0nt9j6d8j;
DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS department;

CREATE TABLE department (
    id INT NOT NULL, 
    dept_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO department (dept_name, id)
VALUES ("Accounting", 1),
("Sales", 2), 
("Shipping", 3);

CREATE TABLE role (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id),
    PRIMARY KEY (id)
);
INSERT INTO role (title, salary)
VALUES ("Head of Accounting", 90000.00),
("Accountant", 85000.00),
("Sales Manager", 75000.00),
("Salesperson", 72000.00),
("Foreperson", 75000.00),
("Shipping Technician", 70000.00);


CREATE TABLE employee (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT references employee(id),
    FOREIGN KEY (role_id) REFERENCES role(id),
    PRIMARY KEY(id)

);

INSERT INTO employee (first_name, last_name)
VALUES ("Angela", "Martin"),
("Oscar", "Martinez"),
("Kevin", "Malone"),
("Dwight", "Schrute"),
("Stanley","Hudson"),
("Jim","Halpert"),
("Darryl", "Philbin"),
("Roy", "Anderson");