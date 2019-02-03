import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Data } from '../assets';
import cloneDeep from 'lodash/cloneDeep'

import {CheckPin, OrderSummary, Item} from './'

class Cart extends Component {
    constructor(props){
        super(props);

        this.state=({
            subTotal: 0,
            products: this.props.products,
            pin:{}
        })

        this.increase = this.props.increase.bind(this)
        this.decrease = this.props.decrease.bind(this)
        this.deleteItem = this.props.delete.bind(this)
        this.calculateDelivery = this.calculateDelivery.bind(this)
        this.resetPin = this.resetPin.bind(this)
    }

    calculateDelivery(e){
        var data = cloneDeep(Data.pincode), 
        regex = /^\d{4}$|^\d{6}$/; 
        var pin = e.target.value;

        if(pin.match(regex)){
            this.setState({
                pin: data[pin]
            })
        }else{
            console.log("fail")
        }
    }
    resetPin(){
        this.setState({
            pin: {}
        })
    }


    render() {

        return (
            <div className="container cart">
                <h1 >
                    Shopping Cart
                </h1>

                <div className="cart-table">
                    <div className="cart-title">
                        <div className="itemName">
                            Product
                        </div>
                        <div className="itemName">
                            Price
                        </div>
                        <div className="itemName">
                            Quantity
                        </div>
                        <div className="itemName">
                            Subtotal
                        </div>
                    </div>
                
                    <div className="cart-items">
                    {
                        this.props.products.map(item => {
                            if(item.id != "" ){
                                return (
                                    <Item data={item} increase={this.increase} decrease={this.decrease} delete={this.deleteItem}/>
                                )
                            }
                        })
                    }
                    </div>

                <div className="pin-summary">
                    <CheckPin calcpin={this.calculateDelivery} resetpin={this.resetPin} pin={this.state.pin}/>
                    <OrderSummary data={this.props.products} pin={this.state.pin}/>
                </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        products: state,
        total: state.total
    }
}

const increaseQty = (item_id) => {
    return {
      type : 'increase',
      payload: item_id
    }
  }


const decreaseQty = (item_id) => {
    return {
      type : 'decrease',
      payload: item_id
    }
  }

  const deleteItem = (item_id) => {
    return {
      type : 'delete',
      payload: item_id
    }
  }

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        increase: increaseQty,
        decrease: decreaseQty,
        delete: deleteItem
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Cart);