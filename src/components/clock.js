import React, { Component } from 'react';

class Clock extends Component {
    render() {
        const time = this.props.timeRemaining;
        return (
            <div className='clock'>
                <div className="clock__days clock__box">
                    <label className="clock__title">Days</label>
                    <label className="clock__amount">{time.days}</label>
                </div>
                <div className="clock__hrs clock__box">
                    <label className="clock__title">Hours</label>
                    <label className="clock__amount">{time.hours}</label>
                </div>
                <div className="clock__min clock__box">
                    <label className="clock__title">Minutes</label>
                    <label className="clock__amount">{time.minutes}</label>
                </div>
                <div className="clock__sec clock__box">
                    <label className="clock__title">Seconds</label>
                    <label className="clock__amount">{time.seconds}</label>
                </div>
            </div>
          )
    }
}

export default Clock;