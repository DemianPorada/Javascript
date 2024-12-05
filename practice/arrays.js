// const cities = ["Хельсінки", "Київ", "Берлін", "Софія"];
// console.log(cities);
// cities [1] = "Лондон";
// cities [3] = "Буковель"
// console.log(cities);
// cities [6] = "Львів";
// console.log(cities [6]);
// console.log(cities);

// const userNames = ["Dima", "Dina", "Demian", "Denys"];
// console.log(userNames);

// for(let i = 0; i < userNames.length; i += 1) {
//     console.log(i);
//     console.log(userNames[i] += '!')
// }

// for(let i = 0; i < cities.length; i += 1){
//     console.log(cities[1]);
// }
// const fruits = ["apple", "banan", "orange"]
// console.log(fruits[0].toLowerCase);

// const cities = ["Kharkiv", "Lviv", "Kyiv", "Dnipro", "Poltava", "Zhytomyr"];
// cities[0]
// cities[1]
// cities[2]
// cities[3]
// cities[4]
// cities[5]
// for(const i = 0; i <= cities.length - 1;i +=1){

// }
// for(let i = 0; i <= cities.length - 1;i +=1){
//     cities[0] += "!"
//     console.log(i);
//     console.log(cities[i]);
// }
// cities[0] = "Kharkiv!"
// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let summa = 0;
// for(const plural of cart){
//     summa += plural;
// }

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

let total = 0;
for( const number of numbers){
    if(number % 2 === 0){
        total += number;
    }
}
console.log(total);