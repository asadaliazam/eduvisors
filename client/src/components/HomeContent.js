import React, { Component } from 'react';

import Snowfall from './snowfall';
import EmploymentGraph from './employmentGraph';
import CostOfLivingGraph from './costOfLivingGraph';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversity } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
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
            <form onSubmit={this.handleSubmit}>
              <label>

                CANADA
                <select value={this.state.value} onChange={this.handleChange}>
                  <option value="BC">BC </option>
                  <option value="AB">AB</option>
                  <option value="NL">NL</option>
                  <option value="MB">MB</option>
                </select>
              </label>
              <div className="information">
                <ul>
                <li><FontAwesomeIcon icon={faUniversity} />100</li>
                <li><FontAwesomeIcon icon={faUsers} /></li>
              </ul>
              </div>

              {/* <div>
                <FontAwesomeIcon icon={graduationCap} />
              </div> */}

            </form>




            {/* <Card >
        <CardContent>
          <Typography color="textSecondary">
            Word of the Day
          </Typography>
          <Typography variant="headline" component="h2">
            benevolent
          </Typography>
          <Typography  color="textSecondary">
            adjective
          </Typography>
          <Typography component="p">
            well meaning and kindly.<br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card> */}
            {/* <div className = "charts"> */}
                <div className="top-chart">
                <p> {this.state.value} </p>
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
                <div className="down-charts">
                    <div>
                      <EmploymentGraph province={this.state.value} />
                    </div>
                    <div>
                      <CostOfLivingGraph province={this.state.value} />
                    </div>




              </div>
            {/* </div> */}
          </div>
        </div>
    );
  }

}

export default HomeContent;
// export default with()(SimpleCard);
