// Load all HTML elements
const firstNameTextBox = document.getElementById('user-first-name'); 
const lastNameTextBox = document.getElementById('user-last-name'); 
const ageTextBox = document.getElementById('user-age'); 
const employmentCheckBox = document.getElementById('user-employment'); 

const addPersonBtn = document.getElementById('user-add');
const autoFillBtn = document.getElementById('user-fill');
const clearPersonBtn = document.getElementById('user-clear');
const clearAllBtn = document.getElementById('clear-all');

const userDisplayElement = document.getElementById('user-list');

let num = 0;
let allUsers = []

function Person(first, last, age, employed) {
    this.firstName = first,
    this.lastName = last,
    this.age = age,
    this.isEmployed = employed
};

function addPerson() {
    let first = firstNameTextBox.value;
    let last = lastNameTextBox.value;
    let age = ageTextBox.value;
    let employment = false;

    if (employmentCheckBox.checked) {
        employment = true;
    }

    let newUser = new Person(first, last, age, employment);

    allUsers.push(newUser);
    displayUsers();
}

function autoFill() {
    firstNameTextBox.value = `Person${num}`
    lastNameTextBox.value = `Name${num}`
    ageTextBox.value = `${num}`

    num += 1;
}

function removePerson() {
    let lastUser = userDisplayElement.lastElementChild;

    if (lastUser != null) {
        userDisplayElement.removeChild(lastUser);
        allUsers.pop();
    }
}

function clearAll() {
    allUsers = [];
    displayUsers();
}

function displayUsers() {
    userDisplayElement.innerHTML = ``;

    for (let user in allUsers) {
        userDisplayElement.innerHTML += `<li class="user-item">${JSON.stringify(allUsers[user])}</li>`;
    }
}

function loadEventListeners() {
    addPersonBtn.addEventListener('click', addPerson);
    autoFillBtn.addEventListener('click', autoFill)
    clearPersonBtn.addEventListener('click', removePerson)
    clearAllBtn.addEventListener('click', clearAll)
};

loadEventListeners();












// These are made using separate objects, this is the method to create objects without using a constructor
// 
// const person1 = {
//     firstName: "Spongebob",
//     lastName: "Squarepants",
//     age: 30,
//     house: {material: 'pineapple', organic: true, residents: ['Spongebob', 'Gary']},
//     isEmployed: true,
//     sayHello: function(){console.log("Hi! I am Spongebob!")},
//     eat: function(){console.log("I am eating a Krabby Patty.")},
// };

// const person2 = {
//     firstName: "Patrick",
//     lastName: "Star",
//     age: 42,
//     house: ['rock', 'boulder', 'stone'],
//     isEmployed: false,
//     sayHello: function(){console.log("Hey, I'm Patrick...")},
//     eat: function(){console.log("I am eating roast beef, chicken, and pizza.")},
// };

// person1.sayHello()
// person2.sayHello()
// console.log(person2.house[1])
// console.log(person1.house.material)
// console.log(person1.house.organic)
// console.log(person1.house.residents[1])
// person1.eat()
// person2.eat()