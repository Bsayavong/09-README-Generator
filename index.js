// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What would you like to title your project?',
    name: 'title',
}, {
    type: 'input',
    message: 'Please enter a short decription of the project.',
    name: 'description',
}, {
    type: 'input',
    message: 'What instructions are needed to before proceed?',
    name: 'installation',
}, {
    type: 'input',
    message: 'Please provide instructions for use.',
    name: 'usage',
}, {
    type: 'list',
    message: 'Please select the license application -',
    name: "license",
    choices: ['GPL', 'Apache_2.0', 'MIT', 'None'],
}, {
    type: 'input',
    message: 'Who is the developer and or contributors to this project?',
    name: 'contributors',
}, {
    type: 'input',
    message: 'Provide some tests for your application',
    default: 'npm run test',
    name: 'tests',
}, {
    type: 'input',
    message: 'What is your name?',
    name: 'name',
}, {
    type: 'input',
    message: 'Please enter your GitHub Username',
    name: 'githubUser',
}, {
    type: 'input',
    message: 'What is your email?',
    name: 'email',
}];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('./utils/README.md', generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Complete!')
    );
    return data;
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile(data);
    });
}

// Function call to initialize app
init();
