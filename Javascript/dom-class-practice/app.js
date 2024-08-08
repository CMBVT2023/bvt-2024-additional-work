const nameInputOne = document.getElementById('nameInputOne');
const professionInputOne = document.getElementById('professionInputOne');
const animalInputOne = document.getElementById('animalInputOne');
const foodInputOne = document.getElementById('foodInputOne');
const madLibFormOne = document.getElementById('madLibFormOne');

const nameDisplayOne = document.getElementById('name1');
const professionDisplayOne = document.getElementById('profession1');
const animalDisplayOne = document.getElementById('animal1');
const foodDisplayOne = document.getElementById('food1');
const madLibOneDisplay = document.getElementById('madLibOne');

const nameInputTwo = document.getElementById('nameInputTwo');
const adjectiveInputTwo = document.getElementById('adjectiveInputTwo');
const adverbInputTwo = document.getElementById('adverbInputTwo');
const animalInputTwo = document.getElementById('animalInputTwo');
const placeInputTwo = document.getElementById('placeInputTwo');
const verbInputTwo = document.getElementById('verbInputTwo');
const madLibFormTwo = document.getElementById('madLibFormTwo');

const nameDisplayTwo = document.getElementById('name2');
const adjectiveDisplayTwo = document.getElementById('adjective2');
const adverbDisplayTwo = document.getElementById('adverb2');
const animalDisplayTwo = document.getElementById('animal2');
const placeDisplayTwo = document.getElementById('place2');
const verbDisplayTwo = document.getElementById('verb2');

const reloadBtn = document.getElementById('reloadBtn');

function loadMadLib(num) {
    if (num == 1) {
        nameDisplayOne.innerHTML = nameInputOne.value;
        professionDisplayOne.innerHTML = professionInputOne.value;
        animalDisplayOne.innerHTML = animalInputOne.value;
        foodDisplayOne.innerHTML = foodInputOne.value;

        madLibOneDisplay.classList.remove('hidden');
        madLibFormOne.classList.add('hidden');
    } else {
        nameDisplayTwo.innerHTML = nameInputTwo.value;
    }
}

function reloadMadLibs() {
    nameDisplayOne.innerHTML = '';
    professionDisplayOne.innerHTML = '';
    animalDisplayOne.innerHTML = '';
    foodDisplayOne.innerHTML = '';
    nameInputOne.value = '';
    professionInputOne.value = '';
    animalInputOne.value = '';
    foodInputOne.value = '';

    madLibOneDisplay.classList.add('hidden');
    madLibFormOne.classList.remove('hidden');
}

function loadEventListeners() {
    madLibFormOne.addEventListener('submit', (e) => {
        e.preventDefault();

        loadMadLib(1);
    })
    madLibFormTwo.addEventListener('submit', (e) => {
        e.preventDefault();

        loadMadLib(2);
    })



    reloadBtn.addEventListener('click', () => {
        reloadMadLibs();
    })
}

loadEventListeners();