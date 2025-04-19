// 1.
document.addEventListener('DOMContentLoaded', () => {
  const categories = document.querySelectorAll('#categories .item');
  console.log(`У списку ${categories.length} категорії.`);

  categories.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const itemsCount = category.querySelectorAll('ul li').length;
    console.log(`Категорія: ${title}`);
    console.log(`Кількість елементів: ${itemsCount}`);
  });
});


// 2.
  document.addEventListener('DOMContentLoaded', () => {
    const ingredients = [
      'Картопля',
      'Гриби',
      'Часник',
      'Помідори',
      'Зелень',
      'Приправи',
    ];

    const ul = document.getElementById('ingredients');

    const items = ingredients.map(ingredient => {
      const li = document.createElement('li');
      li.textContent = ingredient;
      return li;
    });

    ul.append(...items);
  });


// 3. 

  document.addEventListener('DOMContentLoaded', () => {
    const images = [
      {
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg',
        alt: 'White and Black Long Fur Cat',
      },
      {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
      },
      {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg',
        alt: 'Group of Horses Running',
      },
    ];

    const gallery = document.getElementById('gallery');

    const markup = images.map(({ url, alt }) =>
      `<li><img src="${url}" alt="${alt}"></li>`
    ).join('');

    gallery.innerHTML = markup;
  });
