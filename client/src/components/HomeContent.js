import React, { Component } from 'react';

import Snowfall from './snowfall';
import EmploymentGraph from './employmentGraph';
import CostOfLivingGraph from './costOfLivingGraph';
import TuitionGraph from './TuitionGraph';
import SchoolRankGraphList from './SchoolRankGraphList';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversity } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import Button from '@material-ui/core/Button';
// ===============Material UI design for the graphs==========
//
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import { fagraduationCap } from '@fortawesome/free-solid-svg-icons'

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
            <div className="surveyLink">
              <p>Take the survey and we will find your matchmake university:</p>
              <Button  type="submit" variant="contained" color="primary" className="surveyButton">
                <Link to="/HomePage/survey">Take Survey</Link>
              </Button>
            </div>
            <div className="top-content">
              <form onSubmit={this.handleSubmit}>
                <label>

                  Choose a Province:
                  <select value={this.state.value} onChange={this.handleChange}>
                    <option value="AB" label="Alberta">AB</option>
                    <option value="BC" label="British Columbia">BC </option>
                    <option value="NL" label="NewFoundLand">NL</option>
                    <option value="MB" label="Manitoba">MB</option>
                    <option value="ON" label="Ontario">ON</option>
                    <option value="PE" label="Prince Ed Island">PE</option>
                    <option value="NS" label="Nova Scotia">NS</option>
                    <option value="NB" label="New Brunswick">NB</option>
                    <option value="QC" label="Quebec">QC</option>
                    <option value="SK" label="Saskatchewan">SK</option>
                  </select>
                </label>

              <div className="information">
                <ul>
                  <li><FontAwesomeIcon icon={faUniversity} />100</li>
                  <li><FontAwesomeIcon icon={faUsers} />9.000</li>
                  <li><FontAwesomeIcon icon={faCoffee} />Aberdeen</li>

                </ul>
              </div>

            </form>



                <div className="top-chart">

                  <Snowfall province={this.state.value} type={'snow'} />
                </div>
          </div>

                <div className="down-charts">
                    <div>
                      <EmploymentGraph province={this.state.value} />
                    </div>
                    <div>
                      <CostOfLivingGraph province={this.state.value} />
                    </div>
                    <div>
                      <TuitionGraph province={this.state.value} />
                    </div>
                    <div>
                      <SchoolRankGraphList province={this.state.value} />
                    </div>

                </div>


        </div>

    </div>
    );
  }
}

export default HomeContent;
// export default with()(SimpleCard);
