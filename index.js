// import classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// import inquirer
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

// need output dir and path
const OUTPUT_DIR = path.resolve(__dirname, 'output')
const outputPath = path.join(OUTPUT_DIR, 'teamprofile.html');

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
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teammates.push(manager);
            idArray.push(answers.managerId);
            createTeam();            
        });
    }

    // create team
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

    // addEngineer() function
    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What's the engineer's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Enter a name for the engineer.";
                }
            },

            {
                type: "input",
                name: "engineerId",
                message: "What's the engineer's ID?",
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
                name: "engineerEmail",
                message: "What's the engineer's email?",
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
                name: "engineerGithub",
                message: "What's the engineer's GitHub username?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Enter the engineer's GitHub username.";
                }
            }
        ])
        .then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teammates.push(engineer);
            idArray.push(answers.engineerId);
            createTeam();            
        });
    }

    // addIntern() function
    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What's the intern's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Enter a name for the intern.";
                }
            },

            {
                type: "input",
                name: "internId",
                message: "What's the intern's ID?",
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
                name: "internEmail",
                message: "What's the intern's email?",
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
                name: "internSchool",
                message: "What school does the intern attend?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Enter the intern's school.";
                }
            }
        ])
        .then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teammates.push(intern);
            idArray.push(answers.internId);
            createTeam();            
        });
    }

    // build and output total team
    function buildTeam() {
        if(!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, generatePage(teammates), 'utf-8');
    }
    
    // create new team with new manager
    createManager();
}

generateTeam();