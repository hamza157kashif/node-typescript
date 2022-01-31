export class Person {
    constructor(firstname, age) {
        this.firstname = firstname;
        this.age = age;
    }
    greetings() {
        console.log('Greetings from', this.firstname);
    }
}
//let p=new Person('Hamza',21);
//p.greetings();
// class employee extends Person{
// }
