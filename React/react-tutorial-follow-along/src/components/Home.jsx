import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [ isPending, setIsPending] = useState(true);

      useEffect(() => {
        // Async is not available for useEffect, you would need to create a separate function outside of the 
        // in order for it to work, making it more practical to use the .then() and .catch() method.
        
        setTimeout(() => {
          fetch('http://localhost:8000/blogs')
          .then(res => {return res.json()})
          .then(data => {
            setBlogs(data);
            setIsPending(false);
          });
        }, 1000)
      }, []);

      

    return ( 
        <div className="home">
            {/* This will no longer display until blogs has a value, rather than use the if statement like I did on my online grocery store project.
                Instead this will not display until the blogs value is true, in the initial load it has a value of null so it is false until a value is received. */}
            {isPending && <h1>Loading...</h1>}
            {blogs && <BlogList blogs={blogs} title='All Blogs' />}
        </div>
     );
}
 
export default Home;