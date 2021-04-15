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