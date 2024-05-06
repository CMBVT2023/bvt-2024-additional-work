const parrotButton = document.getElementById('parrot-button');
const catButton = document.getElementById('cat-button');
const dogButton = document.getElementById('dog-button');
const dolphinButton = document.getElementById('dolphin-button');

const animalNameDisplayElement = document.getElementById('animal-name-display')
const animalPropertiesDisplayElement = document.getElementById('animal-properties')

function Animal(title, environment, legs) {
    this.title = title;
    this.environment = environment;
    this.legs = legs;
};

Animal.prototype.sayTitle = function () {
    console.log(`I am a ${this.title}.`);
};

function Cat(color, owner, ...args) {
    Animal.apply(this, args);
    this.color = color;
    this.hasOwner= owner;
};

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.Meow = function() {
    console.log('Meow');
};

// Note that this object is made from the cat object, which in turn is made from the animal object.
function Dog(...args) {
    Cat.apply(this, args);
};

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.Bark = function() {
    console.log('Woof');
};

function Parrot(wings, fly, ...args) {
    Animal.apply(this, args)
    this.wings = wings;
    this.canFly = fly;
}

Parrot.prototype = Object.create(Animal.prototype);

Parrot.prototype.Squawk = function() {
    console.log('Squawk');
};

function Dolphin(swim, fin, ...args) {
    Animal.apply(this, args);
    this.fins = fin;
    this.canSwim = swim;
}

Dolphin.prototype = Object.create(Animal.prototype);

Dolphin.prototype.Splash = function() {
    console.log('Splash!');
}

function capitalize(value) {
    return value[0].toUpperCase() + value.slice(1, value.length);
}

function loadAnimal(obj) {
    animalPropertiesDisplayElement.innerHTML = ``;
    animalNameDisplayElement.innerText = ``;

    animalNameDisplayElement.innerText = obj.title;

    let allObjectProperties = Object.values(obj);
    let allObjectTitles = Object.getOwnPropertyNames(obj);

    for (let item in allObjectProperties) {
        let propertyTitle = capitalize(allObjectTitles[item])
        if (allObjectProperties[item] != undefined) {
            animalPropertiesDisplayElement.innerHTML += `<li>${propertyTitle}: ${allObjectProperties[item]}</li>`
        }
    }
}

function loadParrot() {
    const parrotObj = new Parrot(2, true, 'Parrot', 'Jungle');
    parrotObj.Squawk();
    parrotObj.sayTitle();
    loadAnimal(parrotObj);
}

function loadCat() {
    const catObj = new Cat('orange', false, 'Cat', 'Streets', 4)
    catObj.Meow();
    catObj.sayTitle();
    loadAnimal(catObj);
}

function loadDog() {
    const dogObj = new Dog('Brown', true, 'Dog', 'House', 4)
    dogObj.Bark();
    dogObj.sayTitle();
    loadAnimal(dogObj);
}

function loadDolphin() {
    const dolphinObj = new Dolphin(true, 5, 'Dolphin', 'Ocean')
    dolphinObj.Splash();
    dolphinObj.sayTitle();
    loadAnimal(dolphinObj)
}


function loadEventListeners() {
    parrotButton.addEventListener('click', loadParrot);
    catButton.addEventListener('click', loadCat);
    dogButton.addEventListener('click', loadDog);
    dolphinButton.addEventListener('click', loadDolphin);
}

loadEventListeners();









// function User(email, name) {
//     this.email = email;
//     this.name = name;
//     this.online = false;
// };

// User.prototype.login = function() {
//     this.online = true;
//     console.log(this.email, 'has logged in');
// };

// User.prototype.logout = function() {
//     this.online = false;
//     console.log(this.email, 'has logged out');
// };

// // This takes any passed in parameters as an array, so rather than needing to rewrite email and name in the parameters to avoid an error, it will accept it into an array.
// function Admin(...args) {
//     // This is passed through to reference the admin object and the args is passed through as the parameters for the User Constructor Object. 
//     User.apply(this, args);
//     // Only the admin will have this property, not the user.
//     this.role = 'super admin';
// }

// // This will inherit the User Object prototype and map it to admin object.
// // This is done by using the Object.create method which creates a new object that can then be mapped to Admin.prototype.
// Admin.prototype = Object.create(User.prototype)

// Admin.prototype.deleteUser = function (u) {
//     users = users.filter((user) => {
//         return user.email != u.email;
//     })
// }

// var userOne = new User('temp@gmail.com', 'will');
// var userTwo = new User('temp@yahoo.com', 'joe');
// var adminOne = new Admin('fake@outlook.com', 'saul');

// var users = [userOne, userTwo, adminOne];


// adminOne.login();
// adminOne.deleteUser(users[0]);
// console.log(users)
// console.log(adminOne);