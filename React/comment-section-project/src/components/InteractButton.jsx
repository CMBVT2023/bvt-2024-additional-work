import React from 'react';

function InteractButton(props) {
    function handleClick() {
        alert(`This comment has been ${props.interaction}d.`);
    }

    return (
        <button onClick={handleClick}>{props.interaction}</button>
    )
}

export default InteractButton;