const message = 'hello js';

const letter = message[1];
console.log(letter);

// Як глянути довжину рядка?
const mesLengst = message.length;
console.log(mesLengst);

// знайдемо index останнього елемента  рядку
const LastIndex = message.length - 1;
console.log(LastIndex);

// Знайдемо останню букву по індексу
const lastletter = message[LastIndex];
console.log(lastletter);

// Конкатенація рядків (об'єдання)
const FriendName = 'Masha'; 
const FriendAge = '16 years';
const info = FriendName + "is" + FriendAge;
console.log(info);
console.log(Number("7")+7);
console.log(7 + 3 + '7');
console.log(7 + '7' + 3);
const infomessage = "myfriend + ${FriendName} is + ${FriendAge}";
console.log(infomessage);
