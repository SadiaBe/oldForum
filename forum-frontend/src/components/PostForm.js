import React from 'react';
import { Form } from 'semantic-ui-react';

class PostForm extends React.Component {

 state = {
    title: '',
    content: '',
    user_id: ''
 }

handleInputs = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmissionOfForm(this.state)
    this.setState({
      title: "",
      content: "",
      user_id: ""
    })
  }

render() {
return (
    <div>
        <h3>Add a Post</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input onChange={this.handleInputs} value={this.state.title} fluid label="Title" placeholder="Title" name="title" />
            
            <Form.Input onChange={this.handleInputs} value={this.state.content} fluid label="content" placeholder="content" name="content" />
          </Form.Group>

          <Form.Input onChange={this.handleInputs} value={this.state.user_id} fluid label="user_id" placeholder="user_id" name="user_id" />
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
  );
}
}
export default PostForm;
