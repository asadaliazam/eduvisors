import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

class CostOfLivingGraph extends Component {

  constructor(props) {
    super(props);
    //console.log(1000, props)
    this.fetchFromDatabase = this.fetchFromDatabase.bind(this);
    this.state = {
      province: props.province,
      costOfLivingData: 0,
      chartData :
          {
            labels: [],
            datasets: [{
                    label: "",
                    backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#36A2EB",
                "#36A2EB",
                "#36A2EB",
                "#36A2EB",
                "#36A2EB",
                "#36A2EB",
                "#36A2EB",

            ],
                    borderColor: 'rgb(255, 255, 255)',
                    data: [],
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

    fetch("/api/costOfLivingGraph", {
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
        this.setState({costOfLivingData:(json)}, function()
      {

        let newChartData =
            {
              labels: [],
              datasets: [{
                      label: "",
                      backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#36A2EB",
                  "#36A2EB",
                  "#36A2EB",
                  "#36A2EB",
                  "#36A2EB",
                  "#36A2EB",
                  "#36A2EB",
                  "#36A2EB",

              ],
                      borderColor: 'rgb(255, 255, 255)',
                      data: [],
                    }]
            }





            //console.log(newChartData);
      Object.entries(this.state.costOfLivingData[0]).forEach(([key,value]) => {
        newChartData.labels.push(key);
        newChartData.datasets[0].data.push(value);

      });


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
      <div className="costofliving graphContainer">
        <h2>Cost of living Graph</h2>

          <Bar
            data = {this.state.chartData}
            options={{ responsive: true,
                }}
            />

      </div>
    );
  }
}

export default CostOfLivingGraph;
