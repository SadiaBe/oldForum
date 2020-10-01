import React from 'react';
import { Form } from 'semantic-ui-react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class Login extends React.Component {
    
    render() {
        console.log(this.props)
    return (
    <div> Login comp
      
      <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>






      </div> 

  );
}
}
export default Login;
