// // 1. 
//   const input = document.getElementById("myInput");
//   const button = document.getElementById("myButton");

//   button.addEventListener("click", () => {
//     button.textContent = input.value;
//   });

// 2.
//   const image = document.getElementById("myImage");
//   image.src = "new-image.jpg"; 

// 3.

//   const link = document.getElementById("myLink");
//   const img = document.getElementById("myPic");

//   link.href = "https://new-url.com";
//   img.setAttribute("alt", "Опис зображення");

// 4.

//   const firstItem = document.querySelector("ul li");
//   firstItem.textContent = "Новий текст для першого елемента";

 // Завдання 1: Змінюємо текст кнопки на введений у текстове поле
 const input = document.getElementById("myInput");
 const button = document.getElementById("myButton");
 button.addEventListener("click", () => {
   button.textContent = input.value;
 });

 // Завдання 2: Змінюємо зображення (src)
 const image = document.getElementById("myImage");
 image.src = "new-image.jpg"; // заміни на справжній шлях до нового зображення

 // Завдання 3: Змінюємо посилання і додаємо alt до зображення
 const link = document.getElementById("myLink");
 const img = document.getElementById("myPic");
 link.href = "https://new-url.com"; // заміни на потрібну адресу
 img.setAttribute("alt", "Це опис зображення");

 // Завдання 4: Змінюємо перший елемент списку
 const firstItem = document.querySelector("ul li");
 firstItem.textContent = "Новий текст для першого елемента";