// using async and await instead of chaining then()
// still needs error handling with try..catch
const url = 'https://jsonplaceholder.typicode.com/usersdfdfgdf';


// Anything done in this function that requires a promise will allow the use of await, and the code will pause executing before moving on, removes the need to write the .then
export async function getData() {
  //
  //fetch().then().then().catch()

  // You still need error handling but this time with try and catch
  try {
    let response = await fetch(url);
    console.log(response);
    if (!response.ok) throw new Error('not a valid response');
    let dataobj = await response.json();
    console.log(dataobj);
  } catch (err) {
    console.warn(err.message);
  }
}
