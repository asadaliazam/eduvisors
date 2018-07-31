import React, { Component } from 'react';

class SchoolRankGraphList extends Component {

  constructor(props) {
    super(props);
    this.fetchFromDatabase = this.fetchFromDatabase.bind(this);
    this.state = {
      province: props.province,
      schoolRankData: [],
};

    };



  componentDidMount()
  {
    this.fetchFromDatabase();
  }
  fetchFromDatabase()
  {
    let reqBody =
    {
      province: this.state.province
    }

    fetch("/api/SchoolRankGraph", {
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
        this.setState({schoolRankData:(json)}, function()
      {

      });
      })
  }

  componentWillReceiveProps(nextProps)
  {
    this.setState({province: nextProps.province}, this.fetchFromDatabase);
  }

  componentDidUpdate()
  {


  }



  // VIEW
  render() {
    const listItems = this.state.schoolRankData.map((data) =>
  <li key={data.institution_name}> {data.institution_name} - {data.ca_ranking}</li>

);
    return (
      <div>
        <h2>School Rank Graph</h2>
        {/* <p> {this.state.province}</p> */}
        <ul>
          {listItems}
        </ul>

      </div>
    );
  }
}

export default SchoolRankGraphList;
