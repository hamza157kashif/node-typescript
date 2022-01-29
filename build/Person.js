"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(firstname, age) {
        this.firstname = firstname;
        this.age = age;
    }
    Person.prototype.greetings = function () {
        console.log('Greetings from', this.firstname);
    };
    return Person;
}());
exports.Person = Person;
//let p=new Person('Hamza',21);
//p.greetings();
// class employee extends Person{
// }
