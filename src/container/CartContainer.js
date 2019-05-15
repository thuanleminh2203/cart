import React from "react";
import { connect } from "react-redux";
import Cart from './../components/Cart';
import * as Message from './../constant/Message';
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import {actDeleteProduct,actMessDeleteProduct,actUpdateQuantityProduct} from './../actions/index'

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
    var result =<tr><td> {Message.MESS_CART_EMPTY}</td></tr>;
    if(cart.length > 0){
      result = cart.map((item,index)=>{
        return (
          <CartItem key ={index} item={item} index={index} 
          onUpdateProduct = {this.props.onUpdateProduct}
          onDeleteProduct = {this.props.onDeleteProduct} onChangeMessDelete = {this.props.onChangeMessDelete}/>
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

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteProduct: (product) => {
      dispatch(actDeleteProduct(product));
    },
    onChangeMessDelete : (mess) => {
      dispatch(actMessDeleteProduct(mess));
    },
    onUpdateProduct : (product,quantity) =>{
      dispatch(actUpdateQuantityProduct(product,quantity))
    }
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);
