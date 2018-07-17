import React, { Component } from 'react';
import BackButton from './BackButton'


class SchoolProf extends Component {
  constructor(props) {
        super(props);
        // console.log(222222222, props.match);
        this.schoolProfile = this.schoolProfile.bind(this);
        this.state = {
            schoolProfile: [],
            schoolID: props.match.params.schoolID,
        };
      } // end of CONSTRUCTOR

  componentWillReceiveProps(nextProps)
  {
          this.state.schoolID = nextProps.match.params.schoolID;
          // console.log(333333333, this.state.schoolID);
          this.schoolProfile();
  }

  schoolProfile(){
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
                  // console.log(987654, json);
          })


       setTimeout(function() {
                  fetch('/api/signup')
                        .then(res => res.json())
                        .then(schoolProfile => this.setState({schoolProfile}, () => console.log('schoolProfile fetched...', schoolProfile)));

                  //Start the timer
                  this.setState({render: true}) //After 1 second, set render to true
          }.bind(this), 1000)

    }  // end of SCHOOLPROFILE


  componentDidMount() {
          this.schoolProfile();
  }

  render() {
    return (

            <div className="sprof">
                <div>
                      <img src="https://picsum.photos/200/300"/>
                </div>
                <div className="schoolinfo">
                    <BackButton />
                    {this.state.schoolProfile.map(customer =>
                      <ul key={customer.id}>
                        <strong><li>Institution Name : {customer.institution_name}</li></strong>
                        {/* <li>id : {customer.id}</li> */}
                        <li>Canadian Ranking: {customer.ca_ranking}</li>
                        <li>World Ranking: {customer.wd_rank}</li>
                        <li>WebSite: <a href={customer.url} target="_blank">{customer.url}</a></li>
                        <li>Province: {customer.province}</li>
                      </ul>
                    )}
                </div>
                <p> {this.state.school} </p>
            </div>
    );    // end of RETURN
  }   // end of RENDER


}  // end of CLASS

export default SchoolProf;
