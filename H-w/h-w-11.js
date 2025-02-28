// 1 - Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber",
//  "balance". Додайте до об'єкту метод "addDeposit", який дозволяє додавати гроші
//   на рахунок, та метод "getWithdraw", який дозволяє знімати гроші з рахунку. 
//   Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt()
//    щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку. 
    const bankAccount = {
      ownerName: "User29",
      accountNumber: 634863,
      balance: 2639,

      addDeposit() {
        this.balance += amount;
        return this.balance;
      },
      getWithdraw() {
        this.balance -= amount;
        return this.balance;
      },
    };

  //  2
  //   Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed".
  //    Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія,
  //     та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати
  //      з prompt(). Якщо метод повернув "true" вивести повідомлення 
  //      “температура нижче 0 градусів Цельсія” і навпаки
    const weather = {
      temperature: parseFloat(prompt("Введіть температуру")),
      humidity: 50,
      windSpeed: 10,
      lowerZero() {
        return this.temperature < 0;
      },
      probingTemperature() {
        if (this.lowerZero()) {
          alert("температура сягнула нижче 0");
        } else {
          alert("температура рівна 0 або вище за 0");
        }
      },
    };
    weather.probingTemperature();
    console.log(weather);
    
    // 3 - Створіть об’єкт "user", який буде мати властивості "name", "email", "password".
    //  Додайте метод "login", який буде перевіряти правильність введеного email та password. 
    
    const user = {
      name: "Demian Porada",
      email: "email@gmail.com",
      password: "213435",
      login(userInputEmail, userInputPassword) {
        return userInputEmail === this.email && userInputPassword === this.password;
      },
    };
    const emailCheck = "email@gmail.com";
    const passwordCheck = "213435";
    console.log(user.login(emailCheck, passwordCheck));
    
    // 4 - Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating".
    //  Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false",
    //   якщо рейтинг фільму 8 або нижче. Вивести значення властивостей в консоль.
    let movie = {
      title: "Titanic",
      director: "James Cameron",
      year: 1997,
      rating: 8.7,
      highRating() {
        if (this.rating > 8) {
          return true;
        } else {
          return false;
        }
      },
    };
    console.log(movie.highRating()); 

    console.log("Назва фільму :", movie.title);
    console.log("Режисер:", movie.director);
    console.log("Рік випуску:", movie.year);
    console.log("Рейтинг:", movie.rating);
    
  