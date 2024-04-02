
var i=1
console.log("Problem : ",i++);

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)  // output the first element 'Tesla'
console.log(otherRandomCar) // output the next element 'Mercedes'


console.log("Problem : ",i++);

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
//console.log(name); // output error because name is not defined
console.log(otherName);


console.log("Problem : ",i++);

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); // print the password 12345
console.log(hashedPassword); // output undefined because hashedPassword is not defined person = {name:'phil smith',age:47,height:'6 feet'}


console.log("Problem : ",i++);

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);   // return false because value of first isequal 2 and value of second isequal 5
console.log(first == third);  // return true because value of first isequal 2 and value of third isequal 2 


console.log("Problem : ",i++);

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);  // return value
console.log(secondKey); // return list  [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // return 1 the first value of list 
console.log(willThisWork); // return 5 the second value of list 

