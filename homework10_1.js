//---------------------------------------------------------------------------------------------------------
//HOMEWORK 10.1____________________________________________________________________________________________
var arr = [
  {
    userName: "Test",
    lastName: "Test",
    email: "test.test@gmail.de",
  },
  {
    userName: "Dmitro",
    lastName: "Porohov",
    "<email": "dmitro.porohov@yahoo.com>",
  },
  {
    userName: "Andrii",
    lastName: "",
    email: "andrii@mail.ru", // Нам такі не підходять
  },
];

const emailPattern = /\b[\w\.]+@(yahoo\.|gmail.)[a-zA-Z]{2,4}\b/g;
console.log(getEmails(arr, emailPattern));

function getEmails(object, pattern) {
  return JSON.stringify(object).replace(/[<>]/g, "").match(emailPattern) || [];
}
