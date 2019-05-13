import React from "react";
import CartItem from "./CartItem";
import CartResult from "./CartResult";

class Cart extends React.Component {
    render(){
        // var {item} = this.props;
        return (
            <section className="section">
              <div className="table-responsive">
                <table className="table product-table">
                  <thead>
                    <tr>
                      <th />
                      <th>Sản Phẩm</th>
                      <th>Giá</th>
                      <th>Số Lượng</th>
                      <th>Tổng Cộng</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                      {this.props.children}
                     {/* { {item}
                    <CartItem />} */}
                  </tbody>
                  <CartResult />
                </table>
              </div>
            </section>
          );
    }
 
}

export default Cart;
