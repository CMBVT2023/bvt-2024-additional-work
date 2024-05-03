const cookie = document.getElementById('fakeCookie');
const cookieAmountDisplay = document.getElementById('cookieAmount');
const cookieTotalDisplay = document.getElementById('cookieTotal')
let cookieAmount = 0;
let cookieTotal = 0;
let addCookie = 1;

function cookieClicked() {
    cookieAmount += addCookie;
    cookieTotal += 1;
    
    cookieAmountDisplay.innerHTML = `<h4>Cookie Crumbs Collected: ${cookieAmount}</h4>`;
    cookieTotalDisplay.innerHTML = `<h4>Total Cookie Crumbs Clicked: ${cookieTotal}</h4>`;
};

function pageEvents() {
    cookie.addEventListener('click', cookieClicked);
    cookie.addEventListener('mousedown', () => {cookie.style.color = 'red';});
    cookie.addEventListener('mouseup', () => {cookie.style.color = 'black';});
    document.querySelector('body').addEventListener('keydown', (e) => {e.key === 's' ? addCookie = 2 : addCookie = 1});
    document.querySelector('body').addEventListener('keyup', () => {addCookie = 1});
}

pageEvents();