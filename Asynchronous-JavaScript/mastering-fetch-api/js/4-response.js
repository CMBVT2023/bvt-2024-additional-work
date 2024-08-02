

// Response objects

const jsonstr = 'http://127.0.0.1:5500/Additional%20Work/Asynchronous-JavaScript/mastering-fetch-api/assets/local-sample.json'; // json file
const imgstr = 'https://picsum.photos/id/237/300/200'; // image file
const fontstr = 'https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCs16Hw5aXp-p7K4KLg.woff2'; // font file
const htmlstr = 'http://127.0.0.1:5500/'; //html file

// HTTP Request  - HEAD, BODY
// HTTP Response - HEAD, BODY

// Ordinary javascript object 
let obj = {
  id: crypto.randomUUID(),
  name: 'the one who knocks',
  favouriteColor: 'blue',
};

export function getData() {
  // Stringifies the javascript object 
  let jsonString = JSON.stringify(obj)
  // Creates a new file object specifying the type of object or data that the web browser will be accessing
  // // The first is the array or the string of data that will be in the new file, the second is the name of the file< and the last is the datatype of the file
  let file = new File([jsonString], 'myData.json', {type: 'application/json'});

  fetch(imgstr).then((resp) => {
    if(!resp.ok) {
      throw new Error('invalid')
    }
    return resp.blob() // .blob is used if you are fetching any media like a image or a video
  }).then((blob)=> {
    let url = URL.createObjectURL(blob);
    let img = document.getElementById('pic')
    img.src = url
  })
  .catch(console.warn) // This will write out the whole error instead of just the message by passing all of the info straight to the console.warn function


  // Now a fetch call is no longer needed to create the response object
  // a response object is a container that has a file inside of it, the main body of the response object is the file.
  let response = new Response(file, {
    status: 200,
    statusText: 'Say my name',
    headers: {
      'content-type': 'application/json',
      'content-length': file.size,
    },
  })

  // If you need the headers from the response object, only the ones you can access, you use the get method on the header property.
  console.log(response.headers.get('content-type'))
  console.log(response.headers.get('content-length'))
}
