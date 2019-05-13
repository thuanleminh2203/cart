import React from "react";
import Product from "./../components/Product";
import { connect } from "react-redux";
import Products from "../components/Products";

class ProductContainer extends React.Component {
  render() {
    var { product } = this.props;
    return (
      
          <Products>{this.showProduct(product)}</Products>
       
     
    );
  }

  showProduct(product) {
    var result = null;
    if (product.length > 0) {
      result = product.map((product, index) => {
        return <Product key={index} product={product} />;
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

export default connect(mapStateToProps)(ProductContainer);
