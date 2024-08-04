import React, { useState, useEffect, useDebugValue } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Mario', id: 3 }
      ]);

    const [name, setName] = useState('Mario');
      
      const handleDelete = (id) => {
        const newBlogs = blogs.filter(item => item.id !== id);
        setBlogs(newBlogs);
      }

      useEffect(() => {
        // let response = fetch('https://github.com/iamshaunjp/Complete-React-Tutorial/blob/lesson-16/dojo-blog/data/db.json' )
      }, [])

      

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete} />
            <button onClick={() => setName('Luigi')}>Change Name</button>
            <p>{name}</p>
        </div>
     );
}
 
export default Home;