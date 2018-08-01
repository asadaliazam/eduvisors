import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faTrophy, faMedal } from '@fortawesome/free-solid-svg-icons';



class ListOfSchools extends Component {
  constructor() {
    super();
    this.state = {
      ListOfSchools: []
    };
  }

  componentDidMount() {
    fetch('/api/ListOfSchools')
      .then(res => res.json())
      .then(ListOfSchools => this.setState({ListOfSchools}, () => console.log('Customers fetched...', ListOfSchools)));
  }

  render() {
    return (
      <Card>
        <div className="CardHeader">
          <p>List of schools</p>
          <Link to="/HomePage/"><FontAwesomeIcon icon={faTimes} /></Link>
        </div>

        {this.state.ListOfSchools.map((ListOfSchools,index) =>

        <Card className="ListOfSchoolsCard">
                {/* <CardMedia
                      className="ListOfSchoolsCardMedia"
                      image='https://i0.wp.com/hifadhiafrica.org/wp-content/uploads/2017/01/default-placeholder.png'
                      title="Contemplative Reptile" /> */}
                      <div className="schRank">
                        Canada Rank:
                          <span><FontAwesomeIcon icon={faTrophy} /> {ListOfSchools.ca_ranking}</span>
                      </div>
                <CardContent className="ListOfSchoolsCardContent">
                      <Typography component="h2">
                        {ListOfSchools.institution_name}
                      </Typography>
                      <Typography component="p">
                        {ListOfSchools.province}, Canada
                      </Typography>
                      {/* <Typography component="p">
                        Canada Rank: {ListOfSchools.ca_ranking}
                      </Typography> */}
                      <Typography component="p">
                        <a href={ListOfSchools.url} target="_blank">{ListOfSchools.url}</a>
                      </Typography>
                      <CardActions>
                          <Button  color="primary" className="btn">
                              <Link to={'/HomePage/schoolProf/'+ListOfSchools.ca_ranking}> View Details</Link>
                          </Button>
                      </CardActions>
                </CardContent>
        </Card>
        )}
      </Card>
    );
  }
}

export default ListOfSchools;
