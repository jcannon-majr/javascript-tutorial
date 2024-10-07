let name = 'John';
console.log(name);

// Variables cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number
// Cannot contain a space or hyphen
// Case sensitive. Start with a lowercase letter and then all cap starts after 

let firstName = 'Jamie';
let lastName = 'Cannon';
console.log(firstName, lastName);

let interestRate = 0.3;
interestRate = 6;
console.log(interestRate);

//Constant cannot change 
const FedRate = 0.3;

// Primitive Types***
// Primitives - value types (Strings, Numbers, Boolean, null, undefined)
// Reference Types 

let myName = 'Jamie'; // String Literal 
let age = 30; // Number Literal
let isApproved = true; // Boolean Literal 
let address; //undefined is a type and a value 
let bank = null; // null is used to clear the value of a variable

let person = {
    birthday: 'November 11th',
    mood: 'Happy',
};

// Dot Notation
person.birthday = 'November 12th';

// Bracket Notation
person['birthday'] = 'November 13th';

console.log(person);