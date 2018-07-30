import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
// =======================================
import LoginMenu from './LoginMenu';
import Footer from './Footer';
import {Link} from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});


class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    email: '',
    firstName: '',
    lastName: '',
    levelOfEducation: '',
    fieldOfStudy: '',
    response: 2,
  };
  this.handleSubmit = this.handleSubmit.bind(this);

}

  handleChange = email => event => {
    this.setState({
      [email]: event.target.value,
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    let reqBody =
    {
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      fieldOfStudy: this.state.fieldOfStudy,
      levelOfEducation: this.state.levelOfEducation

    }

    fetch("/api/RegisterAction", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
                "Content-Type": "application/json"
            }
    }).then((res) => {
        if (res.ok){
          return res.json();
        } else {
          throw new Error ('Something went wrong with your fetch');
        }
      }).then((json) => {
        this.setState({response:(json)}, function()
      {
          console.log(this.state.response);
      });
      })

  }

  render() {
    const { classes } = this.props;
    if(this.state.response === 1)
    {
      console.log(this.state.response);
      return <Redirect to='./HomePage' />
    }

    return(
      <div className="RegPage">
      <LoginMenu />
      <Card className="RegContent">
        <img src={require("./img/flag-sma.png")} alt="SomePic"/>

        <CardContent>
          <h2>Quick Registration</h2>
      <form onSubmit = {this.handleSubmit} className={classes.container} noValidate autoComplete="off">
        <TextField
          id="email"
          label="Email"
          type="email"
          className={classes.textField}
          value={this.state.email}
          onChange={this.handleChange('email')}
          margin="normal"
        />
        <TextField
          id="firstName"
          label="First Name"
          type="text"
          className={classes.textField}
          value={this.state.firstName}
          onChange={this.handleChange('firstName')}
          margin="normal"
        />
        <TextField
          id="lastName"
          label="Last Name"
          type="text"
          className={classes.textField}
          value={this.state.lastName}
          onChange={this.handleChange('lastName')}
          margin="normal"
        />
        <TextField
          id="levelOfEducation"
          label="Level Of Education"
          type="text"
          className={classes.textField}
          value={this.state.levelOfEducation}
          onChange={this.handleChange('levelOfEducation')}
          margin="normal"
        />
        <TextField
          id="fieldOfStudy"
          label="Field of Study"
          type="text"
          className={classes.textField}
          value={this.state.fieldOfStudy}
          onChange={this.handleChange('fieldOfStudy')}
          margin="normal"
        />
        <Button  type="submit" variant="contained" color="primary" className="btn">
        Register
      </Button>

      </form>
      </CardContent>
    </Card>
    <Footer />
  </div>
    )
  }
}

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegisterForm);
