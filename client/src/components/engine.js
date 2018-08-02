import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class Engine extends Component {
  constructor() {
    super();
    this.sendValue = this.sendValue.bind(this);
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

  sendValue(index)
  {
    if (index === 1){
      return ( require(`./img/2.jpg`) )
    }
    else if (index === 2){
      return ( require(`./img/1.jpg`) )
    }
    else if (index === 0){
      return ( require(`./img/3.jpg`))
    }
  }


  render() {
    return (

      <div className = "resultsPage">
        <div className="CardHeader">
          <p>Personalized Recommendations</p>
          <Link to="/HomePage/"><FontAwesomeIcon icon={faTimes} /></Link>
        </div>

              {this.state.schoolNames.map((schoolNames,index) =>

              <Card className="resultPageCard">
                      <CardMedia
                            className="resultPageCardPicture"
                            image={this.sendValue(index)}
                            title="Contemplative Reptile" />
                      <CardContent className="CardContent">
                            <Typography component="h2">
                              {schoolNames.institutionName}
                            </Typography>
                            <Typography component="p">
                              Province: {schoolNames.province}
                            </Typography>
                            <CardActions>
                                <Button  color="primary" className="btn">
                                    <Link to={'/HomePage/schoolProf/'+schoolNames.schoolID}>Full Details</Link>
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
