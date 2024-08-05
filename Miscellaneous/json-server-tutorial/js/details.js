// javascript for details.html

// Starting from the question mark to the end of the search bar's string, this is how you can implement specific details being loaded onto a page via details from another html page,
// in this case it is passing the id of the blog post to load but this could be other things like what value to display or what score a user earned or item they are looking at.
const id = new URLSearchParams(window.location.search).get('id');
const Name = new URLSearchParams(window.location.search).get('name');
const container = document.querySelector('.details');

const renderDetails = async () => {
    // This specifies to the json server, what post we specifically want to fetch, in this case it will return the post with the id value equal to the id parameter in the url.
    const res = await fetch('http://localhost:8000/posts/' + id)
    const post = await res.json();

    const template = `
        <h1>${post.title}</h1>
        <p>${post.body}</p>
    `

    container.innerHTML = template
}

window.addEventListener('DOMContentLoaded', () => renderDetails())