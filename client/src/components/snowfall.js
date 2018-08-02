import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

// MAP
//https://reactjs.org/docs/lists-and-keys.html

class Snowfall extends Component {

//  province: props.match.params.province,
//  type: props.match.params.type,

  // MODEL
  constructor(props) {
    //console.log(props);
    //console.log(111, props.province)
    super(props);
    // console.log(1000, props)
    this.fetchFromDatabase = this.fetchFromDatabase.bind(this);
    this.state = {
      province: props.province,
      provname: [],
      type: props.type,
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

  componentDidMount()
  {
    this.fetchFromDatabase();
  }
  fetchFromDatabase()
  {
    fetch(`/api/snowfall/${this.state.province}/${this.state.type}`)
      .then(res => res.json())
      .then(snowfall => this.setState({snowfall: snowfall}, function(){
        let chartData = this.state.chartData;
        switch (this.state.type){
                case "snow":
                    chartData.datasets[0]['label'] = `Snowfall: ${this.state.province}`;
                    // this.setState(chartData.datasets[0]['label']: "Snowfall");
                    chartData.datasets[0]['backgroundColor'] = '#606476';
                    // chartData.datasets[0]['backgroundColor'] = 'rgb(153, 51, 255)';
                    break;
                case "rain":
                    chartData.datasets[0]['label'] = "Rainfall";
                    chartData.datasets[0]['backgroundColor'] = '#4C9CA9';
                    // chartData.datasets[0]['backgroundColor'] = 'rgb(0, 128, 255)';
                    break;
                case "temp_low":
                    chartData.datasets[0]['label'] = "Low Temperatures";
                    chartData.datasets[0]['backgroundColor'] = '#3B7BB8';
                    // chartData.datasets[0]['backgroundColor'] = 'rgb(0, 204, 0)';
                    break;
                case "temp_high":
                    chartData.datasets[0]['label'] = "High Temperatures";
                    chartData.datasets[0]['backgroundColor'] = '#7B2A49';
                    // chartData.datasets[0]['backgroundColor'] = 'rgb(255, 255, 0)';
                    break;
                case "temp_avg":
                    chartData.datasets[0]['label'] = "Average Temperatures";
                    chartData.datasets[0]['backgroundColor'] = '#B3A4A9';
                    // chartData.datasets[0]['backgroundColor'] = 'rgb(255, 0, 0)';
                    break;
                default:
                    break;
        }
        chartData.labels = [];
        chartData.datasets[0].data = [];

        for (let key in snowfall[0])
        {
          chartData.labels.push(key);
          chartData.datasets[0].data.push(parseFloat(snowfall[0][key]));
          // console.log(777, snowfall[0][key]);
        }


      //  this.setState(this.state);
      //}));
      // fetch(`/api/province/${this.state.province}`)
      //   .then(res => {res.json(); console.log(res);})
      //   .then(prov => this.setState({provname: (prov)}, function (){
      //   }));


        this.setState({chartData: chartData}, function(){
          //console.log(333, chartData);
        });

      }));
  }

  componentWillReceiveProps(nextProps)
  {
    // console.log(101010, nextProps);
   this.setState({province: nextProps.province, type: nextProps.type},  this.fetchFromDatabase);

   console.log(nextProps);

   //console.log(11, this.state)
  }

  componentDidUpdate()
  {
    //console.log(12, this.state);

  }

  // VIEW
  render() {



    return (
      <div className="snowfall graphContainer">
        <h2>Weather</h2>

          <Line
            data = {this.state.chartData}
            options={{ responsive: true  }}
            />
            <p className="graphDescription">
              The major Canadian city that falls outside the continental climate schema is Vancouver, which experiences an oceanic climate with a marked summer dry season. Of the eight largest Canadian cities, Ottawa, Montreal and Toronto have the warmest summers, Winnipeg the coldest winters, while Vancouver's winters are far milder than any other large city in Canada.</p>

              <p className="graphDescription">Central Canada and northern Canada experiences subarctic and Arctic climates, much of them arid. Those areas are not heavily populated due to the severe climate, where it drops below −20 °C (−4 °F) on most winter days and has a very brief summer season.
            </p>
      </div>
    );
  }
}

export default Snowfall;
