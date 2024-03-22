window.addEventListener('load', () => console.log('page loaded'))
window.addEventListener('DOMContentLoaded', () => (console.log('DOM loaded')))


console.log('run me')

window.addEventListener('resize', () => {
    document.querySelector('h1').innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
})

window.addEventListener('scroll', () => {
    console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);
})


window.addEventListener('focus', () => {
    document.querySelectorAll('p').forEach((p) => {
        p.style.color = 'black'
    })
})

window.addEventListener('blur', () => {
    document.querySelectorAll('p').forEach((p) => {
        p.style.color = 'blue'
    })
})