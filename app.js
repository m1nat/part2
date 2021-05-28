// const fetchTodos = () => fetch('https://jsonplaceholder.typicode.com/todos/1');
// const fetchUsers = () => fetch('https://jsonplaceholder.typicode.com/users');

// const todoURL = 'https://jsonplaceholder.typicode.com/todos/1';
// const userURL = 'https://jsonplaceholder.typicode.com/users';

// const fetchDataByURL = url => new Promise ( (resolve, reject) => {
//     fetch(url)
//     .then(response => response.json())
//     .then(res => resolve(res))
//     .catch(err => reject(new Error(err)))
// })

// const getData = async () => {
//     let users = null;
//     let todos = null;

//     try {
//         users = await fetchDataByURL(userURL);
//         todos = await fetchDataByURL(todoURL);
//     } catch (error) {
//         console.log('Error', error);
//     }finally {
//         return users && todos ? { users, todos } : null
//     }


// };

// let result;
// getData()
//     .then( res => {
//         result = res;
//         console.log(result);
//     })

// ___________________________________________________________________________________________________________________________________

// const arr = [2, 14, 8, 5, 6, 21, 54];

// console.log(arr.indexOf(14));

// arr.forEach( (el, i, array) => {
//     console.log(el, i);
//     // перебирает массив только.
// })

// const newArr = arr.map( (item, index, array) => {
//     return item * 2;
// })
// console.log(newArr);

// const newArr = arr.filter( (item, index, array) => {
//     return !(item % 2)
// })
// console.log(newArr);

// const newArr = arr.reduce( (acc, item, index, array) => {
//     return [...acc, { name: 'Vitaliy', age: item * 2 }];
// }, []);

// const obj = {
//     name: 'Vitaliy',
//     age: 29,
//     job: 'Engeener'
// }

// console.log(Object.keys(obj));
// console.log(Object.values(obj));


// const idx = newArr.findIndex( item => item.age === 16)

// console.log(idx);

// console.log(newArr);

// console.log(newArr.find( item => {
//     return item.age === 108;
// }));

// _______________________________________________________________
// const users = [
//     {
//         name: 'Vitaliy',
//         age: 29,
//         job: 'Engeener'
//     },
//     {
//         name: 'Anastasia',
//         age: 19,
//         job: 'Engeener'
//     },
//     {
//         name: 'Victoria',
//         age: 28,
//         job: 'Engeener'
//     }
// ];

// const upper = users.reduce( (acc, item) => {
//     return [...acc, item.name.toUpperCase()]
// }, [])

// console.log(upper);
// ______________________________________________________________________________
// const arr = [2, 14, 8, 5, 6, 21, 54];


// function myName(arr, num) {
//     arr.filter( (el, index) => {
//         return index < num
//     })
// }

// const result =  myName(arr, 4)

// console.log(result);
// ____________________________________________________________________________

// const arr = [2, 14, 8, 5, 6, 21, 54];

// const getLast = ( arr, n ) => arr.filter( (item, index, arr) => index > arr.length - 1 - n)

// console.log(getLast(arr, 1));

// _____________________________________________________________________________________

// const arr = [2, 14, 8, 5, 6, 21, 54, 31];

// const getLast = ( arr, from, to) => 
//     arr.filter( (item, index) => {
//         return index >= from && index <= to
// })

// console.log(getLast(arr, 1, 3));

// ____________________________________________________________________________________________

// const users = [
//     {
//         name: 'Vitaliy',
//         age: 29,
//         surname: 'Sinkevich'

//     },
//     {
//         name: 'Anastasia',
//         age: 19,
//         surname: 'Kevich'
//     },
//     {
//         name: 'Victoria',
//         age: 28,
//         surname: 'Vich'
//     }
// ];

// const transform = users => 
//     users.reduce( (acc, item) => {
//         return [...acc , {fullname: `${item.name} ${item.surname}`, age: item.age}]
//     }, [])


// transform(users);
// console.log(transform(users));

// ________________________________________________________________________________________________________________________

// const str = 'Hello world';

// console.log(str.split(' ').reverse().join(' '));
// __________________________________________________________________________________________________________________

// let str = '2025-12-31'

// let newStr = str.split('-')



// const letStart = newStr.reduce( (cur, item, index, arr) => {
//     return  [...cur, arr[arr.length - 1 - index]]
// }, [])
// console.log(letStart);