import { Person } from "./person";
export class Employee extends Person{
    private department:string;
    private salary:number;

    constructor(name:string,age:number,dept:string,salary?:number){
        super(name,age);
        this.department=dept;
        if(dept==='Sales'){
            this.salary=50000;
        }
        else if (dept==='Admin') {
            this.salary=20000
            
        } else {
            this.salary=5000
        }
    }

    getSalary():number{
        return this.salary;
    }

}
