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

const container = document.querySelector('.blogs');
const searchForm = document.querySelector('.search')

const renderPosts = async (searchTerm) => {
    // // This is the default url without sorting the information.
    // let uri = 'http://localhost:8000/posts';

    // This is the url for sorting items based on one of the properties '?_sort=' is appended to the url and then it is followed by the property you want to sort.
    // in this case it is likes.

    // In the alpha version order was no longer a thing, it is now replaced by appending a '-' to the front of the property to be sorted
    // // I switched back to version 0 since alpha version was missing a lot of the features.
    let uri = new URL('http://localhost:8000/posts?_sort=likes&_order=desc');
    
    // If searchTerm has a value then the code within the if statement will execute, else if it is undefined like on the initial page load, then it will not execute.
    if (searchTerm) {
        // 'q=' specifies to the json-server to retrieve any info that matches to the passed in term, behaves similarly to querySelector.
        uri += `&q=${searchTerm}`
        console.log(uri)
    }

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

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    renderPosts(searchForm.term.value.trim())
})

window.addEventListener('DOMContentLoaded', () => renderPosts())