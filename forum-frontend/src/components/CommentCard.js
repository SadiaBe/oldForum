import React from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react'



class CommentCard extends React.Component {

  
render() {
  // console.log(this.props.comment)
  let {comment} = this.props.comment

return (
    <div> 
      <Comment.Group>
    <Comment>
      <Comment.Content>
        <Comment.Author> </Comment.Author>
        <Comment.Metadata>
          <div></div>
        </Comment.Metadata>
        <Comment.Text>
          Comments:
          <br/>
          <p> 
            {comment}
          </p>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
      </Comment.Content>
    </Comment>


    
  </Comment.Group>
  
   </div>

  );
}
}
export default CommentCard;
