import React, { Component } from 'react';
import { Data } from '../assets';

const discount = Data.discount;


class OrderSummary extends Component{
  
  constructor(props){
    super(props)
    
    this.subtotal = (props)=>{
      var total = 0;
      props.map(item => {
        total += item.qty * item.price
      })
      return total
    }

    this.discount = (props)=>{
      var total = 0;
      props.map(item => {
        total += item.qty * item.price
      })

      if(total > discount.minTotal){
        return ((total * discount.discountPercentage)/100)
      }
    }


    this.cartitems = (props)=>{
      var total = 0;
      props.map(item => {
        total += item.qty
      })
        return total;
    }

    this.total = (subtotal, discount)=>{
      var delivery = (this.props.pin && this.props.pin.deliveryPrice > 0)?this.props.pin.deliveryPrice:0
      if(subtotal > discount){
        return delivery + (subtotal - discount);
      }else{
        return 0;
      }
    }
  }
  
  render(){
    return(
      <div className="order-summary">
        <div className="title">
          Order Summary ({this.cartitems(this.props.data)} Items)
        </div>

        <ul>
          <li>
            <span>Subtotal</span>
            <span>{this.subtotal(this.props.data)} $</span>
          </li>
          <li>
            <span>Total Discount</span>
            <span>-{this.discount(this.props.data)} $</span>
          </li>
          <li>
            <span>Standard Shipping</span>
            <span>{(this.props.pin && this.props.pin.deliveryPrice > 0)?this.props.pin.deliveryPrice +' $':'Free'}</span>
          </li>
          <li className="order-total-wrap">
            <span>Order Total</span>
            <span className="order-total">{ this.total(this.subtotal(this.props.data), this.discount(this.props.data) ) } $</span>
          </li>

          <li className="order-total-container">
            <span className="continue-shopping">Continue Shopping</span>
            <span className="order-checkout">Checkout</span>
          </li>
        </ul>
      </div>
    )
  }
}

export default OrderSummary