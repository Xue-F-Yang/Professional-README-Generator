// Packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project? (Required)',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        return 'Please provide a title for your project!';
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project:(Required)',
    validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          return 'Please provide a description of your project!';
        }
      }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions for your project:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage information for your project:'
  },
  {
    type: 'confirm',
    name: 'confirmContributers',
    message: 'Would you like to allow other developers to contribute?',
    default: true
},
{
    type: 'input',
    name: 'contribute',
    message: 'Please provide guidelines for contributing. (Required)',
    when: ({ confirmContributers }) => {
        if (confirmContributers) {
            return true;
        } else {
            return false;
        }
    },
    validate: contributerInput => {
        if (contributerInput) {
            return true;
        } else {
            console.log('Please enter contributer guidelines!');
            return false;
        }
    }
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide test instructions for your project:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please choose a license for your project:',
    choices: ['MIT', 'Apache', 'GPL', 'BSD', 'No License']
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username? (Required)',
    validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          return 'What is your GitHub username!';
        }
      }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address? (Required)',
    validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          return 'What is your email address!';
        }
      }
  }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README.md file generated successfully!')
    );
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const markdown = generateMarkdown(answers);
            writeToFile('README.md', markdown);
            console.log('Answers:');
            console.log(answers);
        });
}

// function call to initialize program
init();