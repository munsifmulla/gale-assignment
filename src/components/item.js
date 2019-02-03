import React, { Component } from 'react'
import { MinusActive, Plus, Earphone, Delete } from '../assets'

class Item extends Component {

  render() {
    return (
      <div className={(this.props.data.gift) ? 'item gift' : 'item'}>
        <div className="mainItem">

          <div className="item-image">
            <img src={Earphone} alt="Earphone" />
          </div>

          <div className="item-description">
            <div className="itemName">
              <div className="item-desc">
                {this.props.data.gift &&
                  <div className="giftTag"> GIFT </div>
                }
                <div className="item-title">{this.props.data.name}</div>
                <div className="item-subtitle">{this.props.data.desc}</div>
              </div>
            </div>
            <div className="itemName">
              {this.props.data.price} $
          </div>
            <div className="itemName qty">
              <img src={MinusActive} alt="Minus Quantity" onClick={() => this.props.decrease(this.props.data.id)} />
              <span>{this.props.data.qty}</span>
              <img src={Plus} alt="Plus Quantity" onClick={() => this.props.increase(this.props.data.id)} />
            </div>
            <div className="itemName delete">
              {(this.props.data.qty * this.props.data.price)} $
   
           <img src={Delete} alt="Delete" onClick={() => this.props.delete(this.props.data.id)} />
            </div>
          </div>

        </div>

        {this.props.data.gift &&

          <div className="giftItem">
          <div className="item-image">
              <img src={Earphone} alt="Earphone" />
            </div>
            
            <div className="item-description">
            <div className="itemName">
              <div className="item-desc">
                <div className="item-title">{this.props.data.gift.name}</div>
                <div className="item-subtitle">{this.props.data.gift.desc}</div>
              </div>
            </div>
            <div className="itemName">
              {this.props.data.gift.price} $
              </div>
            <div className="itemName qty"></div>
            <div className="itemName"></div>
          </div>
          </div>
        }
      </div>
    )
  }
}

export default Item