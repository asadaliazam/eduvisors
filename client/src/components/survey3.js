import React, { Component } from 'react';
import '../styles/survey1.css';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'



class Survey3 extends Component {
  constructor() {
    super();
    this.state = {
      tui: 0,
      col: 0,
      rank: 0,
      emp: 0,
      obj: {0: 'Low', 1: 'High', 0.5: 'Medium'}
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
      <div className="first-question">
      <p> How much do you care about Tuition fees? </p>
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
      </div>

      <div className="second-question">
      <p> Does cost of living your destination college? </p>
        <Slider
        value={parseFloat(col)}
        min={0.1}
        max={1.0}
        step={0.1}
        tooltip={true}
        orientation="horizontal"
        onChange={this.handleOnChangeCol}
      />
      </div>

      <div className="third-question">
      <p> Does Rank choosing your destination college? </p>
        <Slider
        value={parseFloat(rank)}
        min={0.1}
        max={1.0}
        step={0.1}
        tooltip={true}
        orientation="horizontal"
        onChange={this.handleOnChangeRank}
      />
      </div>

      <div className="fourth-question">
      <p> Does Employment choosing your destination college? </p>
        <Slider
        value={parseFloat(emp)}
        min={0.1}
        max={1.0}
        step={0.1}
        tooltip={true}
        orientation="horizontal"
        onChange={this.handleOnChangeEmp}
      />
      </div>

      <button onClick={this.saveData.bind(this)} >
          Save Responses
        </button>

      </div>
    );
  }
}

export default Survey3;
