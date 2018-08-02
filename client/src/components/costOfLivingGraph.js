import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';


class CostOfLivingGraph extends Component {

  constructor(props) {
    super(props);
    // console.log(1000, props)
    this.fetchFromDatabase = this.fetchFromDatabase.bind(this);
    this.state = {
      province: props.province,
      costOfLivingData: 0,
      chartData :
          {
            labels: [],
            datasets: [{
                    label: "",
                    backgroundColor: ["#4682B4",
                                      "#6A5ACD",
                                      "#4169E1",
                                      "#483D8B",
                                      "#2F6AB9",
                                      "#36A2EB",
                                      "#36A2EB",
                                      "#36A2EB",
                                      "#36A2EB"],
                    borderColor: 'rgb(255, 255, 255)',
                    data: []
                  }] // end of DATASETS
          }     // end of chartData
    };    // end of STATE
  }   // end of CONSTRUCTOR


  componentDidMount(){
        this.fetchFromDatabase();
  }

  fetchFromDatabase(){
        let reqBody = {
          province: this.state.province
        }
        fetch("/api/costOfLivingGraph", {
                method: "POST",
                body: JSON.stringify(reqBody),
                headers: { "Content-Type": "application/json" }
              }).then((res) => { if (res.ok){
                                  return res.json();
                                } else {
                                  throw new Error ('Something went wrong with your fetch');}})
                .then((json) => { this.setState({costOfLivingData:(json)}, function() {
                                    let newChartData = {
                                          labels: [],
                                          datasets: [{
                                                  label: `Living Expenses: ${this.state.province}`,
                                                  backgroundColor: ["#483D8B",
                                                                    "#4169E1",
                                                                    "#6A5ACD",
                                                                    "#4682B4",
                                                                    "#008F7A",
                                                                    "#008E9B",
                                                                    "#0089BA",
                                                                    "#0081CF",
                                                                    "#845EC2",
                                                                    "#D0E9F4" ],
                                                  borderColor: 'rgb(255, 255, 255)',
                                                  data: [],
                                                }] // end of DATASETS
                                        }; // end of newChartData
                                          //console.log(newChartData);
                                    Object.entries(this.state.costOfLivingData[0]).forEach(([key,value]) => {
                                                    newChartData.labels.push(key);
                                                    newChartData.datasets[0].data.push(value);});
                                    this.setState({chartData: newChartData});
                  }); }) // end of THEN
  } // end of fetchFromDatabase

  componentWillReceiveProps(nextProps) {
    this.setState({province: nextProps.province}, this.fetchFromDatabase);
  }

  render() {
    return (
      <div className="costofliving graphContainer">
          <h2>Cost of living Graph</h2>
          <div className="Bar">
                  <Doughnut
                  data = {this.state.chartData}
                  options={{ responsive: true }}
                  />
          </div>
          <p className="graphDescription">
            Canada's after-tax monthly income is about $3,000 which totals around $36,000per year. The U.S. sits just below Canada at approximately $2,942 per month, or roughly $35,300 per year. The real difference is seen in the cost of living. Finally, clothing is more expensive in Canada than in the United States
          </p>
      </div>
    );
  }
}

export default CostOfLivingGraph;
