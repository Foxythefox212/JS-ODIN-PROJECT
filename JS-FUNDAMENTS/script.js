let message = "Hello";
// alert(message);
//  O modalitate de a declara variabilele
// let user = "John",
//   age = 20,
//   Message = "Hey";

// Modalitatea cea mai indicata
let user = "John";
let age = 20;
let Message = "Hey";
// We can change the value of variable:
user = "Smith";
age = 25;
Message = "Hey World!";
console.log(user, age, Message);
// Declare 2 variables and copy data from one into the other
let hello = "Hello World!";
let MEssage;
MEssage = hello;

console.log(hello); // Hello World!
console.log(MEssage); // Hello World!
// What can and can't be use to declare name of variable
// Can use $, _, camelCase, PascaleCase,
// Nu se poate incepe o variabila cu numere 3camel-NU, 12John-NU,
// Nu se poate folosi(-)my-Name-NU deoarece (-) Semnul Scaderii considerat
let $ = 5;
let _ = 9;
console.log($ + _); // 14
//JAVASCRIPT II CASE_SENSITIVE  NU= case_sensitive
// Numele variabileleo scris in Engleza

// Const e folosita atunci cand stim sigur ca valoarea nu se schimba
const myBirthday = "02.12.1986";
// Numele Variabilelor ar trebui sa fie curate si sa insemne informatia stocata
const firstName = "Ruxandra";
// TASK-EXERCISES
// 01
let admin;
let NAMe = "Joohnny";
admin = NAMe;
console.log(admin);
// alert(admin); //II BINE FACUT
// 02
const planetWhereBreatheOxigen = "Earth";
let newUser = "Nicoleta Diana";
// console.log(newUser);
// uppercase pt VARIABILE se foloseste pt const care sunt "hard-coded"
//adica atunci cand stii valoarea ex: const BIRTHDAY = "02.12.1986" si
//direct scrisa in cod.
// let a = NaN;
// let b = 5;
// console.log(a + b); //Rezulta NaN;
const lotsOfDecimal = 1.766584958675746364;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;
console.log(twoDecimalPlaces); //1.77
console.log(10 + 7);
console.log(9 * 8);
console.log(60 % 3);

const num1 = 10;
const num2 = 50;
console.log(9 * num1);
console.log(num1 ** 3);
console.log(num2 / num1);

console.log(5 + 10 * 3);
console.log((num2 % 9) * num1);
console.log(num2 + num1 / 8 + 2);
let numb2 = 6;
--numb2;
console.log(numb2);
let numbe1 = 4;
++numbe1;
console.log(numbe1);
let t = 3; // x contains the value 3
let r = 4; // y contains the value 4
t *= r; // x now contains the value 12
// TASK
// Assignment result a corect, b corect, c corect si d gresit
//Asignment result a corect x corect
//Type Conversion 1string,2numar,3-,4number,5number,6string,7string,
//8number,9NaN(number),10string,11number,12gresit,13gresit,14number
//null devine 0 dupa numeric conversion dupa transformare
//undefined devine NaN dupa conversia numerica
//"\t" si "\n" dupa conversie devin empty string care ii 0.
// Fix the addition Put function Number()between prompt and rezult number
// Se mai poate rezolva si punand + in fata la prompt si transformat in unary

let NAME = "Ilya";
console.log(`hello ${1}`); //hello 1
console.log(`hello ${"NAME"}`); // hello NAME
console.log(`hello ${NAME}`); // hello Ilya
//Corect toate 3. YEYYYYY
