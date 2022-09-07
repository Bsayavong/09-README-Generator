// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'Enter the title of your project',
    name: 'title',
}, {
    type: '',
    message: '',
    name: '',
}, {
    type: '',
    message: '',
    name: '',
    choice: '//licensing************',
}, {

    // repeat?? How many questions?
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //fs.writeFile() ?????


}

// TODO: Create a function to initialize app
function init() {
    //inquirer.????
        //console.log(answer after user has answered questions)
    writeToFile ('README.md', generateMarkdown(answer))   
}

// Function call to initialize app
init();
