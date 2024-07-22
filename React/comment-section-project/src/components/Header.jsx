import React from 'react';

function CommentHeader(props) {
  return (
    <div className='commentHeading'>
      <img src={props.userImage}/>
      <h1>{props.userName}</h1>
    </div>
  )
}

export default CommentHeader;