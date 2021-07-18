const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('checks if each employee has an id', () => {
    const empId = 1;
    const employee = new Employee(empId);
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.getId().toEqual(empId))
})

test('checks if each employee has a name', () => {
    const empName = "Becca";
    const employee = new Employee(empName);
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.getName().toBe(empName))
})

test('checks if each employee has an email', () => {
    const empEmail = "becca@becca.com";
    const employee = new Employee(empEmail);
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.getEmail().toBe(empName))
})

test('checks employee role', () => {
    const empRole = "Employee";
    const employee = new Employee(1, "Becca", "becca@becca.com");
    expect(employee.getRole()).toBe(empRole)
})