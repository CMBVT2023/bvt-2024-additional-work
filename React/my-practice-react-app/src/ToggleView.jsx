// import React from 'react';

const Photos = [
    "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3791466/pexels-photo-3791466.jpeg?auto=compress&cs=tinysrgb&w=600"
]

let image = 0;

export function ElementDisplay() {
    function changeImage() {
        let random = Math.random()
        if (random > .5) {
            alert("I can't change the Image Yet")
        } else if (random > .75) {
            alert("I still need to learn how to change the Image.")
        } else {
            alert("I do not know how to update the display after a function is ran. :(")
        }
    }

    return (
    <img 
        src={Photos[image]}
        onClick={changeImage}
    />
    )
}

// export function MyButton() {

// }
