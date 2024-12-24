// function getSum (a, b){
//     console.log( a + b);
// }
// getSum (1, 99)
// getSum (10, 25)
// getSum (3, 4)












// const numbers = [51, 18, 13, 24, 7, 85, 19];

// function findSmallesNumber(numbers){
//     let smallestNumber = numbers[0]
//     for (let i = 0; i < numbers.length; i+=1) {
//         if(numbers[i] < smallestNumber ){
//             smallestNumber = numbers[i]
//         }
//     }
// }

// findSmallesNumber(numbers)()

// console.log(sum(2, 3));

// function sum (a, b){
//     return a+b;
// }

// const sum1 = function (a, b){
//     return a+b
// }
// console.log(sum1(2, 3));

// const repeatLog = function(n){
//     for(let i = 0; i < n; i +=1)
// }



/*
 * ВИКЛИЧИ НАСТУПНУ ФУНКЦІЮ
*/
function greetClient() {

 }
greetClient()

function logName(){
    console.log("Demian");
}
logName();
/**
 * Оголоси функцію sayHi. У тілі функції sayHi додай console.log() з рядком 
 * "Hello, this is my first function!".
 * Після оголошення виклич функцію sayHi.
 */
function sayhi(myName = "Demian"){
    console.log("Hello, ${'myName'}")
}
/**
 * У коді нижче, як називаються значення 5 і 8 функції, що передаються під час 
 * її виклику?
 */
function calculate(x, y) {}

calculate(5, 8);

/**
 * Функція add повинна вміти додавати три числа і виводити результат у консоль. 
 * Оголоси для функції add три параметри: a, b і c, які будуть отримувати 
 * значення з аргументів, під час її виклику.
 * Доповни console.log() таким чином, щоб він логував рядок "Addition result 
 * equals <result>", де <result> - це сума переданих чисел.
 */

function add(a, b, c) {  
    console.log(`addition result equals $(a + b + c)`);
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

/**
 * Яке значення поверне виклик функції в коді нижче?
 */

// function makeMessage(username) {
//   console.log(`Hello ${username}`);
// }

// const result = makeMessage("Jacob");
// console.log(result);

/**
 * Доповни код функції add таким чином, щоб вона повертала результат додавання 
 * значень трьох параметрів: a, b і c.
 */
function add(a, b, c) {
    return a + b + c
}
const answer = add(10, 25, 5);
console.log(answer);
/**
 * Яким буде порядок логів в інструментах розробника?
 */
console.log("A");

function logStuff() {
  console.log("B");
}

console.log("C");

logStuff();

console.log("D");
