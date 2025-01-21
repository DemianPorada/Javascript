// const playlist = {
//     name: "my best songs",
//     raiting: 10,
//     tracks: ["track-1, track-2, track-3"],
//     trackscount: 3,
// };
// console.log(playlist.name);
// console.log(playlist['name']);

// const Lviv = {
//     area: "149 км.кв",
//     population: 1141119,
//     mayor: "Andrii Ivanovych Sadovy",
// };
// Lviv.area = "148 км.кв"
// console.log(Lviv);

// function fnA(){

// }
// fnA.key = "hello"
// console.dir(fnA);

// const arr = [1, 2];
// arr.value = "Hi";
// console.dir(arr)

// const playlist = {
//     name: 'Плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     changeName(newName){
//         this.name = newName
//     },
//     addTrack(newTrack){
//         this.tracks.push(newTrack)
//     },
//     updateRating(newTop){
//         this.rating = newTop
//     },
//     getTrackCount(){
//         return this.tracks.length
       
//     }
// }
// playlist.updateRating('Your Top Raiting')
// playlist.addTrack('Track-4')
// playlist.changeName('My playlist')
// console.log(playlist);
// console.log(playlist.getTrackCount())

// - addTrack
//  * - updateRating
//  * - getTrackCount
// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: false },
//   ];
// const findFriendByName = function (allFriends, nameToFind) {
//     for(const friend of allFriends){
//         console.log(friend);
//     }
// };
// console.log(friends);

// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
//   };
//   const keys = Object.keys(feedback);
//   console.log(keys);
//   for ( const key of keys){
//     console.log(feedback.key)
//   }

// * Пошук найнижчої або найвищої температури (числа)
// */
// const temps = [18, 14, 12, 21, 17, 29, 24];

// const lowestTemp = Math.min()
// const hightTemp = Math.max()

// const cart = {
//   items: [],
//   getItems() {},
//   add(productName) {},
//   remove(productName) {},
//   clear() {},
//   countTotalPrice() {},
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };
/*
* Працюємо з колекцією товарів в кошику:
* - getItems()
* - add(product)
* - remove(productName)
* - clear()
* - countTotalPrice()
* - increaseQuantity(productName)
* - decreaseQuantity(productName)
*
* { name: '🍎', price: 50 }
* { name: '🍇', price: 70 }
* { name: '🍋', price: 60 }
* { name: '🍓', price: 110 }
*/
// console.table(cart.getItems())

// const cart = {
//   items: [],
//   getItems() {
//     console.log(this.items)
//   },
//   add(productName) {
    
//   },
//   remove(productName) {},
//   clear() {},
//   countTotalPrice() {},
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };
// cart.getItems()
// cart.add( { name: '🍎', price: 50 })