const Home = () => {

    const handleClick = (e) => {
        console.log('Hello World', e)
    };

    const handleClickAgain = (event, string) => {
        console.log('Hello World, and ' + string + '.')
        console.log(event.target)
    };
 
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            {/* When invoking a function with no parameters */}
            <button onClick={handleClick}>Click Me</button>

            {/* When invoking a function with parameters */}
            <button onClick={(e) => handleClickAgain(e, 'Yoshi')}>Click Me Again</button>
        </div>
     );
}
 
export default Home;