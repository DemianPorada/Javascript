// /1.
// const users = [
//   {
//     num: 1,
//     worker: "oleksandr",
//     balance: 250,
//   },
//   {
//     num: 2,
//     worker: "lilia",
//     balance: 8700,
//   },
//   {
//     num: 3,
//     worker: "anastasia",
//     balance: 8400,
//   },
//   {
//     num: 4,
//     worker: "eva",
//     balance: 1500,
//   },
// ];

// const totalBalance = users.reduce((sum, user) => sum + user.balance, 0);
// console.log(totalBalance);

// //2.
// const useri = [
//   {
//     name: "oleksandr",
//     friends: ["anastasia", "eva", "andrii"],
//   },
//   {
//     name: "lilia",
//     friends: ["eva", "anna"],
//   },
//   {
//     name: "anastasia",
//     friends: ["oleksandr", "andrii"],
//   },
//   {
//     name: "eva",
//     friends: ["lilia", "anna"],
//   },
// ];

// const friendName = "eva";
// const result = useri.reduce((acc, useri) => {
//   if (useri.friends.includes(friendName)) {
//     acc.push(useri.name);
//   }
//   return acc;
// }, []);

// console.log(result);

// //3.
// const teamCopy = [...team];
// const sortedTeam = teamCopy.sort((a, b) => {
//   return a.friends - b.friends;
// });

// console.log(sortedTeam);

// //4.
// const uniqueSkills = [
//   ...new Set(
//     copyTeam.reduce((all, person) => {
//       all.push(...person.skill);
//       return all;
//     }, [])
//   ),
// ].sort();

// console.log(uniqueSkills);