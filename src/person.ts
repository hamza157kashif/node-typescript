export class Person {
    public firstname:string;
    public age:number;

    constructor(firstname:string,age:number){
        this.firstname=firstname;
        this.age=age;
    }

    greetings():void{
        console.log('Greetings from',this.firstname); 
    }
}
//let p=new Person('Hamza',21);
//p.greetings();

// class employee extends Person{

// }
