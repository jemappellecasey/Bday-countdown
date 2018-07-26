import React, { Component } from 'react';

class Clock extends Component {
    render() {
        return (
            <div className='clock'>
                <div className="clock__days">
                    <label className="clock__title">Days</label>
                    <label className="clock__amount">20</label>
                </div>
                <div className="clock__hrs">
                    <label className="clock__title">Hours</label>
                    <label className="clock__amount">20</label>
                </div>
                <div className="clock__min">
                    <label className="clock__title">Minuits</label>
                    <label className="clock__amount">20</label>
                </div>
                <div className="clock__sec">
                    <label className="clock__title">Seconds</label>
                    <label className="clock__amount">20</label>
                </div>
            </div>
          )
    }
}

export default Clock;