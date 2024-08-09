// API Keys, Authorization, Credentials, Content-Security-Policy

export function getData() {
  //What is an API Key
  //Where can we pass it to the server - querystring, headers, cookies
  //controlling when cookies and credentials are passed to a server
  //CSP meta tags and headers

  let str= 'http://localhost:8000/text';
  let url = new URL(str);
  let sp = url.searchParams;
  sp.append('hello', 'world')
  // This is one of the ways to insert your api key when accessing external servers.
  sp.append('api-key', 'Some Random Key Value')
  // document.cookie('')

  // This is another way to insert your api, rather than insert it to the search parameters you are inserting it into the header of the request.
  let h = new Headers()
  // h.append('content-type', 'application/json')
  // When appending headers there are certain checks run in the background to ensure the user is not attempting to make changes to things they can't alter.
  // h.append('blah', 'blah')
  h.append('x-api-key', 'blah') // API Key

  // Common type of authorization, they make a json string that contains encoded information, in this case blah, that you would need to pass in the header of the request you are making,
  // You would call the append method on your header object, specify authorization as your first parameter via a string, and then follow it with another string that contains the word 'Bearer' followed
  // by said JSON WebToken.
  h.append('Authorization', 'Bearer blah') // JSON WebToken

  // 
  let request = new Request(url, {
    method: 'GET',
    headers: h,
    cache: 'default',
    credentials: 'omit',
  })
  fetch(request)
  .then(resp => {
    if(!resp.ok) throw new Error('Invalid')
      return resp.json()
  })
  .then(data => {
    console.log(data)
  })
  .catch(console.warn)
}
