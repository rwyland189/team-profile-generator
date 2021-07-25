// import classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const temp = require('./src/template');
const teammates = [array of teammates]

function genTeam() {
    function teamManager {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What's the manager's name?",
                validate = answer => {
                    if(answer !== "") {
                        return true;
                    }
                    return "Enter a name for the manager."
                }
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName)
            teammates.push(manager)
            
        })
    }
}
// inquirer

// function generateTeam()

fs.writeFileSync(path, temp(teammates), 'utf-8')