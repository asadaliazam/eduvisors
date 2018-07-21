import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'
import {Link} from 'react-router-dom'



class Survey1 extends Component {
  constructor() {
    super();
    this.state = {
      at: 0,
      snow: 0,
      rain: 0,
      obj: {0: "I don't care", 1: 'I care a lot'}
    };
  }

  handleOnChangeAt = (value) => {
      this.setState({
        at: value.toFixed(1)
      })
    }

    handleOnChangeSnow = (value) => {
        this.setState({
          snow: value.toFixed(1)
        })
      }

      handleOnChangeRain = (value) => {
          this.setState({
            rain: value.toFixed(1)
          })
        }

        saveData ()
        {
          let reqBody =
          {
            at: this.state.at,
            snow: this.state.snow,
            rain: this.state.rain
          }

            fetch("/api/storeUserDataSurvey1", {
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
    let { at } = this.state
    let {snow } = this.state
    let {rain} = this.state
    return (
      <div className="surveyDiv survey1">
            <div className="first-question question">
                    <p>How much do you care about living in a warm weather region?</p>
                    <Slider
                    value={parseFloat(at)}
                    min={0.1}
                    max={1.0}
                    step={0.1}
                    tooltip={true}
                    labels={this.state.obj}
                    orientation="horizontal"
                    onChange={this.handleOnChangeAt}
                  />
                  <p className="sValue">your value: {this.state.at} </p>
            </div>

            <div className="second-question question">
                  <p>What is your tolerance for living in a place with high snowfall?</p>
                    <Slider
                    value={parseFloat(snow)}
                    min={0.1}
                    max={1.0}
                    step={0.1}
                    tooltip={true}
                    orientation="horizontal"
                    onChange={this.handleOnChangeSnow}
                  />
                  <p className="sValue">your value: {this.state.snow} </p>
            </div>

            <div className="third-question question">
                  <p>What is your tolerance for living in a place with high rainfall?</p>
                    <Slider
                    value={parseFloat(rain)}
                    min={0.1}
                    max={1.0}
                    step={0.1}
                    tooltip={true}
                    orientation="horizontal"
                    onChange={this.handleOnChangeRain}
                  />
                  <p className="sValue">your value: {this.state.rain} </p>
            </div>

            <div className="surveyNav">
                  <button className="btn" onClick={this.saveData.bind(this)} >
                      Save
                  </button>

                  <Link to="/survey2"><p className="btn">Next</p></Link>
            </div>

      </div>
    );
  }
}

export default Survey1;
