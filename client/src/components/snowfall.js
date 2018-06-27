import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import './snowfall.css';

class Snowfall extends Component {

  // MODEL
  constructor(props) {
    //console.log(props);
    super(props);
    this.state = {
      province: props.match.params.province,
      type: props.match.params.type,
      snowfall: [],
      chartData :
      {
        labels: [],
        datasets: [{
        label: "Snowfall",
        backgroundColor: 'rgb(255, 0, 132)',
        borderColor: 'rgb(255, 255, 255)',
        data: [],
        }]
      } // end of chartData
    };
  }

  // CONTROLLER
  componentDidMount() {

    fetch(`/api/weather/${this.state.province}/${this.state.type}`)
      .then(res => res.json())
      .then(snowfall => this.setState({snowfall}, function (){
        console.log(999, snowfall);
        console.log(111, this.state.snowfall);
        //this.setState();
        //console.log(this.state.chartData);
        for (let key in snowfall[0])
        {
          this.state.chartData.labels.push(key);
          this.state.chartData.datasets[0].data.push(parseFloat(snowfall[0][key]));

          //this.state.chartData.datasets[0].data.setState({parseFloat(snowfall[0][key])});
          //console.log(snowfall[0][key]);
        }
        //this.state.chartData.labels = ["asad", "rod"];
        //console.log(snowfall[6].jan);
        console.log(this.state.chartData.labels)
        console.log(this.state.chartData.datasets[0].data)
        //console.log(this.state.chartData)

      }));

  }

  // VIEW
  render() {

    //console.log(100, this.state.chartData.labels)
    //this.state.chartData.labels = ["asad", "rod"];
    //console.log(200, this.state.chartData.labels);
    //console.log(this.state.snowfall);
    for (let key in this.state.snowfall[0])
    {
      this.state.chartData.labels.push(key);
      this.state.chartData.datasets[0].data.push(parseFloat(this.state.snowfall[0][key]));

      //this.state.chartData.datasets[0].data.setState({parseFloat(snowfall[0][key])});
      //console.log(snowfall[0][key]);
    }

    return (
      <div>
        <h2>Snowfall</h2>

        <div>
          <Line
            data = {this.state.chartData}
            options={{ maintainAspectRatio: false
            }}
            />
        </div>
      </div>
    );
  }
}

export default Snowfall;
