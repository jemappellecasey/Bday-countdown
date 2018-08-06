import React, { Component } from 'react';
import Picker from './picker';
import Button from './button';
import Clock from './clock';
import ChangeDate from './ChangeDate';
import LargeText from './largeText';
export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      active: false
    }
  }

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
        <Picker />,
        Button('Generate Countdown', () => this.setState({ active: true }))
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
