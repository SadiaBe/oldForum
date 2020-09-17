import React from 'react';
import CommentCard from './CommentCard';
import CommentForm from './CommentForm';
import { Button, Comment, Form, Header } from 'semantic-ui-react'


class CommentsContainer extends React.Component {
  state = {
    comments: [],
  }

  // componentDidMount(){
  //   fetch(`http://localhost:3000/comments`)
  //   .then(res => res.json())
  //   .then(commentObj => {
  //     this.setState({
  //       comments: commentObj
  //     })
  //   })}

  handleComments = (commentObj) => {
    // console.log("hit")
    let newCommentObj = {
      comment: commentObj.comment
    }
    // let newCommentsArray = [...this.state.comments, newCommentObj]
    // this.setState({
    //   comments: newCommentsArray
   }
  //  fetch("http://localhoast:3000/comments", )

  //  fetch("http://localhost:3000/comments", {
  //   method: "POST",
  //   headers: {
  //      'Content-Type': 'application/json' },
  //   body: JSON.stringify(newCommentObj)
  //   })
  //   .then( r => r.json())
  //   .then( (newComment) => {
  //     let newCommentsArray = [newComment, ...this.state.comments]
  //     this.setState({
  //       comments: newCommentsArray
  //     })
  //   })
  // }

render() {
  // console.log("HELLO")
  //  comments are now in state
return (
  <div>
  
  {/* { this.state.comments.map((comment, index)=> <CommentCard key={`${index}`} comment={comment}/>) }  */}
    {/* <CommentCard comments={this.state.comments}/> */}
    {/* <CommentForm handleComments={this.handleComments}/> */}
    </div>

  );
}
}
export default CommentsContainer;
