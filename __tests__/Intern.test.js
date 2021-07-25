const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('checks if each intern has affiliated school', () => {
    const intSchool = "UW Madison";
    const intern = new Intern(1, "Becca", "becca@becca.com", intSchool);
    expect(intern.school).toEqual(expect.any(String));
    expect(intern.getSchool().toBe(intSchool))
})

test('checks intern role', () => {
    const intRole = "Intern";
    const intern = new Intern(1, "Becca", "becca@becca.com");
    expect(intern.getRole()).toBe(intRole)
})