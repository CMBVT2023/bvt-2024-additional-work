import React from 'react';
import CommentHeader from './Header'
import CommentBody from './Body'
import InteractButton from './InteractButton';


function CommentCard(props) {
  return (
    <div className='commentCard'>
      <CommentHeader
      userName={props.commentObject.username}
      userImage={props.commentObject.profileImg} />
      <CommentBody commentContent={props.commentObject.comment}/>
      <div className='commentButtons'>
        <InteractButton interaction='Like'/>
        <InteractButton interaction='Dislike'/>
        <InteractButton interaction='Share'/>
      </div>
    </div>
  )
}

export default CommentCard;