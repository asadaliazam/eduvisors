import React, { Component } from 'react';
import '../styles/survey1.css';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'



class Survey1 extends Component {
  constructor() {
    super();
    this.state = {
      at: 0,
      snow: 0,
      rain: 0,
      obj: {0: 'Low', 1: 'High', 0.5: 'Medium'}
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
      <div>
      <div className="first-question">
      <p> How much do you care about living in a warm weather region? </p>
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
      <h1> {this.state.at} </h1>
      </div>

      <div className="second-question">
      <p> Does average snowfall matter to you when choosing your destination college? </p>
        <Slider
        value={parseFloat(snow)}
        min={0.1}
        max={1.0}
        step={0.1}
        tooltip={true}
        orientation="horizontal"
        onChange={this.handleOnChangeSnow}
      />
      <h1> {this.state.snow} </h1>
      </div>

      <div className="third-question">
      <p> Does Rainfall matter to you when choosing your destination college? </p>
        <Slider
        value={parseFloat(rain)}
        min={0.1}
        max={1.0}
        step={0.1}
        tooltip={true}
        orientation="horizontal"
        onChange={this.handleOnChangeRain}
      />
      <h1> {this.state.rain} </h1>
      </div>

      <button onClick={this.saveData.bind(this)} >
          Save Responses
        </button>

      </div>
    );
  }
}

export default Survey1;
