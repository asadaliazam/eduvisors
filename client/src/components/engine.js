import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Engine extends Component {
  constructor() {
    super();
    this.state = {
      schoolNames: [],
      testvalue: 233
    };
  }

  componentDidMount() {
    fetch('/api/rankings')
      .then(res => res.json())
      .then(schoolNames => this.setState({schoolNames}, () => console.log('SchoolNames fetched...', schoolNames)));
  }


  render() {
    return (
      <div className = "score">
        <h3>Personalized <br/>Recommendations</h3>
              <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th className="col">Province</th>
                        {/* <th>Calculated</th> */}
                        {/*<th>Actual</th>*/}
                        <th className="col">WebSite</th>
                    </tr>
                </thead>
                <tbody>
                  {this.state.schoolNames.map(schoolName =>
                    <tr key={schoolName.toString()}><td>{schoolName.institutionName}</td><td className="col">{schoolName.province}</td> {/*<td>{schoolName.calculatedScore}</td>*/} {/*<td>{schoolName.actualScore}</td>*/}<td className="col"><Link to={'/HomePage/schoolProf/'+schoolName.schoolID}>click here</Link></td></tr>
                  )}
                  </tbody>
              </table>

              {/* <div className="surveyNav">
                <Link to="/MainContent"><p className="btn">Home</p></Link>
              </div> */}
      </div>
    );
  }
}

export default Engine;
