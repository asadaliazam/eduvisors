import React, { Component } from 'react';

import Snowfall from './snowfall';
import EmploymentGraph from './employmentGraph';
import CostOfLivingGraph from './costOfLivingGraph';

class HomeContent extends Component {
  constructor(props) {
    super(props);
    this.state = {value:"BC"};
    this.handleChange = this.handleChange.bind(this);
  }

    handleChange(event) {
      this.setState({value: event.target.value});
    }
  render() {
    return (
      <div className="App">
          <div className="main-content">
            <form onSubmit={this.handleSubmit}>
              <label>
                Select here a Province to see data:
                <select value={this.state.value} onChange={this.handleChange}>
                  <option value="BC">BC </option>
                  <option value="AB">AB</option>
                  <option value="NL">NL</option>
                  <option value="MB">MB</option>
                </select>
              </label>
            </form>

            <div className = "charts">
                <div>
                  <Snowfall province={this.state.value} type={'snow'} />
                </div>
                {/* <div>
                  <Snowfall province={this.state.value} type={'rain'} />
                </div>
                <div>
                  <Snowfall province={this.state.value} type={'temp_low'} />
                </div>
                <div>
                  <Snowfall province={this.state.value} type={'temp_high'} />
                </div>
                <div>
                  <Snowfall province={this.state.value} type={'temp_avg'} />
                </div> */}
                <div>
                  <EmploymentGraph province={this.state.value} />
                </div>
                <div>
                  <CostOfLivingGraph province={this.state.value} />
                </div>
            </div>
          </div>
        </div>
    );
  }
}

export default HomeContent;
