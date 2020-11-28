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
    ])
    .then((answers) => {
      if (answers.role === "Manager") {
          console.log('manager is,', answers);
       // inquirer.prompt().then();
        // add unique quesitions
        // create manager object and push to teams array
        // call next member function
      } else if (answers.role === "Engineer") {
        console.log('engineer is,', answers);
       // inquirer.prompt().then();
        // add unique quesitions
        // create manager object and push to teams array
        // call next member function
      } else if (answers.role === "Intern") {
        console.log('intern is,', answers);
       // inquirer.prompt().then();
        // add unique quesitions
        // create manager object and push to teams array
        // call next member function
      }
    });
  // function for next member. If yes, call intialPrompt. Else render and write html file
};

intialPrompt();
//create intial prompt with generic questions,
//then based on answers.role will need conditonal statements for user-specific role and object creation. need loop for add another (call intial prompt)

// Write code to use inquirer to gather information about the development team members, DONE

// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
