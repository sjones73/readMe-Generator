// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the description?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What is the installation process?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the usage?',
      },
      {
        type: 'input',
        name: 'license',
        message: 'Enter your license.',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'How to contribute?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'How to test?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email.',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created fileName')
      );
}

// TODO: Create a function to initialize app
function init() {}
    inquirer.prompt(questions).then(answers => {
        writeToFile('OUTPUT.md', generateMarkdown({...answers}))
    })

// Function call to initialize app
init();
