import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { faUniversity } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class InterestingFacts extends Component {

  constructor(props) {
    super(props);
    this.sendValue = this.sendValue.bind(this);
    this.fetchFromDatabase = this.fetchFromDatabase.bind(this);
    this.state = {
      province: props.province,
      InterestingFactsData: [],
    };    // end of STATE
  }   // end of CONSTRUCTOR

  sendValue(index) {
    if (index === 1){
      return ( require(`./img/2.jpg`) )
    }
    else if (index === 2) {
      return ( require(`./img/1.jpg`) )
    }
    else if (index === 0) {
      return ( require(`./img/3.jpg`) )
    }
  }


  componentDidMount(){
        this.fetchFromDatabase();
  }

  fetchFromDatabase(){
        let reqBody = {
          province: this.state.province
        }
        fetch("/api/InterestingFactsData", {
                method: "POST",
                body: JSON.stringify(reqBody),
                headers: { "Content-Type": "application/json" }
              }).then((res) => { if (res.ok){
                                  return res.json();
                                } else {
                                  throw new Error ('Something went wrong with your fetch');}})
                .then((json) => {
                   this.setState({InterestingFactsData:(json)}, function() {
                     console.log(this.state.InterestingFactsData);
                  });
                 }) // end of THEN
  } // end of fetchFromDatabase

  componentWillReceiveProps(nextProps) {
    this.setState({province: nextProps.province}, this.fetchFromDatabase);
  }

  render() {
    console.log(this.state.InterestingFactsData[0]);

    return (
      <div className="InterestingFacts">
        {this.state.InterestingFactsData.map((InterestingFactsData,index) =>
          <ul key= {index} >
            <li className="InterestingDataList"> Number of Schools: <span><FontAwesomeIcon icon={faUniversity}/>{InterestingFactsData.numberOfSchools}</span></li>
            <li className="InterestingDataList"> Total Population: <span><FontAwesomeIcon icon={faUsers} /> {InterestingFactsData.totalPopulation}</span></li>
            <li className="InterestingDataList"> Capital City: <span><FontAwesomeIcon icon={faMapMarkerAlt} /> {InterestingFactsData.capitalCity}</span></li>
          </ul>
        )}
      </div>
    );
  }
}

export default InterestingFacts;
