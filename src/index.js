// import { APIinit, createCars, getCars } from "./api/api-handlers.js";
// import moment from "moment";

// APIinit();
// _______________________________________________________________________________________
const user = {
  // firstName: "Vitaliy",
  lastName: "Sinkevich",
  age: 25,
  job: {
    // company: "iTechArt",
    position: "webDev",
    skills: ["JS", "HTML", "CSS"],
  },
};

  const { firstName: name = "noname, Your name has been faled",
job : {company: myCompany = 'Epam'} }  = user;



console.log(name, myCompany);

// ______________________________________________________________________________________
// const car = {
//   car: 'Mercedes-Benz',
//   classes: 'GL-class',
//   year: 2013,
//   price: 29900,
//   color: 'black',
//   date: moment().format("MMMM Do YYYY, h:mm:ss a"),
// };

// createCars(car);

// getCars()
