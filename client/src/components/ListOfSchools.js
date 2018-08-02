import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faTrophy} from '@fortawesome/free-solid-svg-icons';
import TextField from '@material-ui/core/TextField';



class ListOfSchools extends Component {
  constructor() {
    super();
    this.state = {
      ListOfSchools: [],
      search: '',
      ListOfSchoolsFromSearch: [],
      searched: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange = email => event => {
    this.setState({
      [email]: event.target.value,
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    let reqBody =
    {
      search: this.state.search
    }
    console.log(this.state.search);

    fetch("/api/SearchAction", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
                "Content-Type": "application/json"
            }
    }).then((res) => {
        if (res.ok){
          return res.json();
        } else {
          throw new Error ('Something went wrong with your fetch');
        }
      }).then((json) => {
        this.setState({ListOfSchoolsFromSearch:(json)}, function()
      {
          console.log(this.state.ListOfSchoolsFromSearch);
          this.setState({searched: 1});
      });
      })

  }

  componentDidMount() {
    fetch('/api/ListOfSchools')
      .then(res => res.json())
      .then(ListOfSchools => this.setState({ListOfSchools}, () => console.log('Customers fetched...', ListOfSchools)));
  }

  render() {
    if (this.state.searched === 0)
    {
      return (
        <Card>
          <div className="CardHeader">
            <p>List of schools</p>
            <Link to="/HomePage/"><FontAwesomeIcon icon={faTimes} /></Link>
          </div>
          <form onSubmit = {this.handleSubmit} className='inputFormForSearchingSchools' noValidate autoComplete="off">
                  <TextField
                    id="search"
                    label="search"
                    type="search"
                    className='inputTextFieldForSearchingSchools'
                    value={this.state.search}
                    onChange={this.handleChange('search')}
                    margin="normal"
                  />
                  <Button  type="submit" variant="contained" color="primary" className="btn">
                      Search
                  </Button>
          </form>
          {this.state.ListOfSchools.map((ListOfSchools,index) =>

                <Card className="ListOfSchoolsCard">
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
                            <Typography component="p" className="schURL">
                                    <a href={ListOfSchools.url} target="_blank">{ListOfSchools.url}</a>
                            </Typography>
                            <CardActions className="btnDetails">
                              <Button  type="submit" variant="contained" color="primary">
                                  <a href={'/HomePage/schoolProf/'+ListOfSchools.ca_ranking}> View Details</a>
                              </Button>
                            </CardActions>
                      </CardContent>
                </Card>
          )}
        </Card>
      );
    }
      else if (this.state.searched === 1)
      {
        return (
          <Card>
            <div className="CardHeader">
              <p>List of schools</p>
              <Link to="/HomePage/"><FontAwesomeIcon icon={faTimes} /></Link>
            </div>
            <form onSubmit = {this.handleSubmit} className='inputFormForSearchingSchools' noValidate autoComplete="off">
              <TextField
                id="search"
                label="search"
                type="search"
                className='inputTextFieldForSearchingSchools'
                value={this.state.search}
                onChange={this.handleChange('search')}
                margin="normal"
              />
              <Button  type="submit" variant="contained" color="primary" className="btn">
              Search
            </Button>
            </form>

            {this.state.ListOfSchoolsFromSearch.map((ListOfSchoolsFromSearch,index) =>

            <Card className="ListOfSchoolsCard">
                    {/* <CardMedia
                          className="ListOfSchoolsCardMedia"
                          image='https://i0.wp.com/hifadhiafrica.org/wp-content/uploads/2017/01/default-placeholder.png'
                          title="Contemplative Reptile" /> */}
                          <div className="schRank">
                            Canada Rank:
                              <span><FontAwesomeIcon icon={faTrophy} /> {ListOfSchoolsFromSearch.ca_ranking}</span>
                          </div>
                    <CardContent className="ListOfSchoolsCardContent">
                          <Typography component="h2">
                            {ListOfSchoolsFromSearch.institution_name}
                          </Typography>
                          <Typography component="p">
                            {ListOfSchoolsFromSearch.province}, Canada
                          </Typography>
                          {/* <Typography component="p">
                            Canada Rank: {ListOfSchools.ca_ranking}
                          </Typography> */}
                          <Typography component="p">
                            <a href={ListOfSchoolsFromSearch.url} target="_blank">{ListOfSchoolsFromSearch.url}</a>
                          </Typography>
                          <CardActions>
                              <Button  color="primary" className="btn">
                                  <Link to={'/HomePage/schoolProf/'+ListOfSchoolsFromSearch.ca_ranking}> View Details</Link>
                              </Button>
                          </CardActions>
                    </CardContent>
            </Card>
            )}
          </Card>
        );
      }


  }
}

export default ListOfSchools;
