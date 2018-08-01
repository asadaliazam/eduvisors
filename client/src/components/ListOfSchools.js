import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'




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
      <div>
        <h2>List of schools</h2>

        {this.state.ListOfSchools.map((ListOfSchools,index) =>

        <Card className="ListOfSchoolsCard">
                <CardMedia
                      className="ListOfSchoolsCardMedia"
                      image='https://i0.wp.com/hifadhiafrica.org/wp-content/uploads/2017/01/default-placeholder.png'
                      title="Contemplative Reptile" />
                <CardContent className="ListOfSchoolsCardContent">
                      <Typography component="h2">
                        {ListOfSchools.institution_name}
                      </Typography>
                      <Typography component="p">
                        Province: {ListOfSchools.province}
                      </Typography>
                      <Typography component="p">
                        Canada Rank: {ListOfSchools.ca_ranking}
                      </Typography>
                      <Typography component="p">
                        Website: <a href={ListOfSchools.url} target="_blank">{ListOfSchools.url}</a>
                      </Typography>
                      <CardActions>
                          <Button  color="secondary">
                              <Link to={'/HomePage/schoolProf/'+ListOfSchools.ca_ranking}> View Full Details</Link>
                          </Button>
                      </CardActions>
                </CardContent>
        </Card>
        )}
      </div>
    );
  }
}

export default ListOfSchools;
