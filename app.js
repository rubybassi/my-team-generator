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
let team = [];
// intial prompt for generic questions
const initialPrompt = () => {
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
        when: (answer) => answer.role === "Manager", // displays if role is manager
      },
      {
        type: "input",
        message: "Please enter github username:",
        name: "github",
        when: (answer) => answer.role === "Engineer", // displays if role is engineer
      },
      {
        type: "input",
        message: "Please enter school:",
        name: "school",
        when: (answer) => answer.role === "Intern", // displays if role is intern
      },
    ])
    .then((answers) => {
      if (answers.role === "Manager") {
        // console.log('manager is,', answers);
        const manager = new Manager(answers.name,answers.id,answers.email,answers.officeNumber);
        team.push(manager);
        // console.log('this is teams', team);
        additionalPrompt();
      } else if (answers.role === "Engineer") {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        team.push(engineer);
        additionalPrompt();
      } else if (answers.role === "Intern") {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        team.push(intern);
        additionalPrompt();
      }
    });
  // function for next member. If yes, call intialPrompt. Else render and write html file
};

const additionalPrompt = () => {
  inquirer
    .prompt([
      {
        type: "confirm",
        message: "Add another team member?",
        name: "newMember",
      },
    ])
    .then((answer) => {
      if (answer.newMember) {
        initialPrompt();
      } else {
        console.log('team', team);
      }
    }); 
  };

initialPrompt();
//need loop for add another (call intial prompt)
