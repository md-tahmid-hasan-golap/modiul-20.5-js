// const numbers = [10, 20, 30, 40, 50, 60, 70];
// console.log(numbers);
// numbers.reverse();
// console.log(numbers)
// console.log(numbers.join('|'))

// const numbers = [12,45, 6, 75, 85, 85];
// const number = numbers.reverse();
// console.log(number)

// const numbers = [10, 20, 30, 40, 50, 60, 70];
// // const rev_numbers = [];
// for(const num of numbers){
//     console.log(num);
//     rev_numbers.unshift(num)
// }
// console.log(rev_numbers)

// const number = [20, 40, 80, 120];
// const numbers = [];
// for(const num of number){
//     console.log(num);
//     numbers.unshift(num);
// }
// console.log(numbers)
// const number = [20, 40, 80, 120];
// const reverce = [];
// for(let i = 0; i < number.length; i++){
//     const num = number[i]
//     console.log(num)
//     reverce.unshift(num)
// }
// console.log(reverce)

const number = [20, 40, 80, 120];
for(let i = number.length - 1; i > 0; i--){
    console.log(number[i])
}