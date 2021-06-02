// const user = {
//     name: 'Vit',
//     age: 29,
//     sayHello() {
//         console.log('Hello', this.name);
//     }
// };

// user.sayHello()

// const user1 = {
//     name: 'Vit',
//     age: 29
// };

// const user2 = {
//     name: 'Vika',
//     age: 28
// };

// const logName = function() {
//     console.log(this.name);
// }

// // user1.sayHello = logName;
// // user1.sayHello();

// user2.sayHello = logName;
// user2.sayHello();
// __________________________________________________________
// class Req {
//   constructor(width, heigth) {
//     (this.width = width), (this.heigth = heigth);
//   }

//   Squar() {
//     return this.width * this.heigth;
//   }
// }

// class Par extends Req {
//   constructor(width, heigth, length) {
//     super(width, heigth);
//     this.length = length;
//   }
//   getV() {
//     return this.width * this.heigth * this.length;
//   }
// }

// const parall = new Par(5, 6, 10);

// console.log(parall.getV());
// ___________________________________________

// class User {
//   #someVar = "Check";

//   constructor(name, age) {
//     (this.name = name), (this.age = age);
//   }

//   get someVar() {
//     return this.#someVar;
//   }

//   set someVar(newSomeVar) {
//     if (typeof newSomeVar === "number") {
//       this.#someVar = newSomeVar;
//     }
//   }
// }

// const user = new User("Vitaliy", 29);

// user.someVar = "dsadas";
// console.log(user.someVar);


class Humman {
    constructor(name, surname){
        this.name = name,
        this.surname = surname

    }
};

class Worker extends Humman {
    constructor(name, surname, rate, days){
        super(name, surname),
        this.rate = rate,
        this.days = days
    }
    Sallary() {
        return  this.rate * this.days 
    }
}

const mySallary = new Worker('Vitaliy','Sinkevich', 100, 26)
console.log(mySallary.Sallary(), mySallary.name, mySallary.surname);