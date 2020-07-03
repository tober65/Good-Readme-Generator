const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the name of your project?",
      name: "name",
    },
    {
        type: "input",
        message: "Please enter a description of your project:",
        name: "description",
      },
      {
        type: "input",
        message: "Please enter installation instructions for your project:",
        name: "install",
      },
      {
        type: "input",
        message: "Please enter usage instructions for your project:",
        name: "usage",
      },
      {
        type: "list",
        message: "Which license does your project fall under?",
        name: "license",
        choices: [
          "triangle",
          "circle",
          "square",
          "hexagon"
        ],
      },
      {
        type: "input",
        message: "Please enter contribution instructions for your project:",
        name: "contribute",
      },
      {
        type: "input",
        message: "Please enter your github username:",
        name: "github",
      },
      {
        type: "input",
        message: "Please enter your email address:",
        name: "email",
      },
]).then(function (answers) {
        // Inquirer passes an object which contains the users answers. Each key of
        // of the object corresponds to the name property of the questions.
        console.log("Your name:", answers.name);
      });