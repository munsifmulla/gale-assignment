import React, { Component } from 'react';
import { locate, tick } from '../assets';


class CheckPin extends Component{
  constructor(props) {
    super(props);

    this.textInput = React.createRef();
    this.resetPin = this.resetPin.bind(this)
  }

resetPin(){
  this.textInput.current.value = "";
  this.props.resetpin();
  this.textInput.current.focus()
}

  render(){
    return(
      <div className="check-pin">
        <div className="title">
          Delivery Availability
        </div>
        <div className="pin-input">
          <img src = {locate} />
          <input type="text" maxLength="6" onChange={this.props.calcpin} ref={this.textInput}/>
          <span onClick={this.resetPin}>Change</span>
        </div>

        <div className="available-features">
          <div className={(this.props.pin && this.props.pin.deliveryPrice > 0)?'charged': 'free'}>
            <img src = {tick} />
            <span>Free Delivery</span>
          </div>

          <div className={(this.props.pin && this.props.pin.cashOnDelivery === false)?'charged': ''}>
            <img src = {tick} />
            <span>Cash on Delivery</span>
          </div>


          <div>
            <img src = {tick} />
            <span>Estimated Delivery time is {(this.props.pin && this.props.pin.estimatedDays)? this.props.pin.estimatedDays.min +" - "+this.props.pin.estimatedDays.max:' 3 - 5'} days</span>
          </div>
        </div>
      </div>
    )
  }
}

export default CheckPin