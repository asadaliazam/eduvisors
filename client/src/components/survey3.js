import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'
import {Link} from 'react-router-dom'
import Card from '@material-ui/core/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

class Survey3 extends Component {
  constructor() {
    super();
    this.state = {
      tui: 0,
      col: 0,
      rank: 0,
      emp: 0,
      obj: {0: 'Low', 1: 'High'}
    };
  }

  handleOnChangeTui = (value) => {
      this.setState({
        tui: value.toFixed(1)
      })
    }

    handleOnChangeCol = (value) => {
        this.setState({
          col: value.toFixed(1)
        })
      }

      handleOnChangeRank = (value) => {
          this.setState({
            rank: value.toFixed(1)
          })
        }

        handleOnChangeEmp = (value) => {
            this.setState({
              emp: value.toFixed(1)
            })
          }

        saveData ()
        {
          let reqBody =
          {
            tui: this.state.tui,
            col: this.state.col,
            rank: this.state.rank,
            emp: this.state.emp
          }

            fetch("/api/storeUserDataSurvey3", {
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
                console.log(json);
              })

            }


  render() {
    let { tui } = this.state
    let {col } = this.state
    let {rank} = this.state
    let {emp} = this.state
    return (
      <div>
      <div className="CardHeader">
        <p>Survey Questions: 3 / 4</p>
        <Link to="/HomePage"><FontAwesomeIcon icon={faTimes} /></Link>
      </div>
      <Card className="surveyDiv survey3">
      <div className="first-question question">
      {/* <p> How much do you care about Tuition fees? </p> */}
      <p>How much the cost of tuition impacts your study plans?</p>
        <Slider
        value={parseFloat(tui)}
        min={0.1}
        max={1.0}
        step={0.1}
        tooltip={true}
        labels={this.state.obj}
        orientation="horizontal"
        onChange={this.handleOnChangeTui}
      />
      <p className="sValue">your value: {this.state.tui} </p>
      </div>

      <div className="second-question question">
      {/* <p> Does cost of living your destination college? </p> */}
      <p>How much the cost of living impacts your study plans?</p>
        <Slider
        value={parseFloat(col)}
        min={0.1}
        max={1.0}
        step={0.1}
        tooltip={true}
        orientation="horizontal"
        onChange={this.handleOnChangeCol}
      />
      <p className="sValue">your value: {this.state.col} </p>
      </div>

      <div className="third-question question">
      {/* <p> Does Rank choosing your destination college? </p> */}
      <p>How important is the ranking of the institution you will apply for?</p>
        <Slider
        value={parseFloat(rank)}
        min={0.1}
        max={1.0}
        step={0.1}
        tooltip={true}
        orientation="horizontal"
        onChange={this.handleOnChangeRank}
      />
      <p className="sValue">your value: {this.state.rank} </p>
      </div>

      <div className="fourth-question question">
        <p>How much do you worry about the Employment Rate of the region where you will study?</p>
      {/* <p> Does Employment choosing your destination college? </p> */}
        <Slider
        value={parseFloat(emp)}
        min={0.1}
        max={1.0}
        step={0.1}
        tooltip={true}
        orientation="horizontal"
        onChange={this.handleOnChangeEmp}
      />
      <p className="sValue">your value: {this.state.emp} </p>
      </div>

      <div className="surveyNav">
            <button className="btn" onClick={this.saveData.bind(this)} >
                Save
            </button>

            <Link to="/HomePage/survey4"><p className="btn">Next</p></Link>
      </div>

    </Card>
      </div>
    );
  }
}

export default Survey3;
