const familysChildrens = [
    {
      name: "mama",
      eyeColor: "blue",
      gender: "female",
      isActive: true,
      email: "mama@gmail.com",
      age: "48",
    },
    {
      name: "papa",
      eyeColor: "blue",
      gender: "male",
      isActive: false,
      email: "papa@gmail.com",
      age: "54",
    },
    {
      name: "sister",
      eyeColor: "green",
      gender: "female",
      isActive: false,
      email: "sister@gmail.com",
      age: "13",
    },
    {
      name: "brother",
      eyeColor: "brown",
      gender: "male",
      isActive: true,
      email: "brother@gmail.com",
      age: "19",
    },
    {
      name: "grandmother",
      eyeColor: "green",
      gender: "female",
      isActive: false,
      email: "grandmother@gmail.com",
      age: "79",
    },
    {
      name: "grandfather",
      eyeColor: "brown",
      gender: "male",
      isActive: true,
      email: "grandfather@gmail.com",
      age: "84",
    },
  ];
  
  //1
  const wholeNames = familysChildrens.map((member) => member.name);
  console.log(wholeNames);
  //2
  const eyeColor = familysChildrens.filter(
    (member) => member.eyeColor === "blue"
  );
  console.log(eyeColor);
  //3
  const gender = familysChildrens.filter((member) => member.gender === "male");
  console.log(gender);
  //4
  const active = familysChildrens.filter((member) => member.isActive === true);
  console.log(active);
  //5
  const emailFind = "sister@gmail.com";
  const byEmail = familysChildrens.find(
    (member) => member.email === emailFind
  );
  console.log(byEmail);
  //6
  const ageCheck = familysChildrens.filter(
    (member) => member.age >= 10 && member.age <= 19
  );
  console.log(ageCheck);