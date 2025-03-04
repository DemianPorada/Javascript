const img = document.querySelector(".hero_image");
console.dir(img);
console.log(img.src);
img.src = "https://www.pexels.com/ru-ru/photo/14939897/https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480"
img.alt = "cat"

/*
 * Атрибути
 * - get(ім'я-атрибута)
 * - set(ім'я-атрибута)
 * - remove(ім'я-атрибута)
 * - has(ім'я-атрибута)
 */

// console.log(img.hasAttribute)