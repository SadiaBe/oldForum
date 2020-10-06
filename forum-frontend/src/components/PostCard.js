import React from 'react';
import LikeButton from './LikeButton';
import CommentsContainer from './CommentsContainer';
import CommentCard from './CommentCard';
import CommentForm from './CommentForm';
import { Card, Icon, Image } from 'semantic-ui-react';

class PostCard extends React.Component {

  // console.log(this.props)

incrementLikes = () => {
// console.log(this.props.post.likes)

this.props.updatePostLikes(this.props.post.id)
// console.log(e.target.value)
// this.setState((prevState) => ({
//   likes: prevState.likes + 1
// })); 
 }

 

handleDelete = (event) => {
//  we need to send back up the id of the post that we are trying to delete because the state of post is in App 
let { deletePost, post} = this.props
deletePost(post.id)
}


render() {
  // console.log("HELLO post")
let post = this.props.post
let {title, content, likes, user_id, comments, created_at} = post
let mappedComment = () => comments.map(comment => <CommentCard key={`${comment.id}`} comment={comment}/>)


return (
<div class="centered"> 
<Card>
    {/* <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} /> */}
    <Card.Content>
      <Card.Header>Title: {title}</Card.Header>
      <Card.Meta>
        <span className='date'>{created_at}</span>
      </Card.Meta>
      <Card.Description>
        Post: 
        <br/>
        {content}
      </Card.Description>
      <br/>
      <button class="deleteButton" onClick={ this.handleDelete }> delete post </button>
      <button class="likeButton" onClick={ this.incrementLikes }> like {this.props.post.likes} </button>
      

      {/* <div class="ui labeled button" tabindex="0" >
        <div class="ui button">
         <i class="heart icon"></i> Like Me
            </div>
                <a class="ui ba`sic label">
             {likes}
          </a>
      </div> */}

      <br/>
      {mappedComment()}
      <CommentsContainer/>
    </Card.Content>
  </Card>
  </div>

  );
}}
export default PostCard;
