const inquirer = require('inquirer');
const mysql = require('mySQL2');
const cTable = require('console.table');
const db = require('./config/connection');

db.connect((err) => {
    if (err) throw err;
    console.log("Database connected.");
    promptUser();
});

const promptUser = () => {
    return inquirer
        .prompt([
            {
                type: "list",
                name: "viewOptions",
                message: "Choose from the following options:",
                choices: [
                    'View All Departments',
                    'View All Roles',
                    'View All Staff',
                    'Add A Department',
                    'Add A Role',
                    'Add Staff',
                ],
            },
        ])

        .then((answers) => {
            const { viewOptions } = answers;
            if (viewOptions === "View All Departments") {
                viewDepartment();
            }
            if (viewOptions === "View All Roles") {
                viewRole();
            }
            if (viewOptions === "View All Staff") {
                viewStaff();
            }
            if (viewOptions === "Add A Department") {
                addDept();
            }
            if (viewOptions === "Add A Role") {
                addRole();
            }
            if (viewOptions === "Add Staff") {
                addStaff();
            }
        });
};

const viewDepartment = () => {
    console.log("View All Departments");
    const query = `SELECT * FROM department`
    db.query(query, (err, res) => {
        console.table(res);
        promptUser();
    });
};

const viewRole = () => {
    console.log("View All Roles");
    const query = `SELECT * FROM role `
    db.query(query, (err, res) => {
        console.table(res);
        promptUser();
    });
};

const viewStaff = () => {
    console.log("View All Staff");
    const query = `SELECT * FROM staff`
    db.query(query, (err, res) => {
        console.table(res);
        promptUser();
    });
};

const addDept = () => {
    inquirer
        .prompt([
            {
                name: "addDepartment",
                type: "input",
                message: "What is the name of the Department?"
            },
        ])
        .then((answer) => {
            const query = `INSERT INTO department (name) VALUES (?)`;
            db.query(query, answer.addDepartment, (err, res) => {
                console.log(answer.addDepartment `department successfully created!`);
            });
        });
        promptUser();
};

const addRole = () => {
    inquirer
        .prompt([
            {
                name: "roleTitle",
                type: "input",
                message: "What is the title of the role?"
            },
            {
                name: "roleSalary",
                type: "input",
                message: "What is the salary of the role?"
            },
            {
                name: "roleDeptId",
                type: "input",
                message: "What is the Department ID of the role? (Numbers Only)"
            },
        ])
        .then((answers) => {
            const query = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;
            let info = [answers.roleTitle, answers.roleSalary, answers.roleDeptId];
            db.query(query, info, () => {
                console.log(`Role successfully created!`);
            });
        });
        promptUser();
};

const addStaff = () => {
    inquirer
        .prompt([
            {
                name: "staffFirst",
                type: "input",
                message: "What is the employee's first name?"
            },
            {
                name: "staffLast",
                type: "input",
                message: "What is the employee's last name?"
            },
            {
                name: "staffId",
                type: "input",
                message: "What is the Role ID of the employee? (Numbers Only)"
            },
            {
                name: "staffMan",
                type: "input",
                message: "What is the ID of the manager for this employee?"
            },
        ])
        .then((answers) => {
            const query = `INSERT INTO staff (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
            let info = [answers.staffFirst, answers.staffLast, answers.staffId, answers.staffMan];
            db.query(query, info, () => {
                console.log(`Role successfully created!`);
            });
        });
        promptUser();
};