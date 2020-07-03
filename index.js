const inquirer = require("inquirer");
const fs = require("fs");

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
        message: "Please enter testing instructions for your project:",
        name: "test",
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
        const readme = 
`# ${answers.name}

## Description 
${answers.description}

## Table of Contents 
[Installation](#installation)
        
[Usage](#usage)
        
[License](#license)
        
[Contributing](#contributing)
        
[Tests](#tests)
        
[Questions](#questions)
## Installation
${answers.install}

## Usage
${answers.usage}

## License
${answers.license}

## Contributing
${answers.contribute}

## Tests
${answers.test}

## Questions
GitHub: ${answers.github}
Email: ${answers.email}
`;

        fs.writeFile("README_GENERATED.md", readme, function(error) {
            if (error) {
              console.log(error)
              return console.log(error);
            }
          
            console.log("Success!");
          });
      });