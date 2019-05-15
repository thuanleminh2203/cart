import React from "react";
import * as message from './../constant/Message';

class CartItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quantity : 1
    }
  }
  render() {
      var {item} = this.props;
      var {quantity} = item.quantity > 0 ? item : this.state;
      console.log(quantity)
    return (
      <tr>
        <th scope="row">
          <img
            src={item.product.image}
            alt={item.product.name}
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{quantity} </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label onClick={() =>this.onUpdateQuantity(item.product, item.quantity - 1)}
              className="btn btn-sm btn-primary  btn-rounded waves-effect waves-light"
            >
              <a>—</a>
            </label>
            <label onClick={() =>this.onUpdateQuantity(item.product, item.quantity + 1)}
              className="btn btn-sm btn-primary  btn-rounded waves-effect waves-light"
            >
              <a>+</a>
            </label>
          </div>
        </td>
        <td>{item.product.price*item.quantity}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
            onClick={() => this.onDeleteProduct(item.product) }
          >
            X
          </button>
        </td>
      </tr>
    );
  }
  onUpdateQuantity = (product,quantity) =>{
    if(quantity > 0){
      this.setState({
        quantity : quantity
      })
      this.props.onUpdateProduct(product,quantity);
    }
  }
  onDeleteProduct(product){
        var {onDeleteProduct,onChangeMessDelete} = this.props;
        onDeleteProduct(product);
        onChangeMessDelete(message.MESS_DELETE_SUCCESS)

  }
}
export default CartItem;
