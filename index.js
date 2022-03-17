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
        },
    ]).then(({ whichQuestion }) => {
        whichFunctionNext(whichQuestion);
    });
}

const whichFunctionNext = (previousAnswer) => {
    if (previousAnswer == 'View All Departments') {
        viewAllDepartments().then(askInitial);
    } else if (previousAnswer == 'View All Roles') {
        viewAllRoles().then(askInitial);
    } else if (previousAnswer == 'View All Employees') {
        viewAllEmployees().then(askInitial);
    } else if (previousAnswer == 'Add Department') {
        addDepartment().then(askInitial);
    } else if (previousAnswer == 'Add Role') {
        addRole().then(askInitial);
    } else if (previousAnswer == 'Add Employee') {
        addEmployee().then(askInitial);
    } else if (previousAnswer == 'Update Employee Role') {
        updateEmployeeRole().then(askInitial);
    } else {
        console.log("Goodbye")
        return;
    }
}

const viewAllDepartments = () => {

}

const viewAllRoles = () => {

}

const viewAllEmployees = () => {

}

const addDepartment = () => {

}

const addRole = () => {

}

const addEmployee = () => {

}

const updateEmployeeRole = () => {

}

askInitial()