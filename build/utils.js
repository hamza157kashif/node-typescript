import { Employee } from './employee';
import * as readlineSync from 'readline';
let rl = readlineSync.createInterface({
    input: process.stdin,
    output: process.stdout
});
var name = '';
rl.question('Enter your name', (answer) => {
    name = answer;
});
let p = new Employee('Hamza', 21, 'Sales');
p.greetings();
console.log('Salary=', p.getSalary());
