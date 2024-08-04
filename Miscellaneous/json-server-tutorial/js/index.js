// javascript for index.html
async function renderPosts() {
    try {
        let initialResponse = await (await fetch('http://localhost:8000/posts',))
        let posts = await initialResponse.json()
        const blogs = document.getElementsByClassName('blogs');
        for (const post of posts) {
            blogs[0].innerHTML += `<div>
                               <h2>${post.title}</h2>
                               <p>${post.body}</p>
                               <button>${post.likes}</button>
                        </div>`
        }
    } catch (error) {
        console.error(error)
    }
    
}

window.addEventListener('DOMContentLoaded', () => renderPosts())


