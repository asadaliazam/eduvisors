import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

class Weather extends Component {
//  province: props.match.params.province,
//  type: props.match.params.type,

  // MODEL
  constructor(props) {
    //console.log(props);
    //console.log(111, props.province)
    //console.log(222, props.match)
    super(props);
    this.state = {
      province: props.match.params.province,
      // weather: [],
      rod: [],
      chartData :
          {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                  label: `Weather in ${this.props.province}`,
                  // backgroundColor: 'rgb(255, 100, 0)',
                  data: [50, 40, 35, 20, 20, 10, 15, 180, 9, 8, 7, 5 ],
                      },
                      {
                  label: `Weather in 1`,
                  data: [0, 10, 5, 2, 200, 30, 45, 20, 18, 16, 14, 10 ],
                      },
                      {
                  label: `Weather in 2`,
                  data: [120, 30, 20, 12, 10, 40, 25, 30, 27, 24, 21, 150 ],
                }] // end of DATASETS
          } // end of chartData
    };  // end of state
  }  // end of constructor

  // CONTROLLER
  componentDidMount() {

    fetch(`/api/weather/${this.state.province}`)
      .then(res => res.json())
      .then( rod => this.setState({ rod },
      Object.entries( rod ).forEach(  ([key, value]) => {
        console.log(key, value)

      })

    )).catch((err) => console.log(55555, err));

  }

  // VIEW
  render() {
    // console.log(this.state.weather[0])
    console.log(999, this.state.rod)
    return (
      <div>
        <div>
              <Line
                data = {this.state.chartData}
                options={{ maintainAspectRatio: false }}
              />

        </div>
      </div>
    );
  }
}

export default Weather;
