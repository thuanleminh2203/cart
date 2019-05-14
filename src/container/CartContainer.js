import React from "react";
import { connect } from "react-redux";
import Cart from './../components/Cart';
import * as Message from './../constant/Message';
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";

class CartContainer extends React.Component {
  render() {
    var { cart } = this.props;
    
    return (
      <Cart>
          {this.showCart(cart)}
          {this.showTotal(cart)}
      </Cart>
    );
  }
  showCart=(cart) => {
    var result = Message.MESS_CART_EMPTY;
    if(cart.length > 0){
      result = cart.map((item,index)=>{
        return (
          <CartItem key ={index} item={item} index={index} />
        )
      })
    }
    return result;
  }
  showTotal = (cart) => {
      if(cart.length > 0 ){
        return (
          <CartResult cart = {cart}/>
        )
      }
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(CartContainer);
