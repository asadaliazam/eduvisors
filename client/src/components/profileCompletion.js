import React, { Component } from 'react';
import RC2 from 'react-chartjs2';
import './chart.css';

class ProfileCompletion extends Component {
  constructor() {
    super();
    this.state = {
      chartData :
      {
        labels: ["Profile"],
        datasets: [{
        label: null,
        backgroundColor: ['rgb(255, 255, 132)','rgb(255, 108, 132)'],
        borderColor: 'rgb(255, 255, 255)',
        data: [70,30],
        }]

      }
    };
  }



  render() {
    return (
      <div>
        <h2>Profile Completion</h2>
        <div className = "profileCompletion">
          <RC2
            data = {this.state.chartData}
            options={{
         maintainAspectRatio: false,
         scaleShowVerticalLines: false,
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
