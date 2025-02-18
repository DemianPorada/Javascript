const student = {
    name:'Antonio',
    age:12,
    course:'JS',
}
const obj1 = Object.create(student)
console.log(obj1.name);


const obj2 = Object.create(student)
console.log(obj2.age)

const baseSalary = 30000;
const overtime = 10;
const rate = 20;

const getWage = (baseSalary, overtime, rate) => {
  return baseSalary + overtime * rate;
};

getWage(baseSalary, overtime, rate);

const wage = {
    baseSalary: 30000,
    overtime: 10,
    rate: 20,
     getWage() {
        return this.baseSalary + this.overtime * this.rate;
      }
}

wage.getWage()
