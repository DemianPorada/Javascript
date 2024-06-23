// // 1
// const logitems = function(array){
//     for(let i = 1; i < array.length; i +=1){
//         console.log(i);
//         console.log(array[i]);
//         console.log(
//             1
//         );
//     }
// }

// logitems (['Mango', 'Poly', 'Ajax'])
 
// // 2
// const calculateEngravingPrice = function (message, pricePerWord) {
//     const words = message.split('');

//     const wordCount = words.lenght;
//     const totalPrice = wordCount + pricePerWord;
//     return totalPrice;
// }

// const message = 'Hello world';
// const pricePerWord = 10;
// const engravingPrice = calculateEngravingPrice(message, pricePerWord);
// console.log("const engravingPrice");

// 3
// const findLongestWord = function(string) {
//     const words = string.split('');
//     let LongestWord = '';
//     for (let word of words) {
//         if (word.lenght > LongestWord.length) {
//             LongestWord = word;
//         }
//     }
//     return LongestWord;
// }

// const string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod";
// const LongestWord = findLongestWord(string);
// console.log(LongestWord);

// 4
const formatString = function(string){
    if(string.lenght <= 40){
        return string
    }
const letters = string.split('');
const totalTodelete = string.lenght - 40
 return letters.splice(40, totalTodelete, '...')
 .join('')
}
console.log(formatString('qwerty'))
