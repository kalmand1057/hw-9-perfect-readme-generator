const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the title of the project?",
            name: "title",
        },
        {
            type: "input",
            message: "DESCRIPTION: The purpose of this project is ",
            name: "description",
        },
        {
            type: "input",
            message: "INSTALLATION: You can install this project by ",
            name: "installation",
        },
        {
            type: "input",
            message:"USAGE: To use this project, ",
            name: "usage",
        },
        {
            type: "input",
            message: "LICENSE: Which license will you be using; GNU General Publice, MIT, or Open Software?",
            name: "license",
        },
        {
            type: "input",
            message: "CONTRIBUTION: When contributing to the project,",
            name: "contributing",
        },
        {
            type: "input",
            message: "TEST RUN: You can run a test by",
            name: "tests",
        },
        {
            type:"input",
            message: "What is your GitHub username?",
            name: "username",
        },
        {
            type:"input",
            message: "What is your email address?",
            name: "email",
        }
    ]);
}

// function to write README file
function writeToFile(generateMarkdown, data) {
    }

// function to initialize program
async function init() {
    console.log("async func")
    try {
        const answer = await promptUser();
        const markdown = generateMarkdown(answer);
        await writeFileAsync("readme.md", markdown);
        console.log("success!");
    } catch(err) {
        console.log(err);
    }
}

// function call to initialize program
init();
