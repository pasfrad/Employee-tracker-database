const mysql = require('mysql2');
const inquirer = require('inquirer');
// const cTable = require('console.table');

const db = mysql.createConnection(
    {
        user: 'root',
        password: '1234',
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
        whichFunctionNext(whichQuestion)
    });
}

const whichFunctionNext = (previousAnswer) => {
    if (previousAnswer == 'View All Departments') {
        viewAllDepartments()
    } else if (previousAnswer == 'View All Roles') {
        viewAllRoles()
    } else if (previousAnswer == 'View All Employees') {
        viewAllEmployees()
    } else if (previousAnswer == 'Add Department') {
        addDepartmentInquirer()
    } else if (previousAnswer == 'Add Role') {
        addRole()
    } else if (previousAnswer == 'Add Employee') {
        addEmployee()
    } else if (previousAnswer == 'Update Employee Role') {
        updateEmployeeRole()
    } else {
        console.log("Goodbye")
        return;
    }
}

// const viewAllDepartments = () => {
//     return db.query('SELECT department, COUNT(id) AS number_courses FROM course_names GROUP BY department;', 
//     function (err, results) {
//         console.log(results);
//         askInitial()
//       });

const viewAllDepartments = () => {
    return db.query('SELECT department_name AS department, id FROM departments GROUP BY id', function (err, results) {
        console.log(results);
        askInitial()
    });
}

const viewAllRoles = () => {
    return db.query('SELECT role_name AS role, id FROM roles GROUP BY id', function (err, results) {
        console.log(results);
        askInitial()
    });
}

const viewAllEmployees = () => {
    return db.query('SELECT * FROM employee_info', function (err, results) {
        console.log(results);
        askInitial()
    });
}

const addDepartmentInquirer = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the name of the new department?",
            name: "deptName"
        },
    ]).then((result) => {
        addDepartment(result);
    });
}

const addDepartment = (deptName) => {
    const sql = `INSERT INTO departments (department_name) VALUES (?)`;
        db.query(sql, deptName.deptName, function (err, results) {
            if (err) {
                console.log(err)
            }
            console.log("Department inserted")
            askInitial()
        });
}

const addRole = () => {

}

const addEmployee = () => {

}

const updateEmployeeRole = () => {

}

askInitial()