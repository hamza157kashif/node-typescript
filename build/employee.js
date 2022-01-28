"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const person_1 = require("./person");
class Employee extends person_1.Person {
    constructor(name, age, dept, salary) {
        super(name, age);
        this.department = dept;
        if (dept === 'Sales') {
            this.salary = 50000;
        }
        else if (dept === 'Admin') {
            this.salary = 20000;
        }
        else {
            this.salary = 5000;
        }
    }
    getSalary() {
        return this.salary;
    }
}
exports.Employee = Employee;
