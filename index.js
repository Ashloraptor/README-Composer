var inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { makeBadge, ValidationError } = require('badge-maker')

//making a badge with badge-maker
const format = {
    label: 'build',
    message: 'passed',
    color: 'green',
  }
  function createBadge(receiveData){
    return`![GitHub License](https://img.shields.io/badge/license-${receiveData}-blue.svg)`
  }


const generateREADME = ({title, description, installation, usage, license, contributing, tests, questions, questions2}) =>
//README content
`# ${title}

${createBadge(license)}

${description}
## Table of Contents
* [Installation](##-installation)
* [Usage Instruction](##-usage-instruction)
* [License](##license)
* [How to Contribute](##-how-to-contribute)
* [Tests](##-tests)
* [Questions](##-questions)

## Installation
${installation}
## Usage Instruction
${usage}
## License
${license}
## How to Contribute
${contributing}
## Tests
${tests}
## Questions
For questions please reach out to [${questions}](https://github.com/${questions}) via email ${questions2}.`;

//function to get user input
var questions= [
    {
        type: 'input',
        name: 'title',
        message:'What is your project called?',
    },
    {
        type: 'input',
        name: 'description',
        message:'What does your project do?',
    },
    {
        type: 'input',
        name: 'installation',
        message:'How is it installed?',
    },
    {
        type: 'input',
        name: 'usage',
        message:'How does one use it?',
    },
    {
        type: 'checkbox', //I thought I knew where this was going, but that's 36 options listed in Github
        name: 'license',
        message:'What license does it use?',
        choices: ['Microsoft Public License', 'MIT', 'Open Software License 3.0', 'other'],
        //https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository
    },
    {
        type: 'input',
        name: 'contributing',
        message:'How can others contribute to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message:'',
    },
    {
        type: 'input',
        name: 'questions',
        message:'Please input your GitHub username.',
    },
    {
        type: 'input',
        name: 'questions2',
        message:'Please provide your email address.',
    },
];
// .then((answers) => {
//     const READMEfile = generateREADME(answers);

//     fs.writeToFile('README.md', READMEfile, (err) =>
//       err ? console.log(err) : console.log('Thank you for using README-Composer!')
//     );
//});

// Function to write README file using the user input
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }

  //Function to init
  function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log('Generating README...');
        writeToFile('README.md', generateREADME({ ...answers }));
        console.log('Thank you for using README-Composer!')
      });
  }

  init();