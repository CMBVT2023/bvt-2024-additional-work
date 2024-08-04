import React, { useState, useEffect } from 'react';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  // const person = {name: 'yoshi', age: 30}
  const link = 'https://www.google.com'

  return (
    <div className="App">
        <div className='content'>
          <h1>{ title }</h1>
          <p>Liked { likes } times</p>
          {/* <p>{person}</p> */}

          {/* Any variable besides objects are converted to string before being displayed on the DOM */}
          <p> {10} </p>
          <p> {'String'} </p>
          <p> {[1,2,3,4,5]} </p>

          <a href={link}>Click Me</a>
        </div>
    </div>
  )

}


export default App
