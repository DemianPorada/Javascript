// const message = 'hello js';

// const letter = message[1];
// console.log(letter);

// // Як глянути довжину рядка?
// const mesLengst = message.length;
// console.log(mesLengst);

// // знайдемо index останнього елемента  рядку
// const LastIndex = message.length - 1;
// console.log(LastIndex);

// // Знайдемо останню букву по індексу
// const lastletter = message[LastIndex];
// console.log(lastletter);

// // Конкатенація рядків (об'єдання)
// const FriendName = 'Masha'; 
// const FriendAge = '16 years';
// const info = FriendName + "is" + FriendAge;
// console.log(info);
// console.log(Number("7")+7);
// console.log(7 + 3 + '7');
// console.log(7 + '7' + 3);
// const infomessage = "myfriend + ${FriendName} is + ${FriendAge}";
// console.log(infomessage);

const myString = "I love Ukraine!";
const mySymbol = myString [8];
console.log(mySymbol);
console.log("I love Ukraine!"[8]);

// Методи для роботи з рядками
// синтаксис : рядок, назва методу()

console.log("I love Ukraine!" .toLowerCase());
const bigMessage = myString.toUpperCase();
console.log(bigMessage);

// Мнтод includes
// Перевіряє чи містить рядок певний символ 
const containsletter = myString.includes("o");
console.log(containsletter);

// Метод indexOf
// дивиться під яким індексом знаходиться символ у рядку
const index = myString.indexOf("e");
console.log(index);
console.log("index".indexOf("e"));
console.log("qwerty".indexOf("z"));

// Метод trim 
// Обрізає пробіли на початку або в кінці рядка
const message = "   Qwerruiu     ";
console.log(message.length);
const trimMessage = message.trim();
console.log(trimMessage.length);
console.log(message);
console.log(trimMessage);