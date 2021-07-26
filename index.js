// import classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// import inquirer
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const generatePage = require('./src/template');
const teammates = [];
const idArray = [];

function generateTeam() {
    // create manager prompt
    function teamManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What's the manager's name?",
                validate: answer => {
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
                validate: answer => {
                    const checkId = answer.match(/^[1-9]\d*$/);
                    if(checkId) {
                        return true;
                    }
                    return "Enter a valid ID number.";
                }
            },

            {
                type: "input",
                name: "managerEmail",
                message: "What's the manager's email?",
                validate: answer => {
                    const checkEmail = answer.match(/\S+@\S+\.\S+/);
                    if(checkEmail) {
                        return true;
                    }
                    return "Enter a valid email.";
                }
            },

            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What's the manager's office number?",
                validate: answer => {
                    const checkOffNum = answer.match(/^[1-9]\d*$/);
                    if(checkOffNum) {
                        return true;
                    }
                    return "Enter a valid office number.";
                }
            }
        ])
        .then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber)
            teammates.push(manager);
            idArray.push(answers.managerId);
            createTeam();            
        });
    }

    function createTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "memberRole",
                message: "Select a team member role to add:",
                choices: [
                    "Engineer",
                    "Intern",
                ]
            }
        ])
        .then(userChoice => {
            switch (userChoice.memberRole) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default: buildTeam();
            }
        });
    }
}

const addTeamMember = memberData => {
    // create member info array if it doesn't exist
    if (!memberData.info) {
        memberData.info = [];
    }
    return inquirer
        .prompt([
            {
                
            }
        ])
}

// function generateTeam()

fs.writeFileSync(path, generatePage(teammates), 'utf-8')