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
    // function generateMarkdown(data) {
    //     return `# ${data.title}
    //     ## Description
    //     The purpose of this project is ${data.description}
    //     ## Table of Contents
    //     ${data.contents}
    //     ## Installation
    //     You can install this project by ${data.installation}
    //     ## Usage
    //     To use this project, ${data.usage}
    //     ## License
    //     This project is licensed by ${data.license}
    //     ## Contributing
    //     ${data.contributing}
    //     ## Tests
    //     ${data.tests}
    //     ## Questions
    //     You can contact me by reaching out to my GitHub: ${data.username}
    //     Or you can email me: ${data.email}
    //   `;
    //   }


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
