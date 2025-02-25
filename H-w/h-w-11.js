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
   
    const weather = {
      temperature: 12,
      humidity: 50,
      windSpeed: 10,
      lowerZero() {
        return this.temperature < 0;
      },
      probingTemperature() {
        if (this.lowerZero()) {
          console.log("температура сягнула нижче 0");
        } else {
          console.log("температура рівна 0 або вище за 0");
        }
      },
    };
    weather.probingTemperature();
    
    
    
    const user = {
      name: "anastasia rubakha",
      email: "kjtmetntiksd@gmail.com",
      password: "kfdskfjsl",
      login(userInputEmail, userInputPassword) {
        return userInputEmail === this.email && userInputPassword === this.password;
      },
    };
    const emailCheck = "kjtmetntiksd@gmail.com";
    const passwordCheck = "kfdskfjsl";
    console.log(user.login(emailCheck, passwordCheck));
    
    
    const movie = {
      title: "your heart will be broken",
      director: "Anna Jane",
      year: 2020,
      rating: 9.1,
      highRating() {
        if (this.score > 8) {
          return true;
        } else {
          return false;
        }
      },
    };
    console.log(movie.highRating()); 