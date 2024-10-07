let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors.length); 


// Performing a greeting in the console
function greet(yourName, dog) {
    console.log('hello ' + yourName + ' and ' + dog); 
}

function square(number) {
    return number * number;
}

console.log(square(2));

greet('John', 'Buddy');
greet('Mary');
greet('John', 'Buddy');
greet('Mary', 'Buddy');
