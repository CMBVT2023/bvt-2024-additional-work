const setNameOnlyBtn = document.getElementById('user-set-name-btn');
const setFoodOnlyBtn = document.getElementById('user-set-food-btn');
const setUserBtn = document.getElementById('set-user-btn');

const getNameOnlyBtn = document.getElementById('user-get-name-btn');
const getFoodOnlyBtn = document.getElementById('user-get-food-btn');
const getUserBtn = document.getElementById('get-user-btn');

const removeNameOnlyBtn = document.getElementById('user-remove-name-btn');
const removeFoodOnlyBtn = document.getElementById('user-remove-food-btn');
const removeUserBtn = document.getElementById('remove-user-btn');

const removeAllInfoBtn = document.getElementById('remove-all');

const localStorageEventBtn = document.getElementById('add-localStorage-event');

const userNameTextBox = document.getElementById('user-name');
const userFoodTextBox = document.getElementById('user-food');

const userNameDisplay = document.getElementById('user-name-display');
const userFoodDisplay = document.getElementById('user-food-display');
const userObjDisplay = document.getElementById('user-obj-display');


function setUserName() {
    localStorage.setItem('userName', userNameTextBox.value);
};

function getUserName() {
    userNameDisplay.innerText = localStorage.getItem('userName');
    userFoodDisplay.innerText = ``;
    userObjDisplay.innerText = ``;
};

function removeUserName() {
    localStorage.removeItem('userName');
    userNameDisplay.innerText = ``;
};

function setFoodItem() {
    localStorage.setItem('userFood', userFoodTextBox.value);
};

function getFoodItem() {
    userFoodDisplay.innerText = localStorage.getItem('userFood');
    userNameDisplay.innerText = ``;
    userObjDisplay.innerText = ``;
};

function removeFoodItem() {
    localStorage.removeItem('userFood');
    userFoodDisplay.innerText = ``;
};

function setUserProfile(obj) {
    localStorage.setItem('user', JSON.stringify(obj));
}

function getUserProfile() {
    const storedUser = JSON.parse(localStorage.getItem('user'))
    userNameDisplay.innerText = storedUser.userName;
    userFoodDisplay.innerText = storedUser.userFood;
    userObjDisplay.innerText = localStorage.getItem('user');
}

function removeUserProfile() {
    localStorage.removeItem('user')
    userNameDisplay.innerText = ``;
    userFoodDisplay.innerText = ``;
    userObjDisplay.innerText = ``;
}

function removeAllInfo() {
    localStorage.clear();
    userNameDisplay.innerText = ``;
    userFoodDisplay.innerText = ``;
    userObjDisplay.innerText = ``;
}

const User = {
    userName: '',
    userFood: ''
}

function editUserObj() {
    User.userName = userNameTextBox.value;
    User.userFood = userFoodTextBox.value;
    setUserProfile(User)
}

function storageEventListener() {
    window.addEventListener('storage', () => {
        console.log(localStorage.length);
    });
}

function loadEventHandlers() {
    setNameOnlyBtn.addEventListener('click', setUserName);
    setFoodOnlyBtn.addEventListener('click', setFoodItem);
    setUserBtn.addEventListener('click', editUserObj);

    getNameOnlyBtn.addEventListener('click', getUserName);
    getFoodOnlyBtn.addEventListener('click', getFoodItem);
    getUserBtn.addEventListener('click', getUserProfile);

    removeNameOnlyBtn.addEventListener('click', removeUserName);
    removeFoodOnlyBtn.addEventListener('click', removeFoodItem);
    removeUserBtn.addEventListener('click', removeUserProfile);

    removeAllInfoBtn.addEventListener('click', removeAllInfo);

    localStorageEventBtn.addEventListener('click', storageEventListener);
};

loadEventHandlers();