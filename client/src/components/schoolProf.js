import React, { Component } from 'react';
import BackButton from './BackButton'
import Snowfall from './snowfall';
import TuitionGraph from './TuitionGraph';

// import CostOfLivingGraph from './costOfLivingGraph';


class SchoolProf extends Component {
  constructor(props) {
        super(props);
        // console.log(222222222, props.match);
        this.schoolProfile = this.schoolProfile.bind(this);
        this.getFile = this.getFile.bind(this);
        this.state = {
            schoolProfile: [],
            schoolID: props.match.params.schoolID,
            province: 'bc',
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
      let fileName = Math.round(Math.random()*7)+1
      return require(`./img/${fileName}.jpg`);
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

            <div className="sprof">
                <div className="schoolImg">
                    <BackButton />
                    <img src={this.state.fileName} alt="Educational Institution"/>
                </div>
                <div className="schoolinfo">
                    {this.state.schoolProfile.map(customer =>
                      <ul key={customer.id}>
                        <strong><li>Institution Name : {customer.institution_name}</li></strong>
                        <br/>
                        <li>Canadian Ranking: {customer.ca_ranking}</li>
                        <li>World Ranking: {customer.wd_rank}</li>
                        <li>WebSite: <a href={customer.url} target="_blank">{customer.url}</a></li>
                        <li>Province: {customer.province}</li>
                      </ul>
                    )}
                </div>
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
                {/* <p> {this.state.school} </p> */}
                <Snowfall province={this.state.province} type={this.state.type} />
                <TuitionGraph province={this.state.province} />

                {/* <CostOfLivingGraph province={this.state.province} /> */}
            </div>
    );    // end of RETURN
  }   // end of RENDER


}  // end of CLASS

export default SchoolProf;
