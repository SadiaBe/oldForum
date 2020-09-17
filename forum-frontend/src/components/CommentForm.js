import React from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react';

class CommentCard extends React.Component {

  state = {
    comment: '',
  }

  handleInputs = (e) => {
    // console.log(e.target.value)
    this.setState({
      [e.currentTarget.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log("hit")
    this.props.handleComments(this.state.comment)
    this.setState({
      comment: "",
    })
  }

render() {
  // console.log("PROPS", this.props)
return (
  <div> 

    <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input onChange={this.handleInputs} value={this.state.comment} fluid label="comment" placeholder="comment" name="comment" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>

    {/* <Form reply>

    <Form.Input 
      onChange={this.handleInputs} 
      value={this.state.comment} 
      name="comment" 

    />
    <Form.Button 
      content='Add Comment' 
      labelPosition='left' 
      icon='edit' primary 
    />

    </Form>  */}

  </div>

  );
}
}
export default CommentCard;