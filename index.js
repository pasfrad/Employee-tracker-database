const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

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

const viewAllDepartments = () => {
    return db.query('SELECT department_name AS department, id FROM departments GROUP BY id', function (err, results) {
        const table = cTable.getTable(results)
        console.log(table)
        askInitial()
    });
}

const viewAllRoles = () => {
    return db.query('SELECT role_name AS role, id FROM roles GROUP BY id', function (err, results) {
        const table = cTable.getTable(results)
        console.log(table)
        askInitial()
    });
}

const viewAllEmployees = () => {
    return db.query('SELECT * FROM employee_info', function (err, results) {
        const table = cTable.getTable(results)
        console.log(table)
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
        const sql = `INSERT INTO departments (department_name) VALUES (?)`;
        db.query(sql, result.deptName, function (err, results) {
            if (err) {
                console.log(err)
            }
            else console.log("Department inserted")
            askInitial()
        });
    });
}

const addRole = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the name of the new role?",
            name: "roleName"
        },
        {
            type: "input",
            message: "What is the salary of the new role?",
            name: "roleSalary"
        },
        {
            type: "input",
            message: "What is the department id of the new role?",
            name: "roleDept"
        }
    ]).then(({ roleName, roleSalary, roleDept }) => {
        const params = [roleName, roleSalary, roleDept]
        db.query(`INSERT INTO roles (role_name, salary, department_id) VALUES (?,?,?)`, params,
            function (err, results) {
                if (err) {
                    console.log(err)
                }
                console.log("Role added")
                askInitial()
            });
    });
}

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the new employee's name?",
            name: "newEmpName"
        },
        {
            type: "input",
            message: "What is the new employee's role id?",
            name: "newEmpRole"
        },
        {
            type: "input",
            message: "What is the new employee's manager's id?",
            name: "newEmpMngr"
        }
    ]).then(({ newEmpName, newEmpRole, newEmpMngr }) => {
        const params = [newEmpName, newEmpRole, newEmpMngr]
        db.query(`INSERT INTO employee_info (employee_name, role_id, manager_id) VALUES (?,?,?)`, params,
            function (err, results) {
                if (err) {
                    console.log(err)
                }
                console.log("Employee added")
                askInitial()
            });
    });
}

// const getRoleList = () => {
//     let roleList = [];
//     db.query('SELECT role_name FROM roles', function (err, results) {
//         results[0].forEach(obj => {
//             let role = obj.role_name;
//             roleList.push(role);
//         })
//     })
//     return roleList
// }

// const getEmployeeList = () => {
//     let employeeList = [];
//     db.query('SELECT employee_name FROM employee_info', function (err, results) {
//         results.forEach(obj => {
//             let employee = obj.employee_name;
//             employeeList.push(employee);
//         })
//     })
//     return employeeList
// }

const updateEmployeeRole = () => {
    let employeeList = [];
    db.query('SELECT employee_name FROM employee_info', function (err, results) {
        results.forEach(obj => {
            let employee = obj.employee_name;
            employeeList.push(employee);
        })
    })
    let roleList = [];
    db.query('SELECT role_name FROM roles', function (err, results) {
        results.forEach(obj => {
            let role = obj.role_name;
            roleList.push(role);
        })
    })
    inquirer.prompt([
        {
            type: "list",
            message: "Which employee's role do you want to update?",
            choices: employeeList,
            name: "whichEmployee"
        },
        {
            type: "list",
            message: "What is the employee's new role?",
            choices: roleList,
            name: "newRole"
        },
    ]).then(({ whichEmployee, newRole }) => {
        console.log({ whichEmployee, newRole })
    });
}

askInitial()