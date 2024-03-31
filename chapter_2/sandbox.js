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

//let result = fullName.toLowerCase();
////console.log(result, fullName);

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

// ----------------------------------------------------- //


// numbers

let radius = 10;
const pi = 3.14;

console.log(radius, pi);

// math operators +, -, *, /, **, %

//console.log(10 / 2);
//let result = radius % 3;
//let result = pi * radius**2;


// order of operation - B I D M A S

//let result = 5 * (10-3)**2;

//console.log(result);

// let likes = 10;

// likes = likes + 1;
// likes++; // same logic as above
// likes += 10;
// likes *= 2;

// console.log(likes);


// concatenate numbers

// let result = 'the blog has ' + likes + ' likes';
// console.log(result);

// ----------------------------------------------------- //

// template strings
const title = 'Best reads of 2024';
const author = 'mario';
const likes = 30;

// concatenation way
//let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
//console.log(result);

// template string way
let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

// creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
`;

    console.log(html);

