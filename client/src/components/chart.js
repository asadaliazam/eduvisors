import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import './chart.css';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData :
      {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
        label: "My First dataset",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
        }]

      }
    };
  }

  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
  }

  render() {
    return (
      <div>
        <h2>Chart</h2>
        <div className = "chart">
          <Bar
            data = {this.state.chartData}
            options = {{maintainAspectRatio: false
            }}
            />
        </div>
      </div>
    );
  }
}

export default Chart;
