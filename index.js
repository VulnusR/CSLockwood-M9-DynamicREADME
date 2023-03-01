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
        type: "input",
        message: "Please provide instructions for installation",
        name: "installation",
        default: "In this section the installation process should be defined; this is a sample section."
    },
    {
        type: "",
        message: "",
        name: "",
        default: ""
    },

    


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
