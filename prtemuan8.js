//// Mobile Application Development A \\\\
// Claudio Mambu \\

//Deskrupturisasi

//Array (cara untuk ambil sebagian item, deklarasi & assignment terpisah, default value, rest operator)

//let age
// const arrPerson =['john', 'doe', 33, true, 'Minahasa Utara'];

//const firstName = arrPerson[0];
//const lastName = arrPerson[1];
//const age = arrPerson[2];
//const isMarried = arrPerson[3];

//let [, , age, isMarried, address = "Manado" = arrPerson];

//console.log(age, isMarried, address);

//let [firstName, lastName, ...rest] = arrPerson;

//console.log(firstName, lastName);
//console.log(rest);

//Object
//let firstName, lastName;
// const objPerson = {
//     firstName : 'John',
//     lastName : 'Doe',
//     age : 33, 
//     isMarried : true,
//     address : "Minahasa Utara",
// };

//const firstName = objPerson.firstName;
//const lastName = objPerson.lastName;
//const age = objPerson.age;
//const isMarried = objPerson.isMarried;

//const { age : umur } = objPerson;

//console.log (umur);

//({firstName, lastName, ...rest} = objPerson);

//console.log(firstName, lastName, rest);

// const display = ({ firstName, lastName }) => 
//     `Hello nama saya ${firstName} ${lastName}`;

// console.log (display(objPerson));