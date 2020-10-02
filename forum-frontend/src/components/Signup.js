import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class Signup extends React.Component {
render() {
return (
    <div> Signup comp
      <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>
              
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
            
            
             </div>

  );
}
}
export default Signup;
