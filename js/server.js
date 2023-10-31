const inquirer = require('inquirer');
const mysql = require('mysql')


const db = mysql.createConnection(
    {
        host: 'z3iruaadbwo0iyfp.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        // MySQL username,
        user: 'hkjtlht4wjun532d',
        // MySQL password
        password: 'yhek9qj986wk3kn7',
        database: 'rw4bz2y0nt9j6d8j'
    },
    console.log(`Connected to the database.`)
);


const getStarted = [{
    type: 'list',
    message: 'Please make a selection',
    choices: ['View all departments', 'View all roles', 'View all employees', 'Add a Department', 'Add a role', 'Add an employee', 'Update an employee role'],
    name: 'choice',
}]

const addDept = [{
    type: 'input',
    message: 'What is the name of the department?',
    name: 'dept_name',
},
{
    type: 'input',
    message: 'Who is the manager?',
    name: "dept_mgr"
}]

const addRole = [{
    type: 'input',
    message: 'What is the name of the role?',
    name: 'title',
},
{
    type: 'input',
    message: 'What department does it fall under?',
    name: 'dept',
},
{
    type: 'input',
    message: 'What is the salary?',
    name: 'salary',
}]

const addEmployee = [{
    type: 'input',
    message: 'Employee first name:',
    name: 'first_name',
},
{
    type: 'input',
    message: 'Employee last name:',
    name: 'last_name',
},
{
    type: 'input',
    message: 'Employee role:',
    name: 'role',
},
{
    type: 'input',
    message: 'Manager name:',
    name: 'manager',
}]

const updateRole = [{
    type: 'list',
    message: 'Which employee do you want to update?',
    choices: ["Angela Martin", "Oscar Martinez", "Kevin Malone", "Dwight Schrute", "Stanley Hudson", "Jim Halpert", "Darryl Philbin", "Roy Anderson"],
    name: 'employee',
},
{
    type: 'input',
    message: 'What is their new role?',
    name: 'new_update',
}]



let menu = () => {
    inquirer
        .prompt(getStarted)
        .then((response) => {
            console.log(response)
            let query;
            switch (response.choice) {
                case 'View all departments':
                    db.query('SELECT * FROM department', function (err, results) {
                        console.table(results);
                        menu()
                    });
                    break;
                case 'View all roles':
                    db.query('SELECT * FROM role', function (err, results) {
                        console.table(results);
                        menu()
                    });
                    break;
                case 'View all employees':
                    db.query('SELECT emp_id, first_name, last_name, title, dept_name, salary, manager_name FROM employee INNER JOIN role ON employee.role_id=role.id;', function (err, results) {
                        console.table(results);
                        menu()
                    });
                    break;
                case 'Add a Department':
                    inquirer
                        .prompt(addDept)
                        .then((response) => {
                            const params = [response.dept_name, response.dept_mgr]
                            db.query(`INSERT INTO department (dept_name, manager) VALUES (?, ?);`, params, (err, result) => {
                                if (err) {
                                    throw err
                                } else {
                                    console.log("\n Department created \n")
                                }
                                menu()
                            });
                        });
                    break;
                case 'Add a role':
                    inquirer
                        .prompt(addRole)
                        .then((response) => {
                            const params = [response.title, response.dept, response.salary]
                            db.query(`INSERT INTO role (title, dept_name, salary) VALUES(?, ?, ?);`, params, (err, result) => {
                                if (err) {
                                    throw err
                                } else {
                                    console.log("\n New role created \n")
                                }
                                menu()
                            })
                        });
                    break;
                case 'Add an employee':
                    inquirer
                        .prompt(addEmployee)
                        .then((response) => {
                            const params = [response.first_name, response.last_name, response.role, response.manager]
                            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_name) VALUES (?, ?, ?, ?);`, params, (err, result) => {
                                if (err) {
                                    throw err
                                } else {
                                    console.log("\n New employee created \n")
                                }
                                menu()
                            })
                        });
                    break;
                case 'Update an employee role':
                    inquirer
                        .prompt(updateRole)
                        .then((response) => {
                            const params = [response.first_name, response.last_name, response.role, response.manager]
                            db.query(`UPDATE employee WHERE role_id = ?;`, params, (err, result) => {
                                if (err) {
                                    throw err
                                } else {
                                    console.log("\n Role updated created \n")
                                }
                                menu()
                            })
                        });
                    break;
                default:
                    break;
            }
        })
}

menu()