import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faTimes } from '@fortawesome/free-solid-svg-icons';


class Results extends Component {
  constructor(props) {
    super();
    this.state = {
      profileOrError: 0,
      profile: [],
      total: 0,
      profileComplete: 0,
    };
    this.fetchFromDatabase = this.fetchFromDatabase.bind(this);
}


fetchFromDatabase(){
  fetch('/api/profileCompletion')
    .then(res => { return res.json()})
    .then(profile => {
      console.log(profile);
      let total = 0;
      if(profile[0].first_name) {
        total = total + 5;
      }
      if(profile[0].email) {
        total = total + 5;
      }
      if(profile[0].last_name) {
        total = total + 5;
      }
      if(profile[0].field_of_study) {
        total = total + 5;
      }
      if(profile[0].lvl_educ) {
        total = total + 5;
      }
      if(profile[0].c_at) {
        total = total + 5;
      }
      if(profile[0].c_rain) {
        total = total + 5;
      }
      if(profile[0].c_snow) {
        total = total + 5;
      }
      if(profile[0].c_emp) {
        total = total + 5;
      }
      if(profile[0].c_tui) {
        total = total + 5;
      }
      if(profile[0].c_col) {
        total = total + 5;
      }
      if(profile[0].c_rank) {
        total = total + 5;
      }
      if(profile[0].o_rank) {
        total = total + 5;
      }
      if(profile[0].o_tui) {
        total = total + 5;
      }
      if(profile[0].o_emp) {
        total = total + 5;
      }
      if(profile[0].o_col) {
        total = total + 5;
      }
      if(profile[0].o_w) {
        total = total + 5;
      }
      if(profile[0].o_at) {
        total = total + 5;
      }
      if(profile[0].o_rain) {
        total = total + 5;
      }
      if(profile[0].o_snow) {
        total = total + 5;
      }

      console.log(total);
            if  (total > 25)
            {
              this.setState({profileComplete: 1});
            }





      });// end of last THEN
}  // end of FETCH

componentDidMount()
{
  this.fetchFromDatabase();
}

render() {

  if (this.state.profileComplete === 1)
  {
    return <Redirect to='./engine' />
  }
  return (
      <div className = "ResultsPageNew">
        <div className="CardHeader">
          <p>List of schools</p>
          <Link to="/HomePage/"><FontAwesomeIcon icon={faTimes} /></Link>
        </div>
        <div className="userMsg">
            <div className="awe">
            <FontAwesomeIcon icon={faExclamationTriangle} />

              <p>You have not taken the survey yet. Please take the survey before checking the results!</p>
            </div>


        </div>

      </div>
  );
} // end of RENDER

}

export default Results;
