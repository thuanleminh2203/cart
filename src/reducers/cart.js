import * as types from "./../constant/ActionType";

var data = JSON.parse(localStorage.getItem('CART'));
const cartInitialState = data ? data : [];

const cart = (state = cartInitialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
        var {product,quantity} = action;
        var index = findById(state, product.id);
        if(index !== -1){ // neu ton tai
              index = index - 1;
              state[index].quantity += 1 ;
             
        }else{
          localStorage.setItem('CART', JSON.stringify([...state,{
            product : product,
            quantity : quantity
          }]));
          return [...state,{
            product : product,
            quantity : quantity
          }]
          
        }

        localStorage.setItem('CART', JSON.stringify(state));

        return [...state];
    default:
      return [...state];
  }
};

var findById = (cart, id) =>{
      var index = -1;
      if(cart.length > 0){
        for(let i = 0; i < cart.length; i++){
          if(cart[i].product.id === id ){
            return id;
          }
        }
      }
      return index;
}

export default cart;
