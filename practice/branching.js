// Розгалуження if 
// if ( 2 < 3){
//     console.log("Цек код виконається!")
// }
// console.log("Код після if");

// // розгалуження if і else
// const yourAge = prompt("скільки вам років?");
// console.log(yourAge);
// if (yourAge >= 18){
//     alert("Ви вже дорослий!")
// }
// else  {
//     alert("Вам ще немає 18 років!")
// }

// Напиши скрипт перевірки підписки користувачапід час доступу до контенту.
//  Є три типи підпистки: free, pro та vip. Отримати доступ можуть тільки pro та vip.
// const subscribe = prompt("Яка у вас підписка?").toLowerCase();
// console.log(subscribe);
// if (subscribe === "free".toLowerCase()){
//     alert("В вас немає доступу до цього контенту!")
// } else if (subscribe === "pro".toLowerCase()){
//     alert("Насолоджуйтесь контентом!")
// } else if (subscribe === "VIP".toLowerCase()){
//     alert("Насолоджуйтесь контентом!")
// } else {
//     alert("Введіть правильний тип підписки!")
// }
// Тернарний оператор це скорочений синтаксис if  else
// він пишеться : 
// Умова : інструкція яка повинна виконатись при true при умові : інструкція яка повинна виконатись при false  в умові
// const savedPassword = "uopq8r90r";
// const password = prompt("Введіть пароль!");
// if(savedPassword === password){
//     alert("Ласкаво просимо!")
// } else{
//     alert("Ви ввели неправильний пароль!")
// }
// savedPassword === password ? alert("Ласкаво просимо!") : alert("Ви ввели неправильний пароль!");
// if(savedPassword === password){
//     alert("Ласкаво просимо!")
// } else if (savedPassword !== password){
//     alert("Ви ввели неправильний пароль!")
// } else {
//     alert("Ви не ввели пароль!")
// }
// const whatStaus = promprt("Який у вас тип підписки?")
// if(whatstaus === "free"){
//     alert("у вас підписка free!")
// } else if(whatStaus === "Pro"){
//     alert("у вас підписка Pro!")
// } else if(whatStaus === "VIP"){
//     alert("у вас підписка VIP!")
// } else {
//     alert("Ви не є нашим користувачем!")
// }

// Інструкція switch (що ми будемо порівнювати){
//     case з чим порівнюємо (значення):
//     Інструкція яку повинно виконати при true
//     break
//     case з чим порівнюємо (значення):
//     Інструкція яку повинно виконати при true
//     break
//     default
//     Інструкція якщо в всіх кейсах false
// }
// напиши скрипт входження числа у відрізок зазначений в х1 та х2.
// від х1 до х2
// до х1 або після х2
// const x1 = 10;
// const x2 = 30;
// const number = 22;
// if(number >= x1 && number <= x2){
//     console.log(`Число ${number} входить в проміжок від ${x1} до ${x2}`)
// } else if (number < x1 || number > x2){
//     console.log(`Число ${number} не входить в проміжок `)
// }
// Напиши скрипт обробки покупки в магазині. 
//   - Баланс користувача зберігається в змінній balance - отримати з інпуту
//   - Сумма покупки зберігається в змінній payment - отримати з інпуту
//   - Перед перевіркою вивести повідомлення на екран:
//   «Загальна вартість замовлення [число] кредитів. Перевіряємо кількість 
//   доступних коштів на рахунку»
//  - Якщо сума покупки не перевищує баланс:
//      - Відняти з балансу суму покупки
//    - Вивести повідомлення «На рахунку залишилося [число] кредитів»
// - Якщо сума покупки перевищує баланс:
//     - Вивести повідомлення «На рахунку недостатньо коштів для проведення операції!»
//  - В кінці вивести повідомлення «Операція завершена»
// let balance = prompt("Введіть ваш баланс!")
// const payment = prompt("Сума покупки")

// Напиши скрит підрахунку суми покупки зі знижкою в залежності від витраченої суми за весь час (партнерська програма).
// Користувач вводить в інпут сумму витрачену в даному магазині і отримує розмір знижки як результат.
//  - Загальна сума витрачених коштів зберігається в змінній totalSpent
//  - Сума поточного платежа зберігається в змінній payment
//  - Знижка зберігається в змінній discount
// - Якщо витрачено від [100 до 1000) - бронзовий партнер, знижка 2%
//  - Якщо витрачено від [1000 до 5000) - срібний партнер, знижка 5%
//  - Якщо витрачено більше [5000 - золотий партнер, знижка 10%
//  - Якщо витрачено менше 100) - не партнер, знижка 0%

//  - В результаті вивести повідомлення
//  «Оформляемо замовлення на суму [сума] зі знижкою [знижка]%»

// 'Бронзовий партнер, знижка 2%'
// 'Срібний партнер, знижка 5%'
// 'Золотий партнер, знижка 10%'
// 'У вас ще немає партнерської знижки'

// <!- Завдання 1: Кнопка і текстове поле -->
// <h2>1. Зміна тексту кнопки</h2>
// <input type="text" id="myInput" placeholder="Введи текст">
// <button id="myButton">Натисни мене</button>

// <!-- Завдання 2: Зображення -->
// <h2>2. Зміна зображення</h2>
// <img id="myImage" src="old-image.jpg" alt="старе зображення" width="200">

// <!-- Завдання 3: Посилання і зображення -->
// <h2>3. Посилання та alt до зображення</h2>
// <a id="myLink" href="https://example.com" target="_blank">Перейти на сайт</a><br>
// <img id="myPic" src="image.jpg" width="200">

// <!-- Завдання 4: Список -->
// <h2>4. Список елементів</h2>
// <ul>
//   <li>Елемент 1</li>
//   <li>Елемент 2</li>
//   <li>Елемент 3</li>
// </ul>