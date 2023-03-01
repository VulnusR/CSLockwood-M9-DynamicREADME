// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'Apache License 2.0':
      return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case 'Berkeley Software Distribution':
      return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
    case 'GPL v3':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'MPL 2.0':
      return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
