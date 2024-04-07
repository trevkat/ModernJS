// for loops

// for(let i = 0; i < 5; i++){
//     console.log('in loop:', i);
// }

// console.log('loop finished');

// const names = ['trevor', 'mario', 'luigi'];

// for(let i = 0; i < names.length; i++){
//     //console.log(names[i]);
//     let html = `<div>${names[i]}</div>`;
//     console.log(html)
// }

// while loops

// const names = ['trevor', 'mario', 'luigi'];

// while(i < 5){
//     console.log('in loop: ', i);
//     i++;
// }

// let i = 0;
// while(i < names.length){
//     console.log(names[i]);
//     i++;
// }

// do while loops

// let i = 5;

// do{
//     console.log('val of i is: ', i);
//     i++;
// }while(i < 5);

// if statements

const age = 25;

if(age > 20){
    console.log('you are over 20 years old!')
}

const ninjas = ['ryu', 'ken', 'scorpion', 'subzero'];

if(ninjas.length > 3){
    console.log('thats a lot of ninjas');
}

const password = 'pass';

if(password.length >= 12){
    console.log('that password is strong');
} else if (password.length >= 8){
    console.log('that password is long enough');
} else {
    console.log('you need a longer password');
}
