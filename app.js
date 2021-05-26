// console.log('hello');

// for (let index = 0; index < 10; index++) {
//     console.log(index);
// }
// console.log('End');

// setInterval( () => {
//     console.log('Test');
// }, 1000);

// setTimeout(() => {
//     console.log('test');
// }, 2000);

// const myInterv = setInterval(() => {
//     console.log('Test');
// }, 1000);

// setTimeout(() => {
//     console.log('Complete.');
//     clearInterval(myInterv);
// }, 5000);

// console.log('Hello');

// setTimeout(() => {
//     console.log('setTimeout');
// }, 0);

// console.log('The End');

// let from = 1;
// let to = 5;
// let count = 0;

// function printNumbers(from, to) {
//   let count = from;

//   const interval = setInterval(() => {
//     console.log(count);
//     count++;
//     if( count == to + 1){
//       clearInterval(interval)
//     }
//   }, 500);
// }

// printNumbers(from, to);

// setTimeout( () => {
//   console.log('Start Loading...');
//   setTimeout( () => {
//     console.log('Continue loading...');
//     setTimeout( () => {
//       console.log('Data processing');
//       setTimeout( () => {
//         console.log('Completed');
//       }, 1000);
//     }, 500);
//   }, 2000);
// }, 2000);

// try {
//   let x = 0;
//   x++;
//   console.log('Try');
// } catch (error) {
//   console.log('Catch', error);
// } finally {
//   console.log('finally');
// }

// console.log('end');

// _____________________________________________________________________________

// const fetchTodo = () => fetch("https://jsonplaceholder.typicode.com/todos/1");
// const start = () => console.log("Start loading...");

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     start();
//     // fetchTodo()
//     // .then(response => response.json())
//     // .then(result => console.log(result))
//     // .catch( err => console.log('Error', err))
//     // .finally( () => console.log('Finally'));
//     const obj = {
//       name: "Vitaliy",
//       age: 29,
//     };
    // resolve(obj);
//     reject("Unknow error");
//   }, 1000);
// });

// myPromise
//   .then((result) => {
//     const newResult = result;
//     newResult.job = "Web Dev";
//     return newResult;
//   })
//   .then((res) => console.log("End", res))
//   .catch((err) => console.log("Error", err))
//   .finally(() => console.log("Finally"))

// setTimeout(() => {
//   console.log("Timeout");
// }, 1000);




// const myProm = new Promise(resolve =>{
//   setTimeout(() => {
//     const user = {
//       name: 'Vitaliy',
//       age: 29
//     }
//     resolve(user);
//   }, 3000);

// });

// myProm
//   .then( result => console.log('result:', result)) 
  

// _________________________________________________________


// const fetchTodo = () => fetch("https://jsonplaceholder.typicode.com/todos/1");

// const myPromise = new Promise((resolve, reject) => {
//     fetchTodo()
//     .then(response => response.json())
//     .then(result => resolve(result))
//     .catch( err => reject(err))
// });

// myPromise
//   .then(res => console.log('succes', res)
//   .catch(err => console.log("Error", err))
//   .finally( () => console.log("Finally")))

// ________________________________________________________________

// const fetchTodo = () => fetch("https://jsonplaceholder.typicode.com/todos/15");
// const fetchTodo = () => fetch("https://jsonplaceholder.typicode.com/users");


// ____________________________________________________________________________

// const startPromise =  new Promise( resolve => {
//   setTimeout(() => {
//     console.log('First promise');
//     resolve()
//   }, 1000);
// });

// const MidlePromise =  new Promise( resolve => {
//   setTimeout(() => {
//     console.log('Midle promise');
//     resolve()
//   }, 2000);
// });

// const EndtPromise =  new Promise( resolve => {
//   setTimeout(() => {
//     console.log('End promise');
//     resolve()
//   }, 3000);
// });

// startPromise
//   .then ( () => MidlePromise)
//   .then ( () => EndtPromise)
//   .then ( () => console.log('Finish'))

// Promise.all([startPromise, MidlePromise, EndtPromise])
// .then ( () => console.log('Complete'));

// Promise.race([startPromise, MidlePromise, EndtPromise])
// .then ( () => console.log('Complete'));

// ________________________________________________________________

// const startPromise = () =>  new Promise( resolve => {
//   setTimeout(() => {
//     console.log('First promise');
//     resolve()
//   }, 3000);
// });

// const MidlePromise = () =>   new Promise( resolve => {
//   setTimeout(() => {
//     console.log('Midle promise');
//     resolve()
//   }, 2000);
// });

// const EndtPromise = () =>  new Promise( resolve => {
//   setTimeout(() => {
//     console.log('End promise');
//     resolve()
//   }, 3000);
// });

// startPromise()
//   .then ( () => MidlePromise())
//   .then ( () => EndtPromise())
//   .then ( () => console.log('Finish'))