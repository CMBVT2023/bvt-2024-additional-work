// // This was my method of fetching and retrieving all of the info from the json file, I did this based on memory as review.
// async function renderPosts() {
//     try {
//         let initialResponse = await (await fetch('http://localhost:8000/posts',))
//         let posts = await initialResponse.json()
//         const blogs = document.getElementsByClassName('blogs');
//         for (const post of posts) {
//             blogs[0].innerHTML += `<div>
//                                <h2>${post.title}</h2>
//                                <p>${post.body}</p>
//                                <button>${post.likes}</button>
//                         </div>`
//         }
//     } catch (error) {
//         console.error(error)
//     }
    
// }

// window.addEventListener('DOMContentLoaded', () => renderPosts())


// javascript for index.html

const container = document.querySelector('.blogs')

const renderPosts = async () => {
    let uri = 'http://localhost:8000/posts';

    const res = await fetch(uri);
    const posts = await res.json();

    let template = '';
    posts.forEach((post) => {
        template += `
            <div class="post">
                <h2>${post.title}</h2>
                <p><small>${post.likes} likes</small></p>
                <p>${post.body.slice(0, 200)}</p>
                <a href="./details.html?id=${post.id}&name='Mario'">Read More...</a>
            </div>
        `
    })
    
    container.innerHTML = template;

}

window.addEventListener('DOMContentLoaded', () => renderPosts())