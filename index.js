// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "project title",
        default: "Project Title Sample",
    },
    {
        type: "input",
        message: "Describe your project: provide a general synopsis, the purpose/reasoning for your program, and overview of its functionality.",
        name: "description",
        default: "This is a sample description: in this area a project will be described by general overview of the program, the reasoning for or the purpose of the program, and a simple overview of functionality",
    },
    {
        type: "confirm",
        message: "Would you like a table of contents in your README?",
        name: "table of Contents",
        default: false
    },
    {
        type: "input",
        message: "Please provide instructions for installation, step-by-step instructions highly reccomended.",
        name: "installation",
        default: "In this section the installation process should be defined; this is a sample section."
    },
    {
        type: "input",
        message: "Provide instructions and examples for use.",
        name: "usage",
        default: "In this sample section there should be instructions and examples for use."
    },
    {
        type: "input",
        message: "Please list your collaborator(s) here, provide links to their github profile. If none, leave blank",
        name: "collaborators",
        default: null
    },
    {
        type: "input",
        message: "If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.",
        name: "3rd Party Assets",
        default: null
    },
    {
        type: "list",
        message: "What license would you prefer to use for this project?",
        name: "license",
        default: "MIT",
        choices: "['MIT', 'Apache License 2.0', 'Berkeley Software Distribution', 'GPL v3', 'MPL 2.0']",
    },
    {
        type: "input",
        message: "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.",
        name: "contribute",
        default: null
    },
    {
        type: "input",
        message: "Do you have testing instructions? If none, leave blank.",
        name: "testing",
        default: null
    },
    {
        type: "input",
        message: "Please provide your Github username.",
        name: "github",
        default: "In this section a GitHub profile should be provided; this is a sample section."
    },
    {
        type: "input",
        message: "Please provide a contact email",
        name: "email",
        default: "In this section a contact email should be provided; this is a sample section."
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
