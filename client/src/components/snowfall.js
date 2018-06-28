import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import '../styles/snowfall.css';

class Snowfall extends Component {

  // MODEL
  constructor(props) {
    //console.log(000, props);
    super(props);
    console.log(props.match)
    this.state = {
      province: props.match.params.province,
      type: props.match.params.type,
      snowfall: [],
      chartData :
          {
            labels: [],
            datasets: [{
                    label: "",
                    backgroundColor: 'rgb(255, 0, 132)',
                    borderColor: 'rgb(255, 255, 255)',
                    data: [],
                  }] // end of datasets
          } // end of chartData
    };  // end of state
  }  // end of constructor

  // CONTROLLER
  componentDidMount() {

    fetch(`/api/weather/${this.state.province}/${this.state.type}`)
      .then(res => res.json())
      .then(snowfall => this.setState({snowfall}, function (){
        //console.log(111, snowfall);
        //console.log(222, this.state.snowfall);
        //console.log(333, this.state.chartData);
        //console.log(444, this.state.type);
        //console.log(555, this.state.chartData.labels)
        //console.log(666, this.state.chartData.datasets[0].data)
      }));

  }

  // VIEW
  render() {

    switch (this.state.type){
            case "snow":
                this.state.chartData.datasets[0]['label'] = "Snowfall";
                this.state.chartData.datasets[0]['backgroundColor'] = 'rgb(153, 51, 255)';
                break;
            case "rain":
                this.state.chartData.datasets[0]['label'] = "Rainfall";
                this.state.chartData.datasets[0]['backgroundColor'] = 'rgb(0, 128, 255)';
                break;
            case "temp_low":
                this.state.chartData.datasets[0]['label'] = "Low Temperatures";
                this.state.chartData.datasets[0]['backgroundColor'] = 'rgb(0, 204, 0)';
                break;
            case "temp_high":
                this.state.chartData.datasets[0]['label'] = "High Temperatures";
                this.state.chartData.datasets[0]['backgroundColor'] = 'rgb(255, 255, 0)';
                break;
            case "temp_avg":
                this.state.chartData.datasets[0]['label'] = "Average Temperatures";
                this.state.chartData.datasets[0]['backgroundColor'] = 'rgb(255, 0, 0)';
                break;
    }
    for (let key in this.state.snowfall[0])
    {
      this.state.chartData.labels.push(key);
      this.state.chartData.datasets[0].data.push(parseFloat(this.state.snowfall[0][key]));
      //console.log(777, snowfall[0][key]);
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
