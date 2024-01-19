const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({title, description, tableOfContents, installation, usage, license, contributing, tests, questions}) =>
//README content with "cash-money" blanks
// `${title}`
// `${description}`
// `${tableOfContents}`
// `${installation}`
// `${usage}`
// `${license}`
// `${contributing}`
// `${tests}`
// `${questions}`

inquirer
.createPromptModule([
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
        type: 'input', //Not sure if there is a better type or method
        name: 'tableOfContents',
        message:'',
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
])
.then((answers) => {
    const READMEfile = generateREADME(answers);

    fs.writeFile('readme', READMEfile, (err) =>
      err ? console.log(err) : console.log('Thank you for using README-Composer!')
    );
});