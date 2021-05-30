// ___________________________tast1_____________________________

// const input = document.getElementById('input');
// const btnTransform = document.getElementById('btnTransform');
// const output = document.getElementById('output');

// const listValue = (array) => {
//     output.innerText = array.join('');
// };

// btnTransform.addEventListener ('click', () => {
//     let array = [];

//     getLetter = input.value.split('');
//     input.value = '';

//     getLetter.map( item => {
//     item === item.toLowerCase()? item = item.toUpperCase() : item = item.toLowerCase();
//     array.push(item);
//     });

//     listValue(array);
// });

// __________________________________________tast2___________________________________

// let array = [2, 4, 55, 34, 12, 44, 'a', 't', 44, 12, 55, 4, 2, 34];

// const division = array => {
//     return array.filter( (item, index) => array.indexOf(item) === index);
// };

// console.log( division(array));

// ________________________________________________task3________________________________

// let arr1 = [1, 2, 3, 5, 6, 7];
// let arr2 = [7, 6];
// let arr3 = [];

// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] === undefined) {
//     arr1.push(0);
//   } else if (arr2[i] === undefined) {
//     arr2.push(0);
//   }
//   arr3.push(arr1[i] + arr2[i]);
// }
// console.log(arr3);

// _____________________________________________task4_______________________________________



// let array = [2, 4, 55, 34, 12, 44, 'a', 't', 44, 12, 55, 4, 2, 34, 7, 7, 'a'];

// const division = array => {
//     let transformArr = array.filter( (item, index) => array.indexOf(item) === index);
//     let result = array.length - transformArr.length;
//     return result;
// }

// console.log('Difference:', division(array));

// ______________________________________________task5____________________________________

// let array = [2, 4, 55, 34, 12, 44, 'a', 't', 44, 12, 55, 4, 2, 34, 7, 7, 'a'];
// let newArr = [];

// const uniq = (arr, arr2) => {
//     let arr3 = [];
//   arr2 = arr.filter( (el, i) => {
//       if (arr.lastIndexOf(el) != i || arr.indexOf(el) != i) {
//           console.log('Something wrong');
//       } else {
//           arr3.push(el);
//           console.log(arr3);
//       }
//   })
// }

// uniq(array, newArr);