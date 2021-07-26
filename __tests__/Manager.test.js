const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('checks if each manager has office number', () => {
    const manOfficeNum = "189";
    const manager = new Manager(1, "Becca", "becca@becca.com", manOfficeNum);
    expect(manager.officeNumber).toEqual(expect.any(String));
    expect(manager.getOfficeNumber().toBe(manOfficeNum))
})

test('checks manager role', () => {
    const manRole = "Manager";
    const manager = new Manager(1, "Becca", "becca@becca.com");
    expect(manager.getRole()).toBe(manRole)
})