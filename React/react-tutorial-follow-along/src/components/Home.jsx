import React, { useState, useEffect } from 'react';


const Home = () => {
    // // This does not trigger a rerender to occur, the variable needs to be reactive for this to work, and this is done with a hook.
    // let name = 'Mario'
    // const handleClick = () => {
    //     name = "Luigi"
    //     console.log(name)
    // };

    const [Name, setName] = useState('Mario');
    const [Age, setAge] = useState(25);

    const handleClick = () => {
        setName('Luigi')
        setAge(30);
    }
 
    return ( 
        <div className="home">
            <h2>Homepage</h2>

            <p>{Name} is {Age} old.</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;