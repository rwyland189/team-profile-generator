// import classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const template = require('./src/template');
const teammates = [];

function genTeam() {
    // create manager prompt
    function teamManager() {
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
            },

            {
                type: "input",
                name: "managerId",
                message: "What's the manager's ID?",
                validate = answer => {
                    const checkId = answer.match(/^[1-9]\d*$/);
                    if(checkId) {
                        return true;
                    }
                    return "Enter a valid ID number.";
                },
            },

            {
                type: "input",
                name: "managerEmail",
                message: "What's the manager's email?",
                validate = answer => {
                    const checkEmail = answer.match(/\S+@\S+\.\S+/);
                    if(checkEmail) {
                        return true;
                    }
                    return "Enter a valid email.";
                }
            },

            

        ]).then(answers => {
            const manager = new Manager(answers.managerName)
            teammates.push(manager)
            
        })
    }
}
// inquirer

// function generateTeam()

fs.writeFileSync(path, template(teammates), 'utf-8')