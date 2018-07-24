import React, { Component } from 'react';
import RC2 from 'react-chartjs2';

class ProfileCompletion extends Component {
  constructor(props) {
    super();
    this.state = {
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
}
    componentDidMount() {
      fetch('/api/profileCompletion')
        .then(res => { return res.json()})
        .then(profile => {
          let total = 0;
          if(profile[0].first_name)
          {
            total = total + 5;
          }
<<<<<<< HEAD

          if(profile[0].email){
            this.state.total = this.state.total + 20;
          }
          if(profile[0].password){
            this.state.total = this.state.total + 20;
          }
          if(profile[0].age){
            this.state.total = this.state.total + 20;
          }
          if(profile[0].country){
            this.state.total = this.state.total + 20;
=======
          if(profile[0].email)
          {
            total = total + 5;
          }
          if(profile[0].last_name)
          {
            total = total + 5;
          }
          if(profile[0].field_of_study)
          {
            total = total + 5;
          }
          if(profile[0].lvl_educ)
          {
            total = total + 5;
          }
          if(profile[0].c_at)
          {
            total = total + 5;
          }
          if(profile[0].c_rain)
          {
            total = total + 5;
          }
          if(profile[0].c_snow)
          {
            total = total + 5;
          }
          if(profile[0].c_emp)
          {
            total = total + 5;
          }
          if(profile[0].c_tui)
          {
            total = total + 5;
          }
          if(profile[0].c_col)
          {
            total = total + 5;
          }
          if(profile[0].c_rank)
          {
            total = total + 5;
          }
          if(profile[0].o_rank)
          {
            total = total + 5;
          }
          if(profile[0].o_tui)
          {
            total = total + 5;
          }
          if(profile[0].o_emp)
          {
            total = total + 5;
          }
          if(profile[0].o_col)
          {
            total = total + 5;
          }
          if(profile[0].o_w)
          {
            total = total + 5;
          }
          if(profile[0].o_at)
          {
            total = total + 5;
          }
          if(profile[0].o_rain)
          {
            total = total + 5;
          }
          if(profile[0].o_snow)
          {
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
>>>>>>> ab97acfcac2c1085a06ac9ae00ab49484c8836e6
          }
   newChartData.datasets[0].data.push(total,(100 - total));

   this.setState({chartData: newChartData});

<<<<<<< HEAD
// console.log(11,  this.state.total);
  this.state.chartData.datasets[0].data.push(this.state.total,(100 - this.state.total));
          this.setState({profile})
=======

>>>>>>> ab97acfcac2c1085a06ac9ae00ab49484c8836e6
      });
    }




  render() {
    return (
      <div>

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






      </div>
    );
  }
}

export default ProfileCompletion;
