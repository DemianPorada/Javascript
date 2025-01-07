/* ЗАВДАННЯ ПО МЕТОДАМ МАСИВУ */

/*
 * Напиши скрипт, який об"єднує всі елементи массива в один рядок.
 * Елементів може бути довільна кількість.
 * Нехай елементи массива  в рядку будут розділені комою.
 */
const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

let string = '';
for (const friend of friends){
    string += friend + ","
};
console.log(string);
const string2 = friends.join(",");
console.log(string2);

// Повинно вийти 'Mango,Poly,Kiwi,Ajax'

/*
 * Працюємо з колекцією карток в trello
 * - Метод splice()
 * - Видалити
 * - Додати
 * - Оновити
 */

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
  ];
  
  console.table(cards);  

  /*
   * Видалення (по індексу), метод indexOf()
   */
  const cardToRemove = 'Карточка-3';
  const indexOfcardToRemove = cards.indexOf( cardToRemove)
   console.log(cards.indexOf(cardToRemove));
    cards.splice(1, 2);
    console.log(cards);
  

  /*
   * Додавання (по індексу)
   */
  
const cardToInsert = 'Карточка-6';
const lastIndex = cards.length;
cards.splice(lastIndex, 0, cardToInsert);
console.log(cards);

  /*
   * Оновлення (по індексу)
   */
  const cardToUpdate = 'Карточка-4';
const Num4Card = cards.indexOf(cardToUpdate);
cards.splice(Num4Card, 1, "kartochka 4");
console.log(cards);