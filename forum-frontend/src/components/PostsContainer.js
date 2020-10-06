import React from 'react';
import PostCard from './PostCard';
import PostForm from "./PostForm.js";



class PostContainer extends React.Component {
//need to map though the props and have the map return a postcard component for each element


    render() {
        console.log(this.props)
    return (
        <div> 
         <PostForm 
         handleSubmissionOfForm={this.props.handleSubmissionOfForm}/>
{ this.props.posts.map(post => 
            <PostCard 
                key={`${post.id}`} 
                post={post} 
                deletePost={this.props.deletePost}
                updatePostLikes={this.props.updatePostLikes}
                updatePostLikes={this.props.updatePostLikes}/>)
     }
         </div>
    );
}}
export default PostContainer;

