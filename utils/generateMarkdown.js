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
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '[MIT](https://opensource.org/licenses/MIT)';
    case 'Apache License 2.0':
      return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
    case 'Berkeley Software Distribution':
      return '[BSD 3-Clause "New" or "Revised" License](https://opensource.org/licenses/BSD-3-Clause)';
    case 'GPL v3':
      return '[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)';
    case 'MPL 2.0':
      return '[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    This project is licensed under the ${license} license.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Generate the table of contents
  let tableOfContents = '';
  if (data.tableOfContents) {
  tableOfContents = `
  ## Table of Contents

  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Collaborators](#Collaborators)
  - [Third-Party Assets](#Third-Party-Assets)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [License](#License)
  - [Questions](#Questions)
  `;
  }

  // Generate the collaborator list
  let collaborators = '';
  if (data.collaborators) {
    collaborators = `
    ## Collaborators

    ${data.collaborators}
    `;
  }

  // Generate the third-party assets list
  let thirdPartyAssets = '';
  if (data['3rd-Party-Assets']) {
    thirdPartyAssets = `
    ## Third-Party Assets

    ${data['3rd-Party-Assets']}
    `;
  }

  // Generate the contribution guidelines
  let contribute = '';
  if (data.contribute) {
    contribute = `
    ## Contributing

    ${data.contribute}
    `;
  }

  // Generate the testing instructions
  let testing = '';
  if (data.testing) {
    testing = `
    ## Tests

    ${data.testing}
    `;
  }

  // Generate the license badge and link
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);

  // Generate the license section
  const licenseSection = renderLicenseSection(data.license);

  // Combine all the sections into the final markdown string
  return `# ${data.projectTitle}

  ${licenseBadge}

  ## Description

  ${data.description}

  ${tableOfContents}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ${collaborators}

  ${thirdPartyAssets}

  ${contribute}

  ${testing}

  ${licenseLink}

  ${licenseSection}

  ## Questions

  For questions about this project, please see my GitHub at [${data.github}](https://github.com/${data.github}), or reach out by email at ${data.email}.
  `;
}

module.exports = generateMarkdown;
