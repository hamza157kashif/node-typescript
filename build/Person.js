"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(firstname, age) {
        this.firstname = firstname;
        this.age = age;
    }
    greetings() {
        console.log('Greetings from', this.firstname);
    }
}
exports.Person = Person;
//let p=new Person('Hamza',21);
//p.greetings();
// class employee extends Person{
// }
