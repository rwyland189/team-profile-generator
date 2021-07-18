const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // super is pulling from the Employee class
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        return 'Engineer';
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;