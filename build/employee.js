import { Person } from "./person";
export class Employee extends Person {
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
