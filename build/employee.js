"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var person_1 = require("./person");
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, dept, salary) {
        var _this = _super.call(this, name, age) || this;
        _this.department = dept;
        if (dept === 'Sales') {
            _this.salary = 50000;
        }
        else if (dept === 'Admin') {
            _this.salary = 20000;
        }
        else {
            _this.salary = 5000;
        }
        return _this;
    }
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    return Employee;
}(person_1.Person));
exports.Employee = Employee;
