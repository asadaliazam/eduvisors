import React, { Component } from 'react';
import axios from 'axios';




class Register extends Component {
  constructor() {
   super();

    this.state = {
      formFields: {username: ''}
    }

    this.formHandler = this.formHandler.bind(this);
  }

  render() {
    return(
     <div>
    <div className="panel panel-primary">
      <div className="panel panel-heading">React Forum - Register</div>
      <div className="panel panel-body">
        <form onSubmit={this.formHandler}>
          <strong>Username:</strong> <br /> <input type="text" name="username" placeholder="Nathaniel" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.username} /> <br />
          <strong>Email:</strong> <br /> <input type="email" name="email" placeholder="me@example.com" /> <br />
          <strong>Confirm Email:</strong> <br /> <input type="email" name="confirmemail" placeholder="me@example.com" /> <br />
          <strong>Password:</strong> <br /> <input type="password" name="password" placeholder="********" /> <br />
          <strong>Confirm Password:</strong> <br /> <input type="password" name="confirmpassword" placeholder="********" /> <br /><br />
          <button className="btn btn-primary">Register Account</button>
        </form>
      </div>
    </div>
  </div>

    );
  }

  inputChangeHandler(e) {
    console.log(1, e);
    console.log(2, e.target);
   let formFields = {...this.state.formFields};
   formFields[e.target.name] = e.target.value;
   this.setState({
    formFields

   });
   console.log(3, formFields);
  }

  formHandler(e) {
    e.preventDefault();
    console.log(4, this.state.formFields);
   axios.post('http://localhost:5000/api/register', this.state.formFields)
     .then(function(response){
       console.log(response);
       //Perform action based on response
   })
     .catch(function(error){
       console.log(error);
       //Perform action based on error
     });
  }
}

export default Register
