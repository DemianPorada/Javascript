// 1
//  Використати деструктуризацію об’єктів у всіх завданнях з попередньої ДЗ
// 1.1
let  user = {
  mood: "tired",
  hobby: "reading",
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (const key of Object.keys(user)){
  const { [key]: value} = user;
  console.log(`${key}: ${value}`);
}
  
1.2

function countProps(obj) {
  const keys = Object.keys(obj);
  return keys.length;
}
const obj = {
  name: "Dima",
  age: 15,
  hobby: "reading",
};

console.log(countProps(obj));

  
  // 1.3
 function findBestEmployee(employees) {
    let bestEmployee = '';
    let maxTasks = 0;
    
    for (const [name, tasks] of Object.entries(employees)){
        if (tasks > maxTasks){
          maxTasks = tasks;
          bestEmployee = name;
        }
      }
    return bestEmployee;
  }

  const employees = {
    Dima: 3,
    Anton:5,
    Arsen:4
  };

  console.log(findBestEmployee(employees));
 

  // 1.4

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
  
  // 1.5
  
  function getAllPropValues(arr, prop) {
    return arr.map(({ [prop]: value}) => value);
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
  
  // 1.6
 
  function calculateTotalPrice(allProducts, productName) {
    const product = allProducts.find(({name}) => name === productName);
  
    if (product) {
      const {price, quantity} = product
      return price * quantity;
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
  
  // 2
  // Напиши сценарій керування особистим кабінетом інтернет-банку.
  //  Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */
const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій

  transactions: [],
  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */

  createTransaction(amount, type) {
        const transaction = {
          id: this.transactions.length + 1, 
          type,
          amount,
        };
        return transaction;
      },
  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transactions.push(transaction);
        this.balance += amount;
        console.log(`Депозит на суму ${amount} грн. Баланс: ${this.balance} грн.`);
      },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {
        if (amount > this.balance) {
          console.log('Недостатньо коштів для зняття цієї суми.');
          return;
        }
        const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
        this.transactions.push(transaction);
        this.balance -= amount;
        console.log(`Зняття на суму ${amount} грн. Баланс: ${this.balance} грн.`);
      },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
        return this.balance;
      },
  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
        return this.transactions.find(transaction => transaction.id === id);
      },
    

  /*

   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
        return this.transactions
          .filter(transaction => transaction.type === type)
          .reduce((total, transaction) => total + transaction.amount, 0);
      },
    };


account.deposit(1000);
account.withdraw(400);
account.deposit(650);
account.withdraw(250); 

console.log('Поточний баланс:', account.getBalance());
console.log('Деталі транзакції 2:', account.getTransactionDetails(2));
console.log('Загальна сума депозитів:', account.getTransactionTotal(Transaction.DEPOSIT));
console.log('Загальна сума зняття:', account.getTransactionTotal(Transaction.WITHDRAW));
