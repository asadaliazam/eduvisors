import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
// =======================================
import LoginMenu from './LoginMenu';
import Footer from './Footer';
// import {Link} from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';




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
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
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
          required
          id="email"
          label="Email"
          type="email"
          className={classes.textField}
          value={this.state.email}
          onChange={this.handleChange('email')}
          margin="normal"
        />
        <TextField
          required
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
        <FormControl className={classes.formControl}>
         <InputLabel>Level Of Education</InputLabel>
        <Select
            value={this.state.levelOfEducation}
            onChange={this.handleChange('levelOfEducation')}
            input={<Input name="levelOfEducation" id="levelOfEducation" />}
          >
            <MenuItem value={'BD'}>Bachelor/First Professional Degree</MenuItem>
            <MenuItem value={'MS'}>Masters Degree</MenuItem>
            <MenuItem value={'DC'}>Doctorate</MenuItem>
            <MenuItem value={'GD'}>Graduate Level Certificate/Diploma</MenuItem>
            <MenuItem value={'UD'}>Undergraduate Level Certificate/Diploma</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
         <InputLabel>Field Of Study</InputLabel>
        <Select
            value={this.state.fieldOfStudy}
            onChange={this.handleChange('fieldOfStudy')}
            input={<Input name="fieldOfStudy" id="fieldOfStudy" />}
          >
            <MenuItem value={'educ'}>Education</MenuItem>
            <MenuItem value={'visu'}>Visual and performing arts  and communications technologies</MenuItem>
            <MenuItem value={'huma'}>Humanities</MenuItem>
            <MenuItem value={'soci'}>Social and behavioural sciences</MenuItem>
            <MenuItem value={'laws'}>Law,  legal professions and studies</MenuItem>
            <MenuItem value={'buss'}>Business management and public administration</MenuItem>
            <MenuItem value={'scie'}>Physical and life sciences and technologies</MenuItem>
            <MenuItem value={'math'}>Mathematics computer and information sciences</MenuItem>
            <MenuItem value={'engi'}>Engineering</MenuItem>
            <MenuItem value={'arch'}>Architecture and related technologies</MenuItem>
            <MenuItem value={'agri'}>Agriculture natural resources and conservation</MenuItem>
            <MenuItem value={'dent'}>Dentistry</MenuItem>
            <MenuItem value={'medi'}>Medicine</MenuItem>
            <MenuItem value={'nurs'}>Nursing</MenuItem>
            <MenuItem value={'phar'}>Pharmacy</MenuItem>
            <MenuItem value={'vete'}>Veterinary medicine</MenuItem>
            <MenuItem value={'othe'}>Other health, parks,  recreation and fitness</MenuItem>
            <MenuItem value={'emba'}>Executive masters of business administration</MenuItem>
            <MenuItem value={'rmba'}>Regular masters of business administration</MenuItem>
            <MenuItem value={'pers'}>Personal, protective and transportation services</MenuItem>

          </Select>
        </FormControl>


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
