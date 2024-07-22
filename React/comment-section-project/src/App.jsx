import React from 'react';
import {comments} from './components/commentData'
import CommentCard from './components/Card'
import './card.css'

let userComments = comments.map((comment) => <CommentCard buttonDiv='commentButtons' divName="commentHeading" commentObject={comment} />)

function App() {
  return (
    <div className='commentCollection'>
      {userComments}
    </div>
  )
}

export default App;