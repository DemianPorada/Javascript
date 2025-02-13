/*
 * Array.prototype.forEach(callback(currentValue, index, array), thisArg)
 * - Поелементо перебирає оригінальний масив
 * - Нічого не повертає
 * - Замінює класичний for, якщо не потрібно преривати цикл
 */
// const numbers = [5, 10, 15, 20, 25];
// // numbers.forEach(function(number){ })
// numbers.forEach(function(number){ })
// forEach(numbers){
//     for(const number of numbers){
//         callback(5)
//     }
//     for(const number of numbers){
//         callback(5)
//     }
// }

// console.log(numbers)



const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
  ];
//   const playersNames = players.map(function({name}){
//     return name
//   }
// )
// console.log(playersNames)





/*
   * Array.prototype.every()
   * - Поелементо перебирає оригінальний масив
   * - Повертає true якщо всі елементи масива задовільняють умову
   */
/*
   * Array.prototype.some()
   * - Поелементо перебирає оригінальний масив
   * - Повертає true якщо хоча б один елемент масива задовільняє умову
   */
  
 const anyHardcorePlayers = players.every(function(hardcore){
  return players.online
})
console.log(anyHardcorePlayers)

 const isAnyOnline = players.some(function(player){
  return players.online
 })
 console.log(isAnyOnline)

 /*
 * Array.prototype.reduce()
 * - Поелементо перебирає оригінальний масив
 * - Повертає що завгодно 🤯
 * - Замінює все на світі, але використовувати потрібно з розумом
 */

//  const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce(function (acc, number) {
//   console.log('number: ', number);
//   console.log('acc: ', acc);
//   return acc += number
// },0);
// console.log(total);


// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

/*
 * Ведемо статистику тегів
 */
// const tagsStats = allTags.reduce((acc, tag) => {}, {});

// // console.log(tagsStats);

// ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']








const fnA = function () { } //функціональний вираз
function fnB() {} //об'явлення функції

const fnC =(a, b)=> a + b //стрілкова функція

/*
 * Array.prototype.sort(callback(currentEl, nextEl){})
 * - Сортує та ЗМІНЮЄ оригінальний масив
 * - За замовчуванням:
 *    - Сортує за зростанням 
 *    - приводить елементи в рядок і сортує по [Unicode](https://unicode-table.com/en/)
 */

// const numbers = [1, 9, 6, 2, 3];


// const letters = ['b', 'B', 'a', 'A'];

const items = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
 items.sort((currentEl, nextEl) => currentEl.localeCompare(nextEl) )
 console.log(items)