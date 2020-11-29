const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
// empty array to hold team member objects
const teams = [];
// intial prompt for generic questions
const intialPrompt = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Please select role:",
        name: "role",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        type: "input",
        message: "Please enter name:",
        name: "name",
      },
      {
        type: "number",
        message: "Please enter id:",
        name: "id",
      },
      {
        type: "input",
        message: "Please enter email:",
        name: "email",
      },
      {
        type: "number",
        message: "Please enter your office number:",
        name: "officeNumber",
        when: (answers) => answers.role === "Manager", // displays if role is manager
      },
      {
        type: "input",
        message: "Please enter github username:",
        name: "github",
        when: (answers) => answers.role === "Engineer", // displays if role is engineer
      },
      {
        type: "input",
        message: "Please enter school:",
        name: "school",
        when: (answers) => answers.role === "Intern", // displays if role is intern
      },
    ])
    .then((answers) => {
      if (answers.role === "Manager") {
        console.log('manager is,', answers);
         // create manager object and push to teams array
        // call next member function
      } else if (answers.role === "Engineer") {
        console.log("engineer is,", answers);
        // create manager object and push to teams array
        // call next member function
      } else if (answers.role === "Intern") {
        console.log("intern is,", answers);
        // create manager object and push to teams array
        // call next member function
      }
    });
  // function for next member. If yes, call intialPrompt. Else render and write html file
};

intialPrompt();
//create intial prompt with generic questions,
//then based on answers.role will need conditonal statements for user-specific role and object creation. need loop for add another (call intial prompt)

