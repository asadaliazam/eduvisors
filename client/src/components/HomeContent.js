import React, { Component } from 'react';

import Snowfall from './snowfall';
import EmploymentGraph from './employmentGraph';
import CostOfLivingGraph from './costOfLivingGraph';
import TuitionGraph from './TuitionGraph';
import SchoolRankGraphList from './SchoolRankGraphList';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import InterestingFacts from './InterestingFacts';



//
// const styles = {
//   avatar: {
//     margin: 10,
//   },
//   orangeAvatar: {
//     margin: 10,
//     color: '#fff',
//     backgroundColor: deepOrange[500],
//   },
//   purpleAvatar: {
//     margin: 10,
//     color: '#fff',
//     backgroundColor: deepPurple[500],
//   },
//   row: {
//     display: 'flex',
//     justifyContent: 'center',
//   },
// };

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
    // const classes = this.props;
    return (
          <div className="Content">
            {/* <div className="surveyLink">
                <p>Take the survey and we will find your matchmake university:</p>
                <Button  type="submit" variant="contained" color="primary" className="surveyButton">
                    <Link to="/HomePage/survey">Take Survey</Link>
                </Button>
            </div> */}


<<<<<<< HEAD

=======
>>>>>>> 2fb74b4a92bf837e0c502997f984ecd86274e79b
                <Card className="top-content">
                      <div class="CardHeader">Interesting Facts</div>
                      <CardContent className="CardContent">



                        <form onSubmit={this.handleSubmit}>
                            <div class="leftContent">

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
              {/* </div>   {/* end of TOP-CONTENT */}



              <div className="top-chart charts">


                <Card className="homePageCard">
                      <CardContent className="CardContent">
                          <Snowfall province={this.state.value} type={'snow'} />
                          {/* <Typography component="p">
                            Snowfall: {this.state.value}
                          </Typography> */}
                      </CardContent>
                </Card>
                </div>



                <div className="down-charts charts">
                  <Card className="homePageCard">
                        <CardContent className="CardContent">
                            <EmploymentGraph province={this.state.value} />
                            <Typography component="p">
                             {/* {this.state.value} */}
                            </Typography>
                        </CardContent>
                  </Card>

                  <Card className="homePageCard">
                        <CardContent className="CardContent">
                            <CostOfLivingGraph province={this.state.value} />
                            <Typography component="p">
                               {/* {this.state.value} */}
                            </Typography>
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
                </div> {/* end of DOWN-CHARTS */}

          </div>

    );
  }
}

export default HomeContent;
