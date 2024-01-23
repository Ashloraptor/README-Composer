const inquirer = require('./package.json');
const fs = require('fs');

const generateREADME = ({title, description, tableOfContents, installation, usage, license, contributing, tests, questions}) =>
//README content with "cash-money" blanks, html style(?)
`<h1>${title}</h1>
<p>${description}</p>
<h2>Table of Contents</h2>
<a href="#installation">Installation</a>
<a href="#usage">Usage Instruction</a>
<a href="#license">License</h2>
<a href="#contributing">Contributing</a>
<a href="#tests">Tests</a>
<a href="#questions">Questions</a>
<h2 id="installation">Installation</h2>
<p>${installation}</p>
<h2 id="usage">Usage Instruction</h2>
<p>${usage}</p>
<h2 id="license"></h2>
<p>${license}</p>//was this supposed to be a badge?
<h2 id="contributing"></h2>
<p>${contributing}</p>
<h2 id="tests">Tests</h2>
<p>${tests}</p>
<h2 id="questions">Questions</h2>
<p>${questions}</p>`;

inquirer
.prompt([
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
        type: 'input', //Not sure if there is a better type or method. Maybe a loop? Or is it automatic based on the following questions?
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

    fs.writeFile('README.md', READMEfile, (err) =>
      err ? console.log(err) : console.log('Thank you for using README-Composer!')
    );
});