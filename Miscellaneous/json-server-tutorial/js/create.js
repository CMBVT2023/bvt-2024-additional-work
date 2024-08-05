// javascript for create.html
const form = document.querySelector('form');

const createPost = async (e) => {
    e.preventDefault();

    // When creating a new object that is going to be stored in a JSON file a unique id is not necessary since the json server will already
    // append one to it.
    const newDoc = {
        title: form.title.value,
        body: form.body.value,
        likes: 0,
    }

    // This fetch call uses the second parameter available and it takes in a javascript object, within the object the user can specify the method they are intending to perform with the fetch request.
    // In this case the 'POST' method is telling the json-server to add the passed in body property to the .json file. The json file only accepts strings so the object that is to be appended must be stringified
    // before being sent.
    // The headers property specifies the type of content that is being sent through the post method and in this case since we are appending an object to the json file, it specifies
    // that the content-type is 'application/json' meaning it is being sent to a json file.
    await fetch('http://localhost:8000/posts', {
        method: 'POST',
        body: JSON.stringify(newDoc),
        headers: { 'Content-Type': 'application/json' }
    })

    window.location.replace('./index.html');
}

form.addEventListener('submit', createPost)