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
const subscribe = prompt("Яка у вас підписка?").toLowerCase();
console.log(subscribe);
if (subscribe === "free".toLowerCase()){
    alert("В вас немає доступу до цього контенту!")
} else if (subscribe === "pro".toLowerCase()){
    alert("Насолоджуйтесь контентом!")
} else if (subscribe === "VIP".toLowerCase()){
    alert("Насолоджуйтесь контентом!")
} else {
    alert("Введіть правильний тип підписки!")
}

