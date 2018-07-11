import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import './snowfall.css';

class Snowfall extends Component {

  // MODEL
  constructor(props) {
    super(props);
    this.state = {
      snowfall: [],
      chartData :
      {
        labels: [],
        datasets: [{
        label: "Snowfall",
        backgroundColor: 'rgb(255, 255, 132)',
        borderColor: 'rgb(255, 255, 255)',
        data: [],
        }]
      },
      value : 'AB' // end of chartData
    };
    this.handleChange = this.handleChange.bind(this);
    this.loadChartData = this.loadChartData.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }



  loadChartData()
  {

    let reqBody =
    {
      province: this.state.value
    };

    fetch("/api/snow", {
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
        let state = this.state;
        console.log(json);
        state.snowfall = json;

        for (let key in state.snowfall[0])
        {
          state.chartData.labels.push(key);
          state.chartData.datasets[0].data.push(parseFloat(state.snowfall[0][key]));

          //this.state.chartData.datasets[0].data.setState({parseFloat(snowfall[0][key])});
          //console.log(snowfall[0][key]);

        }

        this.setState(state);
      })


  }

  // CONTROLLER
  componentDidMount()
  {
    this.loadChartData();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.loadChartData();

  }



  // VIEW
  render() {


    return (

      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite La Croix flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="AB">Grapefruit </option>
            <option value="BC">Lime</option>
            <option value="AB">Coconut</option>
            <option value="BC">Mango</option>
          </select>
        </label>
        <p> {this.state.value} </p>
      </form>
        <h2>Snowfall</h2>

        <div>
          <Line
            data = {this.state.chartData}
            options={{ maintainAspectRatio: false
            }}
            />
            {this.state.chartData.labels}
        </div>
      </div>
    );
  }
}

export default Snowfall;
