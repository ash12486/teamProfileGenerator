import { prompt } from 'inquirer';
import fs from 'fs';

import Manager from './lib/Manager.js';
import Engineer from './lib/Engineer.js';
import Intern from './lib/Intern.js';

const teamMembers = [];

function startApp() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'managerName',
      message: 'Enter the name of the team manager:'
    },
    {
      type: 'input',
      name: 'managerId',
      message: 'Enter the employee ID of the team manager:'
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: 'Enter the email address of the team manager:'
    },
    {
      type: 'input',
      name: 'managerOfficeNumber',
      message: 'Enter the office number of the team manager:'
    }
  ]).then(function(managerData) {
    const manager = new Manager(managerData.managerName, managerData.managerId, managerData.managerEmail, managerData.managerOfficeNumber);
    teamMembers.push(manager);
    addTeamMember();
  });
}

function addEngineer() {
  prompt([
    {
      type: 'input',
      name: 'engineerName',
      message: 'Enter the name of the engineer:'
    },
    {
      type: 'input',
      name: 'engineerId',
      message: 'Enter the employee ID of the engineer:'
    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: 'Enter the email address of the engineer:'
    },
    {
      type: 'input',
      name: 'engineerGithub',
      message: 'Enter the GitHub username of the engineer:'
    }
  ]).then(function(engineerData) {
    const engineer = new Engineer(engineerData.engineerName, engineerData.engineerId, engineerData.engineerEmail, engineerData.engineerGithub);
    teamMembers.push(engineer);
    addTeamMember();
  });
}

function addIntern() {
  prompt([
    {
      type: 'input',
      name: 'internName',
      message: 'Enter the name of the intern:'
    },
    {
      type: 'input',
      name: 'internId',
      message: 'Enter the employee ID of the intern:'
    },
    {
      type: 'input',
      name: 'internEmail',
      message: 'Enter the email address of the intern:'
    },
    {
      type: 'input',
      name: 'internSchool',
      message: 'Enter the school of the intern:'
    }
  ]).then(function(internData) {
    const intern = new Intern(internData.internName, internData.internId, internData.internEmail, internData.internSchool);
    teamMembers.push(intern);
    addTeamMember();
  });
}

function addTeamMember() {
  prompt([
    {
      type: 'list',
      name: 'teamMemberType',
      message: 'Select the type of team member to add:',
      choices: [
        'Engineer',
        'Intern',
        'Finish building my team'
      ]
    }
  ]).then(function(choiceData) {
    switch (choiceData.teamMemberType) {
      case 'Engineer':
        addEngineer();
        break;
      case 'Intern':
        addIntern();
        break;
      default:
        generateHtml();
    }
  });
}

function generateHtml() {
  const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>Team Roster</title>
      <style>
        /* CSS styling goes here */
      </style>
    </head>
    <body>
      <header>
        <h1>My Team</h1>
      </header>
      <main>
        <section>
          <h2>Manager</h2>
          <ul>
            <li>Name: ${teamMembers[0].getName()}</li>
            <li>ID: ${teamMembers[0].getId()}</li>
            <li>Email: <a href="mailto:${teamMembers[0].getEmail()}">${teamMembers[0].getEmail()}</a></li>
            <li>Office Number: ${teamMembers[0].getOfficeNumber()}</li>
          </ul>
        </section>
        ${generateTeamMembersHtml()}
      </main>
    </body>
  </html>
  `;

  writeFile('team.html', html, function(err) {
    if (err) throw err;
    console.log('Team roster has been generated!');
  });
}

function generateTeamMembersHtml() {
  let html = '';

  for (let i = 1; i < teamMembers.length; i++) {
    html += `
    <section>
      <h2>${teamMembers[i].getRole()}</h2>
      <ul>
        <li>Name: ${teamMembers[i].getName()}</li>
        <li>ID: ${teamMembers[i].getId()}</li>
        <li>Email: <a href="mailto:${teamMembers[i].getEmail()}">${teamMembers[i].getEmail()}</a></li>
        ${generateTeamMemberSpecificInfoHtml(teamMembers[i])}
      </ul>
    </section>
    `;
  }

  return html;
}

function generateTeamMemberSpecificInfoHtml(teamMember) {
  switch (teamMember.getRole()) {
    case 'Engineer':
      return `<li>GitHub: <a href="https://github.com/${teamMember.getGithub()}" target="_blank">${teamMember.getGithub()}</a></li>`;
    case 'Intern':
      return `<li>School: ${teamMember.getSchool()}</li>`;
    default:
      return '';
  }
}