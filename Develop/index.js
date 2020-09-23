const generateMarkdown = require("./generateMarkdown.js");
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
            message: "Describe this project",
            name: "description",
        },
        {
            type: "input",
            message: "Enter table of contents",
            name: "contents",
        },
        {
            type: "input",
            message: "How to install",
            name: "installation",
        },
        {
            type: "input",
            message:"How to use",
            name: "usage",
        },
        {
            type: "input",
            message: "Choose a license for your project",
            name: "license",
        },
        {
            type: "input",
            message: "How to contribute",
            name: "contributing",
        },
        {
            type: "input",
            message: "How to run a test",
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
    try {
        const answer = await questions;
        const markdown = generateMarkdown(data);
        await writeFileAsync("readme.md", markdown);
        console.log("success!");
    } catch(err) {
        console.log(err);
    }
}

// function call to initialize program
init();
