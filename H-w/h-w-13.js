//1.
const user = {
    mood: "tired",
    hobby: "reading",
    premium: true,
  };
  
  const { mood, hobby, premium } = user;
  console.log(mood, hobby, premium);
  
  const userMood = user.mood;
  const userHobby = user.hobby;
  const userPremium = user.premium;
  console.log(userMood, userHobby, userPremium);
  //--------------------------------------------------
  
  //2.
//   const member = {
//     name: "anastasia",
//     age: 15,
//     hobby: "reading",
//   };
  
//   const { name, age, hobby } = member;
//   console.log(name, age, hobby);
  
//   const memberName = member.name;
//   const memberAge = member.age;
//   const memberHobby = member.hobby;
//   console.log(memberName, memberAge, memberHobby);
//   console.log(memberName);
//   console.log(memberAge);
//   console.log(memberHobby);
//   //--------------------------------------------------
  
  //3.
  const weather = {
    temperature: -22,
    interest: 80,
    courseWind: 10,
  };
  
  const { temperature, interest, courseWind } = weather;
  console.log(temperature, interest, courseWind);
  
  const weatherTemperature = weather.temperature;
  const weatherInterest = weather.interest;
  const weatherCourseWind = weather.courseWind;
  console.log(weatherTemperature);
  console.log(weatherInterest);
  console.log(weatherCourseWind);
  //--------------------------------------------------
  
  //4.
//   const user = {
//     name: "anastasia rubakha",
//     email: "kjtmetntiksd@gmail.com",
//     password: "kfdskfjsl",
//   };
  
//   const { name, email, password } = user;
//   console.log(name, email, password);
  
//   const userName = user.name;
//   const userEmail = user.email;
//   const userPassword = user.password;
//   console.log(userName, userEmail, userPassword);
//   //--------------------------------------------------
  
  //5.
  const movie = {
    title: "your heart will be broken",
    director: "Anna Jane",
    year: 2020,
    rating: 9.1,
  };
  
  const { title, director, year, rating } = movie;
  console.log(title, director, year, rating);
  
  const movieTitle = movie.title;
  const movieDirector = movie.director;
  const movieYear = movie.year;
  const movieRating = movie.rating;
  console.log(movieTitle, movieDirector, movieYear, movieRating);
  //--------------------------------------------------
  
  //6.
  const account = {
    balance: 1000,
  
    getBalance() {
      return `поточний баланс ${this.balance};`;
    },
  
    deposit(amount) {
      if (amount <= 0) {
        return "поповнення має бути більшою за 0";
      }
      this.balance += amount;
      return `поповнено на ${amount} ${this.getBalance()}`;
    },
  
    withdraw(amount) {
      if (amount <= 0) {
        return "сума має бути більшою за 0";
      }
      if (amount > this.balance) {
        return "недостатньо коштів на рахунку";
      }
      this.balance -= amount;
      return `успішно знято ${amount} ${this.getBalance()}`;
    },
  };
  
  console.log(account.getBalance());
  console.log(account.deposit(500));
  console.log(account.withdraw(300));
  console.log(account.getBalance());