import React, { Component } from 'react';
import {HorizontalBar} from 'react-chartjs-2';

class TuitionGraph extends Component {

  constructor(props) {
    super(props);
    //console.log(1000, props)
    this.fetchFromDatabase = this.fetchFromDatabase.bind(this);
    this.state = {
      province: props.province,
      tuitionData: 0,
      chartData : {
  labels: ['Graduate Programs', 'Undergraduate Programs'],
  datasets: [
    {
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: []
    }
  ]
},
options : {
    scales: {
        yAxes: [{
            display: true,
            ticks: {
                suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                // OR //
                beginAtZero: true   // minimum value will be 0.
            }
        }],
        xAxes: [{
            display: true,
            ticks: {
                suggestedMin: 3000,    // minimum will be 0, unless there is a lower value.
                // OR //

            }
        }]
    }
},
};

    };



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

    fetch("/api/TuitionGraph", {
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
        this.setState({tuitionData:(json)}, function()
      {

        let newChartData =
          {
    labels: ['Graduate Programs', 'Undergraduate Programs'],
    datasets: [
      {
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: []
      }
    ]
  }


      Object.entries(this.state.tuitionData).forEach(([key,value]) => {

      newChartData.datasets[0].data.push(parseFloat(value.average.toFixed(1)));
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
      <div>
        <h2>Tuition Graph</h2>
        <p> {this.state.province}</p>


          <HorizontalBar
            data = {this.state.chartData}
            options={this.state.options}
            />

      </div>
    );
  }
}

export default TuitionGraph;
