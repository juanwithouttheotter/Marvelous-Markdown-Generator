const inquirer = require('inquirer');
const fs = require('fs');
inquirer
    .prompt([
        {

            type: 'input',
            name: 'Title',
            message: 'What is the Title?'
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Please give a short description of your project.'
        },
        {
            type: 'input',
            name: 'Contents',
            message: 'What are the contents of your project?'
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'what packages did you use?'
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'What is your functionality?'
        },
        {
            type: 'input',
            name: 'License',
            message: 'What are you licenses?'
        },
        {
            type: 'input',
            name: 'Contributing',
            message: 'Who contributed?'
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'What tests did you use?'
        },
        {
            type: 'input',
            name: 'GithubProfile',
            message: 'What is your Github username?'
        },
        {
            type: 'input',
            name: 'GithubEmail',
            message: 'What is your Github email?'
        },
    ])
    .then(answers => {
        const newReadMe = (`
# ${answers.Title}

https://img.shields.io/github/languages/top/${answers.GithubProfile}/${answers.Title}
${answers.Description}
##Contents
    ${answers.Contents}
##Installation
    ${answers.Contents}
##Usage
    ${answers.Usage}
##License
    ${answers.License}
##Contributors
    ${answers.Contributing}
##Tests
    ${answers.Tests}
##Github
    ${answers.GithubProfile}
    ${answers.GithubEmail}

    `);
    fs.writeFile('test.md', newReadMe, function (err) {
        if (err) throw err;
        console.log('You have a new MD file!');
      });
    

    })
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else when wrong
        }
    });




// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
