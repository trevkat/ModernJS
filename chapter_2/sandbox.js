// strings
console.log('hello, world');

let email = 'trevor@email.com';
console.log(email);

// string concatenation
let firstName = 'John';
let lastName = 'Doe';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characters
console.log(fullName[0]);
console.log(fullName[1]);
console.log(fullName[2]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);

// common string methods - lastIndexOf, slice, substring, etc

let emailTwo = 'mario@email.com';

let resultTwo = email.lastIndexOf('o');

console.log(resultTwo);

let resultThree = emailTwo.slice(0, 5);
console.log(resultThree);

let resultFour = emailTwo.substring(0, 10);
console.log(resultFour);

let resultFive = emailTwo.replace('m', 'w'); // updates first character from m to w which will be mario >> wario
console.log(resultFive);

