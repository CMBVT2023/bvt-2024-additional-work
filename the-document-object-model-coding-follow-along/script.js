const text = document.querySelector('p');
const itemList = document.querySelector('.parent');
const items = itemList.querySelectorAll('li')

function run() {
    text.classList.add('dark');

    text.classList.forEach(c => console.log(c))

    items.forEach((item,index) => {
        if (index == 2) {
        item.style.color = 'red'
        } else if (index == 1) {
            item.style.color = 'blue'
        }
    })
}

document.querySelector('button').onclick = run;