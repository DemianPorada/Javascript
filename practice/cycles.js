/*
 * Напиши скрипт який порахує суму всіх парних чисел,
 * які входять в діапазон чисел в змінних від min до max.
 * Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в 
 * ньому 2 парних числа - 2 та 4, їх сума 6.
 */
// 1.створити змінні max, min, total
const min = 1;
const max = 9;
let total = 0;
// 2.запустити цикл в діапазоні від min до max
for(let i = min; i <= max; i += 1){
// 3.на кожній ітерації зробити перевірку на парність числа
    if (i % 2 === 0){
        console.log('парне число: ', i);
        total +=1;
    }
}
console.log(total);
// 4.якщо число парне додати його в total


for (let i = 0; i <= 10; i +=1){
    console.log(i);
    if(i === 5){
        console.log("Зупиняємо виконання ітерації" , i);
        continue;
        console.log("Зупиняємо цикл" , i);
    }
}
for (let i = 1; i <= 5; i +=2){
    console.log(i);
}

// 2. Написати скрипт який буде перевіряти середній бал успішності учня.
// Прервати роботу циклу, коли середній бал буде меньше 7.
const minMarks = 5;
const maxMarks = 12;
for (let i = maxMarks ; i >= 5 ; i -= 1){
    console.log(i)
if (i < 7){
    console.log(i)
    break;
}
}