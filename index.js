
import inquirer from 'inquirer';

const response = await inquirer.prompt([
  {
    type: "input",
    message: "What is this managers name?",
    name: "name"
  }
]);

console.log(response.name);