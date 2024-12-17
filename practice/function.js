function getSum (a, b){
    console.log( a + b);
}
getSum (1, 99)
getSum (10, 25)
getSum (3, 4)












const numbers = [51, 18, 13, 24, 7, 85, 19];

function findSmallesNumber(numbers){
    let smallestNumber = numbers[0]
    for (let i = 0; i < numbers.length; i+=1) {
        if(numbers[i] < smallestNumber ){
            smallestNumber = numbers[i]
        }
    }
}

findSmallesNumber(numbers)()