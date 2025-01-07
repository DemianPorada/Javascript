// // 1
// Напиши функцію logItems(array), яка отримує масив і використовує цикл for,
// який для кожного елемента масиву буде виводити в консоль повідомлення
//  в форматі [номер елемента] - [значення елемента].

function logItems(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(`${i + 1} - ${array[i]}`);
    }
  }
  const items = ['Mango', 'Poly', 'Ajax'];
logItems(items);
 
// // 2
// Напиши скрипт підрахунку вартості гравіювання прикрас.
//  Для цього створи функцію calculateEngravingPrice(message, pricePerWord) 
//  приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова,
//  і повертає ціну гравіювання всіх слів в рядку.

function calculateEngravingPrice(text, costPerWord) {
    const wordsArray = text.split(" ");
    const totalPrice = wordsArray.length * costPerWord;
    return totalPrice;
  }
  const sampleMessage = "приклад гравіювання";
  const wordCost = 20;
  const engravingCost = calculateEngravingPrice(sampleMessage, wordCost);
  console.log(`сума гравіювання ${engravingCost}`);

// 3
// Напиши функцію findLongestWord(string), яка приймає
//  параметром довільний рядок (в рядку будуть тільки слова і прогалини) 
//  і повертає найдовше слово в цьому рядку.
function findLongestWord(text) {
    const wordsArray = text.split(" ");
    let longestWord = wordsArray[0];
    for (const word of wordsArray) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
  }
  console.log(findLongestWord("Завтра першим уроком Правознавство"));

// 4
// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
// Якщо довжина рядка не перевищує 40 символів,функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів
//  і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.

function formatText(text) {
    if (text.length <= 40) {
      return text;
    } else {
      return text.slice(0, 40) + "...";
    }
  }
  const shortText = "короткий рядок";
  const longText = "рядок є довшим за 40 символів і потребує форматування.";
  console.log(formatText(shortText));
  console.log(formatText(longText));
  
//   5
// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок.
// Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово,
//  то функція повертає true, якщо заборонених слів немає функція повертає false.
//   Слова в рядку можуть бути в довільному регістрі.

function checkForSpam(message) {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes("spam") || lowerMessage.includes("sale")) {
      return true;
    } else {
      return false;
    }
  }
  console.log(checkForSpam("це неймовірна розпродаж"));
  console.log(checkForSpam("остерігайтесь спам-листів"));

    