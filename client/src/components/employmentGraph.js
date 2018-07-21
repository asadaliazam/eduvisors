import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';

class EmploymentGraph extends Component {

  constructor(props) {
    super(props);
    //console.log(1000, props)
    this.fetchFromDatabase = this.fetchFromDatabase.bind(this);
    this.state = {
      province: props.province,
      employmentRate: 0,
      chartData :
          {
            labels: ["Employed", "Unemployed"],
            datasets: [{
                    label: "",
                    backgroundColor: [
                "#FF6384",
                "#36A2EB",

            ],
                    borderColor: 'rgb(255, 255, 255)',
                    data: [70,30],
                  }]
          }
    };
  }


  componentDidMount()
  {
    this.fetchFromDatabase();
  }
  fetchFromDatabase()
  {
    let reqBody =
    {
      province: this.state.province
    }

    fetch("/api/employment", {
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
        this.setState({employmentRate:(json[0].rate)}, function()
      {
        //console.log(this.state.employmentRate);
        let employmentRate = parseFloat(this.state.employmentRate) * 100;
        let unemploymentRate = 100 - employmentRate;
        //console.log(employmentRate, unemploymentRate);

        let newChartData =
            {
              labels: ["Employed", "Unemployed"],
              datasets: [{
                      label: "",
                      backgroundColor: [
                  "#FF6384",
                  "#36A2EB",

              ],
                      borderColor: 'rgb(255, 255, 255)',
                      data: [employmentRate, unemploymentRate],
                    }]
            }
            //console.log(newChartData);

        this.setState({chartData: newChartData});
      });
      })
  }

  componentWillReceiveProps(nextProps)
  {
    this.setState({province: nextProps.province}, this.fetchFromDatabase);
  }

  componentDidUpdate()
  {


  }

  // VIEW
  render() {



    return (
      <div className="employement graphContainer">
        <h2>Employment</h2>

          <Doughnut
            data = {this.state.chartData}
            options={{ responsive: true,
              rotation: 1 * Math.PI,
              circumference: 1 * Math.PI  }}
            />

      </div>
    );
  }
}

export default EmploymentGraph;
