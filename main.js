//МАСИВИ
//написати функцію congratsIfMoreThan100(), яка приймає масив даних (підписників) і виводить на екран за допомогоб функції alert() привітання,
//якщо у вас більше 100 підписників
function congratsIfMoreThan100() {
  const subscribers = prompt("How many followers do you have?");
  if (subscribers !== null) {
    const subscribersCount = parseInt(subscribers);
    if (!isNaN(subscribersCount) && subscribersCount > 100) {
      alert("Hello World");
      console.log("Hello World");
    } else {
      alert("Error");
      console.log("Error");
    }
  }
}
congratsIfMoreThan100();

//ЦИКЛИ
//написати функцію, яка приймає масив чисел і підносить до квадрату ожне з них
function squareArr(arr) {
  const squareArray = [];
  for (const number of arr) {
    const squareNumber = Math.pow(number, 2);
    squareArray.push(squareNumber);
  }
  return squareArray;
}
const number = [1, 2, 4, 6, 8];
const squareNumber = squareArr(number);
console.log(squareNumber);

// АБО

function squareArrays(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= array[i];
  }
  return array;
}
const numbers = [1, 2, 5, 6];
console.log(squareArrays(numbers));

// написати функцію, яка приймає масив об'єктів, пробігається по ньому і дає прикметники, які описують зовнішню
//красу людину, відповідно до її статі
const people = [
  {
    name: "Ross",
    sex: "male",
  },
  {
    name: "Monica",
    sex: "female",
  },
  {
    name: "Chandler",
    sex: "male",
  },
  {
    name: "Phoebe",
    sex: "female",
  },
  {
    name: "Joey",
    sex: "male",
  },
  {
    name: "Rachel",
    sex: "female",
  },
];

for (const person of people) {
  const { name, sex } = person;

  if (sex === "male") {
    console.log(`${name} is beautiful`);
  } else if (sex === "female") {
    console.log(`${name} is not bad`);
  } else {
    console.log(`${name} has an unknown gender`);
  }
}

// АБО
//Тернарний оператор у JavaScript
function addNiceAdjective(arr) {
  for (let i = 0; i < arr.length; i++) {
    const element =
      arr[i] === "male"
        ? (element.name += " handsome")
        : (element.name += " beautiful");
  }
  console.log(addNiceAdjective(people));
}

//Замикання
let firstName = "Inna";

function sayHello() {
  console.log(firstName);
}
firstName = "Andrew";
sayHello();

//Hoisting
var age = 10;
console.log(age);

function creatHosting() {
  var age = 40;
  console.log(age);

  function inner() {
    function sayBye() {
      console.log("hello");
    }
    sayBye();

    console.log(age);

    var age = 20;

    // console.log(age2);
    // console.log(age3);

    const age2 = 25;
    let age3 = 28;
  }
  inner();
}

creatHosting();

//або
function sayBye() {
  console.log("hello");
}
// sayBye2();

var sayBye2 = function () {
  console.log("hello 2");
};

//написати функцію, яка приймає 2 аргументи: масив чисел і число
//Функція повертає кількість повторюваності передано числа в масиві.
//Якщо даного числа там немає, функція повертає текст "Даного числа в масиві немає!"
// const number1 = [1, 3, 5, 7, 9, 1, 2, 8, 9, 1];

// function getRepetitionOfNumber(number1Arr, number2) {
//   let count = 0;

//   for (let i = 0; i < number1Arr.length; i++) {
//     if (number1Arr[i] === number2) {
//       count++;
//     }
//   }

//   if (count > 0) {
//     return count;
//   } else {
//     return "Даного числа в масиві немає!";
//   }
// }
// const number2 = 1;
// const result = getRepetitionOfNumber(number1, number2);
// console.log(`Кількість повторень числа ${number2} у масиві: ${result}`);

//або
const number3 = [1, 3, 5, 7, 9, 1, 2, 8, 9, 1];
function getRepetitionOfNumber(numbersArr, number) {
  let counter = 0;

  for (item of numbersArr) {
    if (item === number) {
      counter++;
    } else {
    }
  }
  return counter > 0 ? counter : "Даного числа в масиві немає!";
}

console.log(getRepetitionOfNumber([1, 3, 5, 7, 9, 1, 2, 8, 9, 1], 1));

//стрілкові функції
const speakHello2 = () => {
  console.log("hello 12");
};
speakHello2();

const sayHelloToPerson = (name) => {
  // console.log(arguments); - помилка
  console.log("hello 2 " + name);
};
sayHelloToPerson("Inna");

function summ1(a, b, c, d) {
  console.log(arguments);
  return a + b;
}
summ1(10, 20, 5, 6);

const summ2 = (a, b) => a + b;
console.log(summ2(1, 4));

//feach API
console.log(1);
console.log(2);

//Проміси
function getPostById(id) {
  const endPoint = "https://jsonplaceholder.typicode.com";
  const result = {
    id,
    name: "",
    post: [],
  };
  return new Promise((resolve, reject) => {
    fetch(`${endPoint}/users`)
      .then((data) => data.json())
      .then((users) => {
        const foundUser = users.find((user) => user.id === id);
        result.name = foundUser.name;
        fetch(`${endPoint}/posts`)
          .then((data) => data.json())
          .then((posts) => {
            result.posts = posts.filter((post) => post.userId === id);
            resolve(result);
          });
      });
  });
}
getPostById(1).then((data) => console.log(data));

//Async Await
/* Зробити запит на API https://jsonplaceholder.typicode.com/users,
щоб отримати доступ до масиву з 10-ма фейковими користувачами і вивести його 
у вигляді списку на екран. Додати на сайт текстове поле, при введені тексту 
в якому буде відбуватися фільтрація користувачів за іменем. Наприкладб коли
ми вводимо ім`я яких теж John або які так посинаютья. */

async function fetchUsers() {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  return result.json();
}

async function renderList(users) {
  const ul = document.querySelector(".users-list");
  ul.innerHTML = ""; // Clear previous content

  for (const user of users) {
    const li = document.createElement("li");
    li.classList.add("users-list-item");
    li.innerHTML = user.name;
    ul.appendChild(li);
  }
}

function filterAndSortUsers(e) {
  if (e.key === "Enter") {
    const filterValue = e.target.value.toLowerCase();
    const usersListItems = document.querySelectorAll(".users-list-item");

    const filteredUsers = Array.from(usersListItems)
      .filter((user) => user.innerHTML.toLowerCase().startsWith(filterValue))
      .sort((a, b) => a.innerHTML.localeCompare(b.innerHTML));

    usersListItems.forEach((user) => user.classList.add("hidden"));

    filteredUsers.forEach((user) => user.classList.remove("hidden"));
  }
}

async function init() {
  const users = await fetchUsers();
  users.sort((a, b) => a.name.localeCompare(b.name)); // Sort users by name
  renderList(users);

  document.querySelector(".input").addEventListener("input", (e) => {
    filterAndSortUsers(e);
  });

  document.querySelector(".input").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission on Enter key
      filterAndSortUsers(e);
    }
  });
}

init();
