const express = require ('express');
const inquirer = require ('inquirer');

const app = express ()

const getStarted = [{
    type: 'list',
    message: 'Please make a selection',
    choices: ['View all departments', 'View all roles', 'View all employees', 'Add a Department', 'Add a role', 'Add an employee', 'Update an employee role'],
  }]
//   {
//     type: 'input',
//     message: 'Please enter a text color:',
//     name: 'textColor',
//   },
//   {
//     type: 'list',
//     message: 'Please choose a logo shape:',
//     name: 'shape',
//     choices: ['Circle', 'Square', 'Triangle']
//   },
//   {
//     type: 'input',
//     message: 'Please enter a shape color:',
//     name: 'shapeColor',
//   }];
  
  
  inquirer
    .prompt(getStarted)
    .then((response) => {
      console.log(response)
    let logoShape;
          switch (response.shape) {
          case 'Circle': 
            logoShape = (new Circle(response.initials, response.textColor, response.shapeColor));
            break;
          case 'Square':
            logoShape = (new Square(response.initials, response.textColor, response.shapeColor));
            break;
          case 'Triangle':
            logoShape = (new Triangle(response.initials, response.textColor, response.shapeColor));
            break;
          default:
            break;
        }
    })