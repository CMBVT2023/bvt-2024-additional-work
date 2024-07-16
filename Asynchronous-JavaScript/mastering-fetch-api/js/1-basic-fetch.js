//the simplest fetch you can use and still have error handling
const url = 'https://jsonplaceholder.typicode.com/users';

export function getData() {
  //
  fetch(url)
  .then((response) => {
    // console.log(response.status)
    // Checks the status of the response and triggers if the status is not within the 200-299, based on HTTP Status Codes.
    if(!response.ok) {
      throw new Error('Not A valid response.')
    }

    // This return argument is necessary since without it, the then handler would not be returning a promise, making the next then handler execute without any delay.
    return response.json(); // Method to extract a json string and then convert it to a javascript object.
  })
  .then((item) => { // This then is only called once the previous then response is complete, its waiting for the promise to be returned, and in this case it waits until the response.json()
                    // is parsed and returned to this then.
    console.log(item)
  })
  .catch(error => {
    console.error(error)
  })


  // // The issue with the code below is that there is no method included to make the code wait or execute only after the url has returned the data. Basically, without 
  // // using fetch and using promise, the code will execute the next line and this will cause the code to fail every time since the fetch request takes additional time to retrieve the necessary
  // // data, time the code isn't accounting for.
  // let response = fetch(url);
  // let dataObj = response.json();
  // console.log(dataObj)
}

// This mainly shows why fetch and promises are necessary when getting data from an outside source. There is no way to know how long it will take for a client to access data from a separate 
// server or for a fetch request to access a file from another site. Using a promise allows the webpage's main code to continue executing without having to wait for each fetch request to 
// complete before moving on with the code execution. Also, this example shows the importance of error handling and that no matter watch, a catch handler should always be present when using then handlers
// to help troubleshoot and to log errors that might occur, which is important especially when accessing outside resources, servers, or other clients since problems other than code gets introduced.

// HTTP Status Codes, 100 intermediate status, 200 is everything worked, 300 is a sign of a redirect and that  you get something other than you expected, 400 is the request was not authorized
// and 404 is the request did not point to a valid URL, 500 are server side errors.