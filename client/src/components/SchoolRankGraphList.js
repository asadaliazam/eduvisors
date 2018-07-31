import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
// import deepOrange from '@material-ui/core/colors/deepOrange';
// import deepPurple from '@material-ui/core/colors/deepPurple';



// const styles = {
//   avatar: {
//     margin: 10,
//   },
//
//   purpleAvatar: {
//     margin: 10,
//     color: '#fff',
//     backgroundColor: deepPurple[500],
//   },
//   row: {
//     display: 'flex',
//     justifyContent: 'center',
//   },
// };


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
  <li key={data.institution_name}><Avatar className="avatar">{data.ca_ranking}</Avatar> {data.institution_name}</li>

);
    return (
      <div className="SchoolRankGraphList">
        <h2>Top Universities in {this.state.province}:</h2>
        {/* <p> {this.state.province}</p> */}
        <ul class="schoolRankList">
          {listItems}
        </ul>


      </div>
    );
  }
}

export default SchoolRankGraphList;
