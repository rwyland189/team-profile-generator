const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('checks if each engineer has github', () => {
    const engGithub = "rwyland189";
    const engineer = new Engineer(1, "Becca", "becca@becca.com", engGithub);
    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.getGithub().toBe(engGithub))
})