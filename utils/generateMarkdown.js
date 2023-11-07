// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
  } else {
    return '';
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `[${license}](https://choosealicense.com/licenses/${license})`;
  } else {
    return '';
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `## [License](#table-of-contents)\n\nThe application is covered under the following license:\n${renderLicenseLink(
      license
    )}`;
  } else {
    return '';
  }
}

// Function that returns license in table of contents
// If there is no license, return an empty string
function renderLicenseTOC(license) {
  if (license !== 'no license') {
    return `* [License](#license)`;
  } else {
    return '';
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  let contributionSection = '';
  if (data.contribution) {
    contributionSection = `## Contributing
  ${data.contribution}
  `;
  }

  let licenseSection = '';
  if (data.license !== 'No License') {
    licenseSection = `## License
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)
  This project is covered under the ${data.license} license.
  `;
  }

  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${data.contribution ? '- [Contributing](#contributing)\n' : ''}
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${contributionSection}

  ## Tests
  ${data.tests}

  ${licenseSection}

  ## Questions
  For any questions about the project, please feel free to contact me through my GitHub profile: [${data.github}](https://github.com/${data.github}) or via email at ${data.email}.
  `;
}

module.exports = generateMarkdown;