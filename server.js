const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const connection = require("./db.js");
const { printTable } = require("console-table-printer");

const init = () => {
  connection.connect((err) => {
    if (err) throw err;

    console.log(
      chalk.yellowBright(
        "===================================================================================================="
      )
    );

    console.log(chalk.redBright(figlet.textSync("Employee Tracker")));

    console.log(
      chalk.blueBright(
        "                                         Created By: Devon Williams"
      )
    );

    console.log(
      chalk.yellowBright(
        "===================================================================================================="
      )
    );

    mainMenu();
  });
};

const mainMenu = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "mainMenuChoice",
        choices: [
          "Add Department",
          "Add Role",
          "Add Employee",
          "View Departments",
          "View Roles",
          "View Employees",
          "Update Employee Role",
          "Update Employee Managers",
          "View Employees by Manager",
          "View Total Utilized Budget by Department",
          "Remove Employee",
          "Remove Department",
          "Remove Role",
          "Exit",
        ],
      },
    ])
    .then((response) => {
      const answer = response.mainMenuChoice;
      console.log(answer);
      switch (answer) {
        case "Add Department":
          addDepartment();
          break;
        case "Add Role":
          addRoles();
          break;
        case "Add Employee":
          addEmployees();
          break;
        case "View Departments":
          viewDepartments();
          break;
        case "View Roles":
          viewRoles();
          break;
        case "View Employees":
          viewEmployees();
          break;
        case "Update Employee Role":
          updateRoles();
          break;
        case "Update Employee Managers":
          updateEmployeeMgr();
          break;
        case "View Employees by Manager":
          viewEmployeeByMgr();
          break;
        case "View Total Utilized Budget by Department":
          departmentBudget();
          break;
        case "Remove Employee":
          removeEmployee();
          break;
        case "Remove Department":
          removeDept();
          break;
        case "Remove Role":
          removeRole();
          break;
        case "Exit":
          connection.end();
          break;
      }
    });
};