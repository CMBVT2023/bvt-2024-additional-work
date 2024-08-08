// Create Webpage content from fetch results

const jsonstr = 'https://random-data-api.com/api/v2/users?size=10';
const imgstr = 'https://picsum.photos/id/237/300/200';
const textstr = 'http://localhost:8000/text';
const header = document.getElementById('example-header');

export function getData() {
  let list = document.getElementById('example-list'); //the <ul>
  let img = document.getElementById('pic'); //the <img>

  fetch(jsonstr)
  .then(response => {
    if(!response.ok) throw new Error('invalid');
    return response.json()
  })
  .then(dataArray => {
    console.log(dataArray)
    list.innerHTML = dataArray.map(({uid, first_name, last_name}) => {
      return `<li class="listItem" data-uid="${uid}">
                <p>First Name: ${first_name}</p>
                <p>Last Name: ${last_name}</p>
            </li>`
    }).join('')
  })
  .catch(console.warn)

  fetch(textstr).then(response=> {
    if(!response.ok) {
      throw new Error('invalid')
    }
    return response.text();
  }).then(text => {
    // Because I am using json-server in my case, instead of trying to use the get method or fetch from the
    // "server" like in his example, I am instead getting back an array of object from my json file so I need specify that I want the first 
    // the first element in the array and that I want the string property of the object.
    text = JSON.parse(text);
    header.innerHTML += `<h2>${text[0].string}</h2>`
  }).catch(console.warn)

  fetch(imgstr)
    .then((resp) => {
      if (!resp.ok) throw new Error('invalid');
      return resp.blob();
    })
    .then((blob) => {
      let url = URL.createObjectURL(blob);
      console.log(url);
      let img = document.getElementById('pic');
      img.src = url;
    })
    .catch(console.warn);
}
