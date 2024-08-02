// URL and Request Objects
/*
 url: href, host, hostname, port, protocol, origin, pathname, hash, search, searchParams
request options: method, body, headers, cache
cache  (HTTP Cache, NOT Cache API)
- `default`: cache first, server request if stale, update cache if newer
- `reload`: always go to server AND update the cache
- `no-store`: always go to server but do not update the cache
- `no-cache`: make a conditional request to server and compare, update cache and use latest
- `force-cache`: only makes request if there is no HTTP Cache file
- `only-if-cache`: from cache or 504 gateway timeout error
Headers
- string | object literal | new Headers()
*/

const str = 'http://127.0.0.1:5500/Additional%20Work/Asynchronous-JavaScript/mastering-fetch-api/assets/local-sample.json?attempt=123&other=hello';

export function getData() {
  //
  const url = new URL(str);
  console.log(url.host, url.origin, url.protocol, url.port, url.pathname);
  
  
  const request = new Request(url, {
    // Like settings for the request, he will describe these in detail later on.
    headers: {'x-steve': 'hello'},
    // Get is like read basically reading data from server like a file or image, not sending data just receiving something back
    method: 'GET',
    cache: 'no-store'
  })
  
  fetch(request).then((response) => {
    if(!response.ok) {
      throw new Error('Invalid')
    }
    return response.json();
  })
  .then(json => console.log(json))
  .catch(err=>console.warn(err))
}
