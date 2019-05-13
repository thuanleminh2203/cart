import React from 'react';
import Product from './Product';
import {connect} from 'react-redux';


showProduct(products){
  var result = null
  return result
}

function Products() {
  var {product} = this.props;
 

  return (
    <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
       <div className="row">
            {this.showProduct(product)}
        
       </div>
    </section>
      
      );
}


const mapStateToProps = (state) => {
  return {
    products: state.product
  }
}

export default connect(mapStateToProps) (Products);
