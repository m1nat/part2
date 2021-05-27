// Task#1

// const mathRand = ms => {
//   const testPromise = new Promise( (resolve, reject) => {
//     setInterval(() => {
//       rand = Math.floor(Math.random() * 10)
//       if (rand % 2 == 0) {
//         resolve(rand);
//       }else {
//         reject(rand)
//       }
//     }, ms)
//   })
//   testPromise
//     .then(response => console.log('response:', response))
//     .catch(err => alert(`Error: you got an odd numder ${err}`))
// }

// mathRand(1000);

// _________________________________Task#2_____________________________________________________

// const funcPromiseFirst = () => new Promise( resolve => {
//   setTimeout(() => {
//     console.log('first promise');
//     resolve();
//   }, 5000);
// });

// const funcPromiseSecond = () => new Promise( resolve => {
//   setTimeout(() => {
//     console.log('second promise');
//     resolve();
//   }, 1000);
// });

// const funcPromiseThird = () => new Promise( resolve => {
//   setTimeout(() => {
//     console.log('third promise');
//     resolve();
//   }, 500);
// });

// const funcPromiseFourth = () => new Promise( resolve => {
//   setTimeout(() => {
//     alert('fourth promise');
//     resolve();
//   }, 1500);
// });

// funcPromiseFirst()
//   .then(response => funcPromiseSecond())
//   .then(response => funcPromiseThird())
//   .then (response => funcPromiseFourth());

// ______________________________________________Task#3____________________________________________________

// let arr = []

// for (let index = 0; index < 4; index++) {
//   let randomPropmise = new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('Promise', index);
//       resolve()
//     }, Math.floor(Math.random() * 5000));
//   });
//   arr.push(randomPropmise);
// }
// Promise.all(arr)
//   .then( () => console.log('That all'));

//   Promise.race(arr)
//     .then( () => console.log('Race'))

// _______________________________________Task#4________________________________________________

// to make the option Work, press 'load user' please :)

// const listItem = document.getElementById("listItem");
// const ul = document.getElementById("ul");
// const loadUser = document.getElementById("load");
// const removeList = document.getElementById("remove");
// const getEmail = document.getElementById("getEmail");
// getEmail.classList.add("diss");
// const getPhone = document.getElementById("getPhone");
// getPhone.classList.add("diss");
// const URL = "https://jsonplaceholder.typicode.com/users";
// let todos;

// const getTodos = async () => {
//   await requestUrl();
// };

// const requestUrl = () => {
//   return fetch(URL)
//     .then((response) => response.json())
//     .then((result) => (todos = result))
//     .then((res) => console.log(todos));
// };

// loadUser.onclick = () => {
//   ul.innerHTML = null;

//   const li = document.createElement("li");
//   li.innerText = "Please wait...";
//   li.classList.add("list1");
//   ul.append(li);

//   setTimeout(() => {
//     ul.innerHTML = null;

//     getPhone.classList.remove("diss");
//     getEmail.classList.remove("diss");

//     todos.forEach((element) => {
//       const li = document.createElement("li");
//       li.classList.add("list");
//       ul.append(li);
//       li.innerText = element.name;

//       removeList.addEventListener("click", removeListName);
//     });
//   }, 2000);
// };

// getEmail.onclick = () => {
//   ul.innerHTML = null;

//   const li = document.createElement("li");
//   li.innerText = "Please wait...";
//   li.classList.add("list1");
//   ul.append(li);

//   setTimeout(() => {
//     ul.innerHTML = null;

//     todos.forEach((element) => {
//       const li = document.createElement("li");
//       li.classList.add("list");
//       ul.append(li);
//       li.innerText = element.email;

//       removeList.addEventListener("click", removeListName);
//     });
//   }, 500);
// };

// getPhone.onclick = () => {
//   ul.innerHTML = null;

//   const li = document.createElement("li");
//   li.innerText = "Please wait...";
//   li.classList.add("list1");
//   ul.append(li);

//   setTimeout(() => {
//     ul.innerHTML = null;

//     todos.forEach((element) => {
//       const li = document.createElement("li");
//       li.classList.add("list");
//       ul.append(li);
//       li.innerText = element.phone;

//       removeList.addEventListener("click", removeListName);
//     });
//   }, 500);
// };

// const removeListName = () => {
//   ul.innerHTML = null;
// };
// getTodos();
