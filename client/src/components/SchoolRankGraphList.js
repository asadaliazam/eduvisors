import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';

class SchoolRankGraphList extends Component {
  constructor(props) {
        super(props);
        this.fetchFromDatabase = this.fetchFromDatabase.bind(this);
        this.state = {
          province: props.province,
          schoolRankData: [],
          };
    };

  componentDidMount(){
    this.fetchFromDatabase();
  }

  fetchFromDatabase(){
      let reqBody ={
          province: this.state.province
        }

      fetch("/api/SchoolRankGraph", {
          method: "POST",
          body: JSON.stringify(reqBody),
          headers: {
                    "Content-Type": "application/json" }})
      .then((res) => {
            if (res.ok){
              return res.json();
            } else {
              throw new Error ('Something went wrong with your fetch');}})
      .then((json) => { this.setState({schoolRankData:(json)}, function(){ }); })
  }

  componentWillReceiveProps(nextProps){
    this.setState({province: nextProps.province}, this.fetchFromDatabase);
  }

  // VIEW
  render() {

    const listItems = this.state.schoolRankData.map((data) =>
      <li key={data.institution_name}><Avatar className="avatar">#{data.ca_ranking}</Avatar> {data.institution_name}</li> );

    return (
      <div className="SchoolRankGraphList graphContainer">
            <h2>Top Universities in {this.state.province}:</h2>
            <ul className="schoolRankList">
                {listItems}
            </ul>
      </div>
    );
  }
}

export default SchoolRankGraphList;
