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
          "MIT",
          "GNU GPLv3",
          "Apache",
          "Mozilla"
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
    let licenseUrl;
    let licenseString;

    switch (answers.license) {
        case "MIT":
            licenseUrl = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
            licenseString = "Licensed under the MIT license."
            break;
        case "GNU GPLv3":
            licenseUrl = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
            licenseString = "Licensed under the GNU GPLv3 license."
            break;
        case "Apache":
            licenseUrl = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            licenseString = "Licensed under the Apache license."
            break;
        case "Mozilla":
            licenseUrl = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
            licenseString = "Licensed under the Mozilla license."
            break;
        default:
            licenseUrl = "";
            break;
        }       

    
    const readme = 
`# ${answers.name}

## Description 
${licenseUrl}

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
${licenseString}

## Contributing
${answers.contribute}

## Tests
${answers.test}

## Questions
GitHub: https://github.com/${answers.github}

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