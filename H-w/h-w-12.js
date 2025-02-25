//1.
const user = {
    mood: "tired",
    hobby: "reading",
    premium: true,
  };
  user.mood = "happy";
  user.hobby = "skydiving";
  user.premium = false;
  
  const userKeys = Object.keys(user);
  console.log(userKeys);
  
  for (let key of userKeys) {
    console.log(key);
  }
  
  //2.
  function countProps(obj) {
    const keys = Object.keys(obj);
    return keys.length;
  }
  const member = {
    name: "anastasia",
    age: 15,
    hobby: "reading",
  };
  
  console.log(countProps(user));
  
  //3.
  const emplosees = [
    {
      lilit: 10,
      salary: 17000,
    },
    {
      adeline: 20,
      salary: 15000,
    },
    {
      emma: 30,
      salary: 12000,
    },
    {
      josef: 40,
      salary: 14500,
    },
    {
      anastasia: 50,
      salary: 10000,
    },
    {
      lili: 60,
      salary: 22000,
    },
  ];
  // function findBestEmployee(employees) {
  //   let totalSalary = 0;
  //   for (const employee of Object.key(employees)) {
  //     totalSalary += employee.salary;
  //   }
  //   return totalSalary;
  // }
  // console.log(findBestEmployee(emplosees));
  
  //4.
  const emploees = [
    {
      leo: 15000,
    },
    {
      emma: 12000,
    },
    {
      anastasia: 14500,
    },
    {
      meddy: 10000,
    },
    {
      lily: 22000,
    },
  ];
  function countTotalSalary(emploees) {
    let total = 0;
    for (let employee of emploees) {
      total += employee.salary;
    }
    return total;
  }
  console.log(countTotalSalary(emploees));
  
  //5.
  function getAllPropValues(arr, prop) {
    const values = [];
    for (let employee of arr) {
      if (Object.keys(employee).includes(prop)) {
        values.push(employee[prop]);
      }
    }
    return values;
  }
  
  const employees = [
    {
      man: "worked",
    },
    {
      man1: "notworked",
    },
    {
      man2: "worked",
    },
    {
      man3: "notworked",
    },
    {
      man4: "worked",
    },
  ];
  
  console.log(getAllPropValues(employees, "man"));
  console.log(getAllPropValues(employees, "man1"));
  console.log(getAllPropValues(employees, "man2"));
  
  //6.
  const basket = [
    {
      sport: "volleyball",
      price: 100,
      amount: 3,
    },
    {
      sport: "volleyball",
      price: 60,
      amount: 4,
    },
    {
      sport: "football",
      price: 140,
      amount: 5,
    },
  ];
  function calculateTotalPrice(productsArray, searchName) {
    let totalCost = 0;
    for (let product of productsArray) {
      if (product.sport === searchName) {
        totalCost += product.price * product.amount;
      }
    }
    return totalCost;
  }
  console.log(calculateTotalPrice(productsArray, "volleyball", 2));
  console.log(calculateTotalPrice(searchName, "football", 4));
  // Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).
  // Викличи функції для перевірки працездатності твоєї реалізації.