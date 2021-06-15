import firebase from "firebase/app";
import { databaseURL, FIREBASE_CONFIG } from './api-config';

export const initAPI = () => {
  firebase.initializeApp(FIREBASE_CONFIG)
};

export let transformResult;

export const createOrder = (name, phone, email, city, zip, date, userID) => {
  fetch(`${databaseURL}/orders.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      phone,
      email,
      city,
      zip,
      date,
      userID
    })
  })
  .then(response => response.json())
  .then(result => console.log(result))
};

export const getOrder = async () => {
  await fetch(`${databaseURL}/orders.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(response => response.json())
  .then(result => transformResult = result)
};
