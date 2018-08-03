import React, { Component } from 'react';
import Snowfall from './snowfall';
import TuitionGraph from './TuitionGraph';
import Card from '@material-ui/core/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faMedal } from '@fortawesome/free-solid-svg-icons';
import CostOfLivingGraph from './costOfLivingGraph';
import BackButton from './BackButton.js'
import EmploymentGraph from './employmentGraph';

class SchoolProf extends Component {
  constructor(props) {
        super(props);
        // console.log(222222222, props.match);
        this.schoolProfile = this.schoolProfile.bind(this);
        this.getFile = this.getFile.bind(this);
        this.state = {
            schoolProfile: [],
            schoolID: props.match.params.schoolID,
            province: 'BC',
            type: 'snow',
            fileName: 0
        };
      } // end of CONSTRUCTOR

  componentWillReceiveProps(nextProps)
  {
          // this.state.schoolID = nextProps.match.params.schoolID;
          this.setState({schoolID: nextProps.match.params.schoolID});
          // console.log(333333333, this.state.schoolID);
          this.schoolProfile();
  }

  getFile(){

    if (this.state.schoolID == 80)
    {
      return require(`./img/langara.jpg`);
    }
    else {
      let fileName = Math.round(Math.random()*7)+1
      return require(`./img/${fileName}.jpg`);
    }

  }

  schoolProfile(){
          let a = this.getFile();
          this.setState({fileName: a});
          let reqBody = {
          schoolID: this.state.schoolID
          };

      fetch("/api/schoolProf", {
          method: "POST",
          body: JSON.stringify(reqBody),
          headers: {
                    "Content-Type": "application/json"
                  }})
          .then((res) => {
                  if (res.ok){
                        return res.json();
                  } else {
                        throw new Error ('Something went wrong with your fetch');
                  }})
          .then((json) => {
                   console.log(987654, json);
                   this.setState({schoolProfile:json});
                   this.setState({province: json[0].two_letter})
          })

  } // end of SCHOOLPROFILE


  componentDidMount() {
          this.schoolProfile();
  }



  render() {
    return (

      <div className="schoolPage">
      <div className="CardHeader">
        <p>Institution Profile</p>
        <BackButton />
      </div>
            <Card className="sprof">
                <div className="schoolImg">
                    <img src={this.state.fileName} alt="Educational Institution"/>
                </div>
                <div className="schoolinfo">
                    {this.state.schoolProfile.map(customer =>
                      <ul key={customer.id}>
                        <strong><li>{customer.institution_name}</li></strong>
                        <li className="schDet">{customer.province}, Canada</li>
                        <li className="schDet"><a href={customer.url} target="_blank">{customer.url}</a></li>
                        <br/>
                        <li className="schRank">Canadian Ranking:
                          <span><FontAwesomeIcon icon={faTrophy} /> {customer.ca_ranking}</span></li>
                        <li className="schRank">World Ranking:
                          <span><FontAwesomeIcon icon={faMedal} />  {customer.wd_rank}</span></li>

                      </ul>
                    )}
                </div>

              </Card>
              <Card className="schoolinfo">
                    <CostOfLivingGraph province={this.state.province} />
              </Card>
              <Card className="schoolinfo">
                      <div className="schoolBtns">
                            <button onClick={() => this.setState({type: 'rain'})}>
                              Rain
                            </button>
                            <button onClick={() => this.setState({type: 'snow'})}>
                              Snow
                            </button>
                            <button onClick={() => this.setState({type: 'temp_high'})}>
                              High Temp
                            </button>
                            <button onClick={() => this.setState({type: 'temp_low'})}>
                              Low Temp
                            </button>
                            <button onClick={() => this.setState({type: 'temp_avg'})}>
                              Average Temp
                            </button>
                    </div>

                      <Snowfall province={this.state.province} type={this.state.type} />
                </Card>
                <Card className="schoolinfo">
                      <TuitionGraph province={this.state.province} />
                </Card>

                <Card className="schoolinfo">
                      <EmploymentGraph province={this.state.province} />
                </Card>

            </div>

    );    // end of RETURN
  }   // end of RENDER


}  // end of CLASS

export default SchoolProf;
