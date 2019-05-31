// JS Objects
// Creating an object

const dog = {
// keys are always strings.
    age: 10, 
    firstName: 'Jujube', 
    lastName: 'Burlybottom',
    toys: [
        'Amazon delivery Box',
        'Pork Leg',
        'Rubber Ducky',
        'Ball'
    ],
    'fur-color': 'brown',
    2: 'number 2',
};
//use dot notation to call objects
console.log(dog.age); //10
console.log(dog["age"]); //10
console.log(dog.toys[1]); //'Pork leg'
console.log(dog.toys[2]); //'Rubber Ducky'
console.log(dog["fur-color"]); //'brown'
//nmumbers can be called using math
console.log(dog[1+1]); //'number 2'

// new values can be added to objects
dog.middleName = 'Pemberton';
console.log(dog.middleName);
console.log(dog.toys);