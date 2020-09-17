import React from 'react';
import NavBar from './components/NavBar.js';
import PostsContainer from './components/PostsContainer';
import './App.css';
import Search from './components/Search.js';
// import PostForm from './components/PostForm';
// import { Route, Switch } from 'react-router';
// import { Link, NavLink } from 'react-router-dom',


class App extends React.Component {
  state = {
    users: [],
    posts: [],
    searchTerm: ""
}

 componentDidMount(){
    fetch(`http://localhost:3000/users`)
    .then(res => res.json())
    .then(userObj => {
      this.setState({
        users: userObj
      })
    })
    fetch(`http://localhost:3000/posts`)
    .then(res => res.json())
    .then(postObj => {
      this.setState({
        posts: postObj
      })
    })
  }

  handleSubmissionOfForm = (postObj) => {
    let copiedPostObj = {
      title: postObj.title,
      content: postObj.content,
      user_id: postObj.user_id,
      likes: 0,
      comments: []
    }
    // fetch post 
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json' },
      body: JSON.stringify(copiedPostObj)
    })
    .then( r => r.json())
    .then( (newPost) => {
      // console.log(newPost)
      let newPostArray = [newPost, ...this.state.posts]
      this.setState({
        posts: newPostArray
      })
    })
   }

  handleInput  = (text) => {
    this.setState({
      searchTerm: text
    })
  }

  searchResults = () => {
    let filteredPosts = this.state.posts.filter(post => {
        return post.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || post.content.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      })
    return filteredPosts
  }

  deletePost = (id) => {
    let filteredArray = this.state.posts.filter(post => post.id !== id)
    this.setState( {
      posts: filteredArray
    })
  }

  updatePostLikes = (id) => {
    // we havd the id of the post needed to update need to spread old state, add on to the likes and then set state again 
    //find the index if the id we get, update the key value pairs  associatged with object using the spread operator and make that new state or you can use a map statment and bot way work. NEVER MUTATE state! 
    let updatedPosts = this.state.posts.map(post => {
      if (post.id === id) {
        console.log(post)
        return {...post, likes: post.likes + 10}
      } else {
        return post
      }
    })
    this.setState({
      post: updatedPosts
    })
  }

  render() {
    // console.log(this.state)
  return (
    <div className="App">
      <h1>My App</h1>
      <NavBar users={this.state.users} posts={this.state.posts} />
      <Search searchTerm={this.state.searchTerm} handleInput={this.handleInput} />
      <PostsContainer 
        users={this.state.users} 
        posts={this.searchResults()} 
        handleSubmissionOfForm={this.handleSubmissionOfForm}
        deletePost={this.deletePost} 
        updatePostLikes={this.updatePostLikes}/>
    </div> );
  }
}

export default App;