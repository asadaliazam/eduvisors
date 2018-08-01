import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


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
            if ((profile[0].first_name) && (profile[0].email) && (profile[0].last_name) && (profile[0].field_of_study)  || (profile[0].lvl_educ)  || (profile[0].c_at) || (profile[0].c_rain) || (profile[0].c_snow) || (profile[0].c_emp) || (profile[0].c_tui) || (profile[0].c_col) || (profile[0].c_rank) || (profile[0].o_rank) || (profile[0].o_tui) || (profile[0].o_emp) || (profile[0].o_col) || (profile[0].o_w) || (profile[0].o_at) || (profile[0].o_rain) || (profile[0].o_snow)) {
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
        <p> You have not completed the survey, GO BACK AND DO THE SURVEY </p>
      </div>
  );
} // end of RENDER

}

export default Results;
