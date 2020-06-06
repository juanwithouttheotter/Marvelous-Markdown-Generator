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
            name: 'Installation',
            message: 'What is required for installation?'
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'How will the user use this app/website?'
        },
        {
            type: 'list',
            name: 'License',
            message: 'What license are you using?',
            choices: ['MIT', 'Apache 2.0', 'Creative Commons']

        },
        { //same as before change type to make more dynamic
            type: 'input',
            name: 'Contributing',
            message: 'Who contributed to your project?'
        },
        {
            type: 'input',
            name: 'Guidelines',
            message: 'What are your contribution guidelines?'
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
        let licenseBadge = '';
        if(answers.License === 'Apache 2.0'){
            licenseBadge =  '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        }else if(answers.License === 'MIT'){
            licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        }else if(answers.License === 'Creative Commons'){
            licenseBadge = '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
        }
        
        const newReadMe = `
# ${answers.Title}
https://img.shields.io/github/languages/top/${answers.GithubProfile}/${answers.Title}

See website at [Github](https://${answers.GithubProfile}.github.io/${answers.Title}/)

${answers.Description}
## Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributors](#Contributors)
* [Tests](#Tests)
* [Github](#Github)

## Installation
${answers.Installation}
## Usage
${answers.Usage}
## License
${licenseBadge}
## Contributors
####${answers.Contributing}
${answers.Guidelines}
## Tests
${answers.Tests}
## Github
####Profile
https://github.com/${answers.GithubProfile}
####Email
${answers.GithubEmail}
    `;

    fs.writeFile('test.md', newReadMe, function (err) {
        if (err) throw err;
        console.log('You have a new MD file!');
      });
    });
