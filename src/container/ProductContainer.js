import React from "react";
import Product from "./../components/Product";
import { connect } from "react-redux";
import Products from "../components/Products";
import {actAddToCart, actChangeMess} from './../actions/index';

class ProductContainer extends React.Component {
  render() {
    var { product } = this.props;
    return (
          <Products>{this.showProduct(product)}</Products>
    );
  }

  showProduct(product) {
    var result = null;
    var {onAddToCart, onChangeMess} = this.props;
    if (product.length > 0) {
      result = product.map((product, index) => {
        return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMess = {onChangeMess}/>;
      });
    }
    return result;
  }
}

const mapStateToProps = state => {
  return {
    product: state.product
  };
};

const  mapDispatchToProps = (dispatch,props ) => {
  return {
    onAddToCart: (product) => {
      dispatch(actAddToCart(product,1));
    },
    onChangeMess : (mess) => {
      dispatch(actChangeMess(mess));
    }

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductContainer);
