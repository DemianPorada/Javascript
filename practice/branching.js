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
const x1 = 10;
const x2 = 30;
const number = 45;
if(number >= x1 && number <= x2){
    console.log("Число входить в проміжок")
} else if (number < x1 || number > x2){
    console.log("Число не входить в проміжок")
}



