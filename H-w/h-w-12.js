// 1
// Напиши скрипт, який, для об'єкта user, послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

  let  user = {
    mood: "tired",
    hobby: "reading",
    premium: true,
  };
  user.mood = "happy";
  user.hobby = "skydiving";
  user.premium = false;
  
  for (const key of Object.keys(user)){
    console.log(`${key}: ${user[key]}`);
  }
  
  // 2
  // Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті.
  //  Функція повертає число — кількість властивостей.
  
  function countProps(obj) {
    const keys = Object.keys(obj);
    return keys.length;
  }
  const member = {
    name: "Dima",
    age: 15,
    hobby: "reading",
  };
  
  console.log(countProps(user));
  
  // 3
  // Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників
  //  і повертає ім'я найпродуктивнішого (який виконав більше всіх задач).
  //   Співробітники і кількість виконаних завдань містяться як властивості об'єкта
  //    в форматі "ім'я":"кількість задач".

  // function findBestEmployee(employees) {
  //   let bestEmployee = '';
  //   let maxTasks = 0;
    
  //   for (const [name, tasks] of
  //     Object.entries(employees)){
  //       if (tasks > maxTasks){
  //         maxTasks = tasks;
  //         bestEmployee = name;
  //       }
  //     }
  //   return bestEmployee;
  // }

  // const employees = {
  //   Dima: 3,
  //   Anton:5,
  //   Arsen:4
  // };

  // console.log(findBestEmployee(employees));
  
  // 4
  // Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат.
  //  Функція рахує загальну суму зарплати працівників і повертає її.
  //   Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

  function countTotalSalary(employees){
    let totalSalary = 0;

    for (const salary of Object.values(employees)){
      totalSalary += salary;
    }
    return totalSalary;
  }

  const salaries = {
    Pavlo: 24000,
    Oleksandr: 35000,
    Ivan: 30000
  };

  console.log(countTotalSalary(salaries));
  
  // 5
  // Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості.
  //  Повертає масив значень певної властивості prop з кожного об'єкта в масиві.
  function getAllPropValues(arr, prop) {
    return arr.map( item => item[prop]);
  }
const products = [
  {
    name: 'apple',
    price: 5,
    quantity: 10
  },
  {
    name: 'banana',
    price: 12,
    quantity: 15
  },
  {
    name: 'orange',
    price: 3,
    quantity: 20
  }
];

console.log(getAllPropValues(products, 'price'))
  
  // 6
  // Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту
  // (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).
  // Викличи функції для перевірки працездатності твоєї реалізації.

  function calculateTotalPrice(allProducts, productName) {
    const product = allProducts.find(item => item.name === productName);
  
    if (product) {
      return product.price * product.quantity;
    }
  
    return 0; 
  }
  
  const allProducts = [
    { name: 'apple',
      price: 10,
      quantity: 100 },

    { name: 'banana',
      price: 15,
      quantity: 89 },
      
    { name: 'orange',
      price: 20,
      quantity: 73 }
  ];
  
  console.log(calculateTotalPrice(allProducts, 'banana'));