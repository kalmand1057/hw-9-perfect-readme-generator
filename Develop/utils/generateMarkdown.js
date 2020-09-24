// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  The purpose of this project is ${data.description}
  ## Table of Contents
  -Installation
  -Usage
  -License
  -Contribution
  -Tests
  -Questions
  ## Installation
  You can install this project by ${data.installation}
  ## Usage
  To use this project, ${data.usage}
  You can watch a video on a demonstration of the project here ${usageurl}
  ## License
  This project is licensed by ${data.license}
  ## Contributing
  When contributing to the project, ${data.contributing}
  ## Tests
  You can run a test by ${data.tests}
  ## Questions
  You can contact me by reaching out to my GitHub: https://github.com/${data.username}
  Or you can email me: ${data.email}
`;
}

module.exports = generateMarkdown;
