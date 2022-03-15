const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

const db = mysql.createConnection(
    {
      user: 'root',
      password: 'newpassword',
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
);

const askInitial = () => {
    return inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add Department',
        'Add Role', 'Add Employee', 'Update Employee Role', 'Quit'],
            name: "whichQuestion"
        }
    ])
}