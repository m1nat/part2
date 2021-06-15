import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { initAPI, createOrder, getOrder, transformResult } from "./api/api-handlers";

const submitForm = document.getElementById('submitForm');
const btnGetOrder = document.getElementById('getOrder');
const getData = document.getElementById('getData');
const submit = document.getElementById('submit');
const output = document.getElementById('output')
const ul = document.createElement('ul');
output.append(ul)

initAPI();

submitForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const inpFirstName = document.getElementById('inpFirstName').value;
  const inpPhone = document.getElementById('inpLastName').value;
  const inpEmail = document.getElementById('inpUserName').value;
  const inpCity = document.getElementById('inpCity').value;
  const inpZip = document.getElementById('inpZip').value;
  const date = moment().format("MMM Do YY")
  const userID = uuidv4();
  createOrder(
    inpFirstName,
    inpPhone,
    inpEmail,
    inpCity,
    inpZip,
    date,
    userID
  );
});


btnGetOrder.addEventListener('click', async () => {
  await getOrder();
  getListOrder()
});

const getListOrder = () => {
  let newListOrder = Object.values(transformResult);
  newListOrder.forEach(el => {
    const li = document.createElement('li');
    li.innerHTML = `Name: ${el.name}, Email: ${el.email}, UserID: ${el.userID}, City: ${el.city}, Date: ${el.date}`
    ul.append(li);
    console.log();
  })
};
