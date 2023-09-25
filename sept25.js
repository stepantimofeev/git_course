"use strict"

//1//

// function summ(Arr){
//     let sum = 0;
//     for (let elem of Arr){
//         sum += elem
//     }
//     return sum
// }
// console.log(summ([5,2,4,2,1]))

//2//

// function delitel(num){
//     let Arr = [];
//     for (let i = 0; i < num; i++){
//         if (num % i === 0){
//             Arr.push(i)
//         }
//     }
//     return Arr
// }
// console.log(delitel(100))

//3//

// function massiv(str){
//     let Arr = str.split('')
//     return Arr
// }
// console.log(massiv('abdce'))

//4//

// function reverse(str){
//     let Arr = str.split('');
//     let Arr2 = Arr.reverse();
//     let res = Arr2.join('')
//     return res
// }
// console.log(reverse('asdasd'))


//5//

// function toUpper(str){
//     let res = str.slice(0,1).toUpperCase() + str.slice(1);
//     return res
// }
// console.log(toUpper('sssssss'))

//6//

// function toUpper(str){
//     let Arr = str.split(' ')
//     let Arr2 = []
//     let res = ''
//     for(let i = 0; i < Arr.length; i++){
//         let word = Arr[i];
//         res = word.slice(0,1).toUpperCase() + word.slice(1);
//         Arr2.push(res)
//     }
//     return Arr2;
// }
// console.log(toUpper('lorem imspu asdasd asdas'))

//7//

// function numarr(num){
//     let Arr = [];
//     for (let i = 1; i <= num; i++){
//         Arr.push(i);
//     }
//     return Arr
// }
// console.log(numarr(12))

//8//

// function sumarr(num){
//     let str = num.toString();
//     let arr = str.split('');
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += parseInt(arr[i])
//     }
//     return sum
// }

// console.log(sumarr(666666))


//9//

// function year(num){
//     if (num % 4 === 0){
//         return('високосный');
//     } else{
//         return('невисокосный')
//     }
// }
// console.log(year(1992))

//10//

// function secday(num){
//     let day = num / 86400;
//     return day;
// }
// console.log(secday(86400))

//11//

let arr = [1,2,5,2342,'b','asd',13,44,'ad']

function random(){
    let i = Math.floor(Math.random() * (arr.length));

    return arr[i];
}
console.log(random(arr))


//12//

// function sim(num){
//     let sum = 0;
//     for(let i = 1; i <= num; i++){
//         if (num % i === 0){
//             sum++
//         }
//     }
//     if(sum > 2){
//         return 'не простое';
//     } else {
//         return 'простое';
//     }
//     // return sum
// }
// console.log(sim(28))