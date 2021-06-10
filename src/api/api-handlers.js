import firebase from "firebase/app";
import { FIREBASE_CONFIIG, databaseURL } from "./api-config.js";

export const APIinit = () => {
  firebase.initializeApp(FIREBASE_CONFIIG);
};

export const createCars = ({ car, classes, year, price, color, date }) => {
  fetch(`${databaseURL}/cars.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ car, classes, year, price, color, date }),
  })
  .then(response => response.json())
  .then(result => console.log(result))
};


export const getCars = () => {
  fetch(`${databaseURL}/cars.json`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    },
  })
  .then(response => response.json())
  .then(result => {
    const friendlyDATA = Object.keys(result).map ( key => ({
      ...result[key],
      id: key
    }))
    console.log(friendlyDATA);
  })
} 
