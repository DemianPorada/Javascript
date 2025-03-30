//   2
// class User {
//     constructor({ name, age, followers }) {
//       this.name = name;
//       this.age = age;
//       this.followers = followers;
//     }
  
//     getInfo() {
//       console.log('User ${this.name} is ${this.age} years old and has ${this.followers} followers');
//     }
//   }

class User { 
  constructor({ name, age, followers }) {
    this.name = name;
    this.age = age;
    this.followers = followers; }

getInfo() {
   console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
   } }

const mango = new User({
   name: 'Mango',
   age: 2,
   followers: 20,
   });

mango.getInfo(); // User Mango is 2 years old and has 20 followers

const poly = new User({ 
   name: 'Poly',
   age: 3,
   followers: 17,  
  });

poly.getInfo(); // User Poly is 3 years old and has 17 followers

// 3
// Напиши клас Storage, який буде створювати об'єкти для управління складом товарів.
//  При виклику буде отримувати один аргумент - початковий масив товарів,
//   і записувати його у властивість items.
class Storage {
    constructor(items) {
      this.items = [...items]; 
    }
  
    getItems() {
      return this.items;
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    removeItem(item) {
      this.items = this.items.filter(el => el !== item);
    }
  }
  
  const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
  ]);
  
  console.table(storage.getItems()); 
  
  storage.addItem('Дроїд');
  console.table(storage.getItems());
  
  storage.removeItem('Пролонгер');
  console.table(storage.getItems());

