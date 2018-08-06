import React, { Component } from 'react';
import Picker from './picker';
import Button from './button';
import Clock from './clock';
import ChangeDate from './ChangeDate';
import LargeText from './largeText';

import moment from 'moment';
export default class App extends Component {

  constructor(props) {
    super(props)

    var timer = 0;

    this.state = {
      active: false,
      startDate: moment(),
      timeRemaining: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    }
  }

  handleChange= function(date) {
    console.log("APP JS WORKING")
    this.setState({
      startDate: date
    });
  }.bind(this)

  handleGenerate = function() {
    this.setState({active:true})
    // set the date we're counting down to
    var countDownDate = this.state.startDate.toDate().getTime();

    // Update the count every 1 second
    timer = setInterval(function() {

      // Get today's date and time
      var now = new Date().getTime();
    
      // Find distance between the Countdown date and now
      var distance = countDownDate - now;
    
      // Time Calculations
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      // Output the results in an element with id="demo"
      const time = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      
      
        const timeRemaining = {
          days,
          hours,
          minutes,
          seconds
        }
      this.setState({ active:true })
      console.log(this.state.timeRemaining);

      if (distance < 0) {
        clearInterval(x);

      }

    }, 1000);
  }.bind(this)
  
  renderItems = function() {
    if(this.state.active) {
      return [
        <Clock />,
        ChangeDate('Change Date', () => this.setState({ active: false })),
        LargeText('08/13'),
        <label className="grid__remaining">Remaining Until Your 22nd Birthday</label>
      ]
    } else {
      return [
        <Picker startDate={this.state.startDate} callback={(date) => this.handleChange(date)}/>,
        Button('Generate Countdown', () => this.handleGenerate())
      ]
    }
  }.bind(this)

  render() {
    return (
      <div className="grid">
        <h1 className="grid__title">Birthday Countdown</h1>

        <div className="grid__skew-light"></div>
        <div className="grid__skew-light-one"></div>
        <div className="grid__skew-light-two"></div>
        <div className="grid__skew-light-three-box"></div>
        <div className="grid__skew-dark"></div>


        { this.renderItems() }
        
      </div>
    );
  }
}
