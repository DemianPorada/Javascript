// Приведення типів 
console.dir(Number)
console.dir(String)
console.dir(Boolean)
const number = 9;
const result = Boolean(number)
console.log(result);
console.log(Boolean("qwerty"))
console.log(Boolean(" "))
console.log(Boolean(0))
console.log(Boolean(null))
console.log(Boolean(undefined))

// Логічний оператор та (&&) шукає останнє true серед умови 
// Якщо хоча б одга умова false то вернеться false
console.log(2 && 7 && "hello js" && 10);

// логічний оператор або (||) шукає перше true, коли знаходить перше true наступні умови не перевіряє
console.log(12 || "hello" || null || undefined);
const age = prompt("Скільки вам років? Введіть свій вік");
console.log(age >= "18" && "Маєте паспорт" && " Ви дорослий");

// Логічний оператор не (!) 
console.log(!(5 > 3));

