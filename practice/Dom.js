// const img = document.querySelector(".hero_image");
// console.dir(img);
// console.log(img.src);
// img.src = "https://www.pexels.com/ru-ru/photo/14939897/https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480"
// img.alt = "cat"

/*
 * Атрибути
 * - get(ім'я-атрибута)
 * - set(ім'я-атрибута)
 * - remove(ім'я-атрибута)
 * - has(ім'я-атрибута)
 */

// console.log(img.hasAttribute)
// const articleEl = document.querySelector(".js-container");

// const product = {
//     name: 'Товар-2',
//     description:
//       'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
//     price: 3000,
//     available: false,
//     onSale: false,
//   }

// articleEl.innerHTML = `<article class="product">
// <h2 class="product__name">Назва</h2>
// <p class="product__descr">Опис</p>
// <p product__pridct>Ціна: 1111 кредитів</p>
// </article>`;

// const targetBtn = document.querySelector('.js-target-btn');
// const addListenerBtn = document.querySelector('.js-add-listener');
// const removeListenerBtn = document.querySelector('.js-remove-listener');

// const products = [
//     {
//         name: 'Товар-2',
//         description:
//             'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
//         price: 3000,
//         available: false,
//         onSale: false,
//     },
//     {
//         name: 'Товар-3',
//         description:
//             'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
//         price: 1500,
//         available: true,
//         onSale: false,
//     },
//     {
//         name: 'Товар-4',
//         description:
//             'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
//         price: 2500,
//         available: false,
//         onSale: false,
//     },
// ];



// const articles = products.map((product) => {
//     return `<article class="product">
//        <h2 class="product__name">${product.name}</h2>
//        <p class="product__descr">${product.description}</p>
//      <p product__pridct>Ціна: ${product.price} кредитів</p>
//       </article>`
// })
// console.log(articles);


// articleEl.innerHTML = articles.join(' ')



const refs = {
    output: document.querySelector('.js-output'),
    clearBtn: document.querySelector('.js-clear'),
  };
  
//  window.addEventListener('keydown', onKeypress)

 function onKeypress(event){
  // console.log('event.code: ', event.code);
  // console.log('event.key: ', event.key);

 }

const closeButton = document.querySelector('[data-action="close-modal"]');
const openButton = document.querySelector('[data-action="open-modal"]');