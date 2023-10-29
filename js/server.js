const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql')

const app = express()


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
}]

const addDept = [{
    type: 'input',
    message: 'What is the name of the department?',
    name: 'name',
}]

const addRole = [{
    type: 'input',
    message: 'What is the name of the role?',
    name: 'name',
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



inquirer
    .prompt(getStarted)
    .then((response) => {
        console.log(response)
        let query;
        switch (response.choice) {
            case 'View all departments':
                db.query('SELECT * FROM department', function (err, results) {
                    console.log(results);
                });
                break;
            case 'View all roles':
                db.query('SELECT * FROM role', function (err, results) {
                    console.log(results);
                });
                break;
            case 'View all employees':
                db.query('SELECT * FROM employee', function (err, results) {
                    console.log(results);
                });
                break;
            case 'Add a Department':
                inquirer
                .prompt(addDept)
                .then((response) => {
                db.query(`INSERT ${addDept.name}`);});
                break;
            case 'Add a role':
                inquirer
                .prompt(addRole)
                .then((response) => {
                db.query(`INSERT ${addRole.name} ${addRole.dept} ${addRole.salary}`)});
                break;
            case 'Add an employee':
                inquirer
                .prompt(addEmployee)
                .then((response) =>{
                db.query(`INSERT ${addEmployee.first_name} ${addEmployee.last_name} ${addEmployee.role}${addEmployee.manager}`)});
                break;
            case 'Update an employee role':
                inquirer
                .prompt(updateRole)
                .then((response) => {
                db.query(`INSERT ${updateEmployee.new_update} WHERE title = ?`)});
                break;
            default:
                break;
        }
    })