import React, { Component } from 'react';

import Snowfall from './snowfall';
import EmploymentGraph from './employmentGraph';
import CostOfLivingGraph from './costOfLivingGraph';
import TuitionGraph from './TuitionGraph';
import SchoolRankGraphList from './SchoolRankGraphList';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import InterestingFacts from './InterestingFacts';

import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

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
          <div className="Content">
            <div className="surveyLink">
                <p>Take the survey and we will find your matchmake university:</p>
                <Button  type="submit" variant="contained" color="primary">
                    <Link to="/HomePage/survey">Take Survey</Link>
                </Button>
            </div>
            <div className="CardHeader">
                <p>Province Facts</p>
            </div>
            <Card className="top-content homePageCard">
                  <CardContent className="CardContent">
                      <form onSubmit={this.handleSubmit}>
                          <div className="leftContent">
                              <label>
                                <p>Choose a Province:</p>
                                <select value={this.state.value} onChange={this.handleChange} >
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
                           </div>
                           <InterestingFacts province={this.state.value} />
                       </form>
                  </CardContent>
                </Card>


                <Card className="homePageCard">
                    <CardContent className="CardContent">
                    <Snowfall province={this.state.value} type={'snow'} />
                    </CardContent>
                </Card>

                <Card className="homePageCard">
                    <CardContent className="CardContent">
                        <EmploymentGraph province={this.state.value} />
                    </CardContent>
                </Card>

                <Card className="homePageCard">
                    <CardContent className="CardContent">
                        <CostOfLivingGraph province={this.state.value} />
                    </CardContent>
                </Card>

                  <Card className="homePageCard">
                        <CardContent className="CardContent">
                            <TuitionGraph province={this.state.value} />
                            <Typography component="p">
                               {/* {this.state.value} */}
                            </Typography>
                        </CardContent>
                  </Card>

                  <Card className="homePageCard">
                        <CardContent className="CardContent">

                            <SchoolRankGraphList province={this.state.value} />
                            <Typography component="p">
                               {/* {this.state.value} */}
                            </Typography>

                        </CardContent>
                  </Card>
                {/* </div>       */}

          </div>

    );
  }
}

export default HomeContent;
