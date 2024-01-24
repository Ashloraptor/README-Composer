var inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const generateREADME = ({title, description, installation, usage, license, contributing, tests, questions}) =>
//README content
`# ${title}
${description}
## Table of Contents
* [Installation](##installation)
* [Usage Instruction](##usage-instruction)
* [License](##license)
* [Contributing](##contributing)
* [Tests](##tests)
* [Questions](##questions)

## Installation
${installation}
## Usage Instruction
${usage}
## License
${license}
## Contributing
${contributing}
## Tests
${tests}
## Questions
${questions}`;

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
        choices: ['AFL-3.0', 'Apache-2.0', 'Artistic-2.0', 'other'],
        //https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository
    },
    {
        type: 'input',
        name: 'contributing',
        message:'',
    },
    {
        type: 'input',
        name: 'tests',
        message:'',
    },
    {
        type: 'input',
        name: 'questions',
        message:'',
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