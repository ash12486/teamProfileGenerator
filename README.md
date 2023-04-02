# Team Profile Generator

by Ashlee Huff


## Table of Contents
- [Team Profile Generator](#team-profile-generator)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
    - [Additional Testing Information](#additional-testing-information)
  - [License](#license)
  - [Questions](#questions)

## Description

The Team Profile generator is a command-line application that allows users to input information about their team, including managers, engineers, and interns, and generate an HTML page that displays the information in a clear and organized format. This tool is particularly useful for project managers and team leaders who need to keep track of their team members' information in one place. 

The application utilizes Node.js and a number of external packages, including Inquirer.js and Jest, to provide a seamless and efficient user experience. With the ability to add, edit, and delete team members as needed, the Team Profile generator is an invaluable tool for any team that wants to stay organized and productive.

## Installation
To install the Team Profile Generator, you should follow these steps:

1. Install Node.js on your computer.
2. Clone the GitHub repository to your local machine.
3. Open the project in your code editor of choice.
4. In the command-line interface, navigate to the root directory of the project.
5. Run npm install to install the required dependencies.

Once you have completed these steps, you should be ready to use the Team Profile Generator.

## Usage
![Demo](src/Images/Untitled_%20Apr%202,%202023%207_02%20AM.gif)

The Team Profile Generator is a command-line application that prompts the user to input information about their team members and generates an HTML page displaying their team roster.

To use this application, follow these steps:

1. Clone the repository to your local machine.
2. Open a terminal window and navigate to the root directory of the application.
3. Install the necessary dependencies by running the command npm install.
4. To run the application, enter the command node index.js in the terminal.
5. Follow the prompts to input information about your team members.
6. When you have entered information for all team members, select "No" when prompted to add another team member.
7. An HTML file named team.html will be generated in the output folder. Open this file in a web browser to view your team roster.

## Testing
![Testing](/src/Images/test.png)

To run the tests for this project, you'll need to have Jest installed. If you don't already have it installed, you can do so by running:

```
npm install --save-dev jest
```

Once Jest is installed, you can run the tests by running:

```
npm test
```

This will run all of the tests in the __tests__ directory. If you'd like to run a specific test file, you can do so by running:

```
npm test path/to/test-file.js
```

If you'd like to run the tests in watch mode, you can do so by running:

```
npm test -- --watch
```

This will re-run the tests automatically every time you make a change to the code.

### Additional Testing Information

In addition to the automated tests, there are a few manual tests you can run to make sure everything is working as expected:

1. Create a new team member of each type (manager, engineer, and intern) and make sure their information is displayed correctly on the team roster.
2. Edit an existing team member's information and make sure the changes are reflected on the team roster.
3. Delete an existing team member and make sure they are no longer displayed on the team roster.

If you encounter any issues while running the tests or manual tests, please [open an issue](https://github.com/ash12486/teamProfileGenerator/issues) with a detailed description of the problem.


## License
N/A

## Questions
- Name - Ashlee Huff
- Email - huff.n.ashlee@gmail.com
- Github - https://github.com/ash12486/