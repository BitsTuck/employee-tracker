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

inquirer
    .prompt(getStarted)
    .then((response) => {
        console.log(response)
        let query;
        switch (response.choice) {
            case 'View all departments':
                db.query(`SELECT department_name FROM employees`);
                break;
            case 'View all roles':
                db.query(`SELECT title FROM employees`);
                break;
            case 'View all employees':
                db.query(`SELECT first_name last_name FROM employees`);
            case 'Add a Department':
                db.query(`INSERT department_name`);
            case 'Add a role':
                db.query(`INSERT title`)
                break;
            case 'Add an employee':
                db.query(`INSERT first_name last_name title salary department_name manager`);
                break;
            case 'Update an employee role':
                db.query(`INSERT ?  WHERE id = ?`);
                break;
            default:
                break;
        }
    })