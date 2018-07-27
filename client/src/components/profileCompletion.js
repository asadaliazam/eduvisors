import React, { Component } from 'react';
import RC2 from 'react-chartjs2';

class ProfileCompletion extends Component {
  constructor(props) {
    super();
    this.state = {
      profileOrError: 0,
      profile: [],

      total: 0,
      chartData :
      {
        labels: ["Profile"],
        datasets: [{
        label: false,
        backgroundColor: ['rgb(255, 255, 255)','rgb(255, 23, 23)'],
        borderColor: 'rgb(255, 255, 255)',
        data: []
        }]
      }
    };
    this.fetchFromDatabase = this.fetchFromDatabase.bind(this);
}

componentWillReceiveProps(randomVariable){
  this.fetchFromDatabase();
}

fetchFromDatabase(){
  fetch('/api/profileCompletion')
    .then(res => { return res.json()})
    .then(profile => {
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
            let newChartData =
            {
                labels: ["Profile"],
                datasets: [{
                label: false,
                backgroundColor: ['green','rgb(0,0,0)'],
                borderColor: 'rgb(255, 255, 255)',
                data: []
                }]
            }

            newChartData.datasets[0].data.push(total,(100 - total));

            this.setState({chartData: newChartData});
            // console.log(11,  this.state.total);

      });// end of last THEN
}  // end of FETCH

componentDidMount()
{
  this.fetchFromDatabase();
}

render() {
  return (

      <div className = "profileCompletion">
          <RC2
                data = {this.state.chartData}
                options={{
                       maintainAspectRatio: false,
                       scaleShowVerticalLines: false,
                       legend: { display: false },
                       tooltips: {
                          mode: 'index',
                          axis: 'y'
                      }
                  }}
                type='doughnut'
            />
      </div>

  );
} // end of RENDER

}

export default ProfileCompletion;
