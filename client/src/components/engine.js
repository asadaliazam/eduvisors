import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
<<<<<<< HEAD
import AboutPagePic from './img/aboutPagePic.jpg';
// import { withStyles } from '@material-ui/core/styles';
// import PropTypes from 'prop-types';

=======
// import AboutPagePic from './img/aboutPagePic.jpg';
>>>>>>> 07abfdaf914cc18cca57747293e4832d50f78469


class Engine extends Component {
  constructor() {
    super();
    this.state = {
      schoolNames: [],
      testvalue: 233
    };
  }

  componentDidMount() {
    fetch('/api/rankings')
      .then(res => res.json())
      .then(schoolNames => this.setState({schoolNames}, () => console.log('SchoolNames fetched...', schoolNames)));
  }


  render() {
    return (


      <div className = "resultsPage">
              <h2>Personalized Recommendations</h2>
              {this.state.schoolNames.map(schoolNames =>

                <Card className="resultPageCard">
                      <CardMedia
                        className="resultPageCardPicture"
                        image="https://picsum.photos/200/300/?random"
                        title="Contemplative Reptile" />
                      <CardContent className="CardContent">
                          <Typography component="h2">
                            {schoolNames.institutionName}
                          </Typography>
                          <Typography component="p">
                            Province: {schoolNames.province}
                          </Typography>

                          <CardActions>
                              <Button  color="primary">
                                  <Link to={'/HomePage/schoolProf/'+schoolNames.schoolID}> View Full Details</Link>
                              </Button>
                          </CardActions>
                      </CardContent>
                </Card>
              )}
        </div>

    );
  }
}

export default Engine;
