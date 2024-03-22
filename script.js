"use strict"
// let set = new Set;

// set.add(1);
// set.add(2);
// set.add(3);

// console.log(set.has(1));

// set.delete(1);

// console.log(set.has(1));

// set.clear();

// console.log(set);

// let set = new Set;

// set.add(1);
// set.add(2);
// set.add(3);
// set.add('adsdasd');
// set.add(999);

// let sum = 0;
// for (let elem of set) {
// 	console.log(elem);
//     sum += elem;
// }

// console.log(sum);

// let set = new Set([1,2,3,3,4,5,47]);

// let arr1 = [...set];
// let arr2 = Array.from(set);

// console.log(arr1, arr2);

// let setback = new Set(arr2);

// console.log(setback);

// let arr1 = [1,2,3,1,2,4,5,6,1];

// function sort_double(arr) {
//     arr = [...new Set(arr)];
//     return arr;
// };

// // let res = sort_double(arr1);
// console.log(arr1);
// // sort_double(arr1);
// console.log(sort_double(arr1));

///////

// let elems = document.querySelectorAll('p');
// let button = document.querySelector('#rabotat');
// let set = new Set;

// for(let elem of elems){
//     elem.addEventListener('click', function(){
//         set.add(this);
//     });
//     console.log(set);
// };

// button.addEventListener('click', function() {
//     for(let elem of set){
//         elem.textContent = '!';
//     };
// }
// );

/////////

// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');
// let set = new Set;


// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
//         set.add(this);
// 	});
// }


// button.addEventListener('click', function() {
// 	for (let elem of set) {
// 		elem.textContent = elem.textContent + '!';
// 	}
// });

/////////////псевдомассивы

// let elems = document.querySelectorAll('p');

// console.log(elems[0]);
// console.log(elems[1]);
// console.log(elems[2]);

// console.log(elems.length);

// for (let elem of elems) {
// 	console.log(elem);
// }

//нету map, join, slice

// console.log(elems.slice(1, 3)); //не работает

// let test = [
// 	[1, 2, 3],
// 	{a: 1, b: 2, c: 3},
// 	[3, 4, 5],
// 	{x: 1, y: 2, z: 3},
//     elems,
// ];

// for(let elem of test){
//     console.log(Array.isArray(elem));
//     console.log(elem);
// }

// let arr481 = [];

// for(let elem of elems){
//     arr481.push(elem);
// }

// let arr482 = [...elems];
// let arr483 = Array.from(elems);



// let res = arr481.slice(0, -1);

// console.log(res);

// let parent = document.querySelector('#parent');

// let childnodes = parent.childNodes;
// console.log(childnodes);

// let children = parent.children;
// console.log(children);

// let test49 = document.getElementsByClassName('test');

// console.log(test49);

// let p = document.createElement('p');
// parent.append(p);

// console.log(childnodes);
// console.log(children);

//////symbol

// let sym1 = Symbol('uytutuytuyty');
// let sym2 = Symbol('ytf y yt yt yt  o');

// console.log(sym1, sym2);


// let obj = {a: 1, b: 2, c: 3};
// let sym = Symbol();
// obj[sym] = 'textdfgd';
// console.log(obj);

// let obj = {a: 1, b: 2, c: 3};
// let sym = Symbol();
// obj[sym] = 'text123';

// for(let key in obj) {
//     console.log(obj[key]);
// }

/////////////////////////

// let obj = {a: 1, b: 2, c: 3};
// let sym = Symbol();

// let date = new Date();
// obj[sym] = function() {
//     console.log(date.getHours()+ ':' + date.getMinutes());
// };

// let func = obj[sym];
// func();

// obj[sym]();

///////////////////////////

// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6};
// let arr = [1, 2, 3, 4];
// let sym = Symbol();

// arr[sym] = function(){
//     let sum = 0;

//     for (let key in this) {
//         sum += this[key];
//     };
//     return sum;

// };

// console.log(arr[sym]());

// arr.push(5);
// arr.push(100);

// console.log(arr[sym]());

/////////////////////////

// let obj1 = {a: 1, b: 2, c: 3};
// let obj2 = {ab: 14, bb: 21, cb: 33};
// let obj3 = {ac: 24, bc: 41, cc: 13};

// let sym = Symbol.for('sum');
// obj1[sym] = function() {
//     let sum = 0;
//     for(let key in this){
//         sum += this[key];
//     };
//     console.log(sum);
// };

// obj2[sym] = obj1[sym];
// obj3[sym] = obj1[sym];

// obj1[sym]();
// obj2[sym]();
// obj3[sym]();

///////////////////////////////

// let sym1 = Symbol.for('test1');
// let sym2 = Symbol.for('test2');

// let key1 = Symbol.keyFor(sym1);
// let key2 = Symbol.keyFor(sym2);

// console.log(key1);
// console.log(key2);

///////////

let map = new Map;

let arr1 = [1, 2];
let arr2 = [3, 4];

map.set(arr1, 'data1');
map.set(arr2, 'data2');

console.log(map[Symbol.iterator]);

let set = new Set([1, 2, 3, 4, 4, 4, 4, 5, 6, 7, 8, 13, 23, 34]);

console.log(set[Symbol.iterator]);
