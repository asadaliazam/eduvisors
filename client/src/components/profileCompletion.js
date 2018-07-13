import React, { Component } from 'react';
import RC2 from 'react-chartjs2';
import '../styles/chart.css';

class ProfileCompletion extends Component {
  constructor(props) {
    super();
    this.state = {
      profile: [],

      total: 0,
      chartData :
      {
        labels: ["Profile"],
        datasets: [{
        label: false,
        backgroundColor: ['rgb(255, 255, 132)','rgb(255, 108, 132)'],
        borderColor: 'rgb(255, 255, 255)',
        data: []
        }]


      }

     //  name: '',
     // email: '',
     // password: '',
     // age: '',
     // country: ''

    };

    // this.onChange = {
    //     name: this.handleChange.bind(this, 'name'),
    //     email: this.handleChange.bind(this, 'email'),
    //     password: this.handleChange.bind(this, 'password'),
    //     age: this.handleChange.bind(this, 'age'),
    //       country: this.handleChange.bind(this, 'country')
    //
    //
    //   }
    //


  }



//   handleChange(name ,event) {
//     this.setState({ [name]: event.target.value });
// var total1 = 0 ;
//
//     if(this.state.name != null ){
//       total1 =   total1 + 25;
//
// this.state.total = total1;
//       console.log(400,  this.state.total);
//       this.state.chartData.datasets[0].data.push(70,30);
//       //console.log(405, this.state.chartData);
//     }
//
//   }



    componentDidMount() {
      fetch('/api/profileCompletion')
        .then(res => { return res.json()})
        .then(profile => {
          // console.log(100,profile[0].name);

          if(profile[0].name){
            this.state.total = this.state.total + 20;
            // console.log(10,  this.state.total);
          }

          if(profile[0].email){
            this.state.total = this.state.total + 20;

          }
          if(profile[0].password){
            this.state.total = this.state.total + 20;

          }
          if(profile[0].age){
            this.state.total = this.state.total + 20;

          }
          if(profile[0].country){
            this.state.total = this.state.total + 20;

          }

// console.log(11,  this.state.total);
  this.state.chartData.datasets[0].data.push(this.state.total,(100 - this.state.total));
          this.setState({profile})

      });

    }




  render() {
    return (
      <div>
        

        {/* <form>
          <label>

            Name:

            <input type="text" name="name" value={this.state.name}  onChange={this.onChange.name}
              />
          </label>
          <label>

            Email:
            <input type="text" name="email" value={this.state.email}  onChange={this.onChange.email}/>
          </label>
          <label>
            Password:
            <input type="text" name="password" value={this.state.password} onChange={this.onChange.password}/>
          </label>
          <label>
            Age:
            <input type="text" name="age" value={this.state.age}  onChange={this.onChange.age}/>
          </label>
          <label>
            Country:
            <input type="text" name="country" value={this.state.country}  onChange={this.onChange.country} />
          </label>
          <button type="button" onClick={this.handleLogin}>Login</button>
        </form> */}





        <div className = "profileCompletion">
          <RC2
            data = {this.state.chartData}
            options={{
         maintainAspectRatio: false,
         scaleShowVerticalLines: false,
         legend: {
              display: false
          },
         tooltips: {
            mode: 'index',
            axis: 'y'
        }
     }}
     type='doughnut'
            />
        </div>






      </div>
    );
  }
}

export default ProfileCompletion;
