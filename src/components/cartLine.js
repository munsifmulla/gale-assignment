import React,{Component} from 'react';

class CartLine extends Component{

    render(){

        return(
            <div className="cart-line">
               <div className="cart-line-item active">
                   <div className="icon"></div>
                   <div className="text">Shopping Cart</div>
               </div>

               <div className="cart-line-item">
                   <div className="icon"></div>
                   <div className="text">Order Items</div>
               </div>

               <div className="cart-line-item">
                   <div className="icon"></div>
                   <div className="text">Make Payment</div>
               </div>
            </div>
        )
    }
}

export default CartLine
