import React,{Component} from 'react';
import {Search, User, Cart} from '../assets'


class Header extends Component{

    render(){

        return(
            <header>
                <div className="container">
                    <div className="header-logo">
                        TEST
                    </div>

                    <div className="header-icons">
                        <p>Track Order</p>
                        <span>
                            <img src = {Search} />
                        </span>
                        <span>
                        <img src = {User} />
                        </span>
                        <span>
                        <img src = {Cart} />
                        </span>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header
