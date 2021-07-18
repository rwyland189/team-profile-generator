const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('checks if each employee has an id', () => {
    const empId = 1;
    const employee = new Employee(empId);
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.getId().toEqual(empId))
})


