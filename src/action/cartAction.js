export const addtoCart = (pizza, quantity, varient) => (dispatch) => {
  var cartitem = {
    name: pizza.name,
    _id: pizza._id,
    image: pizza.image,
    varient: pizza.varient,
    quantity: pizza.quantity,
    prices: pizza.prices,
    price: pizza.prices[0][varient] * quantity,
  };

  dispatch({ type: "ADD_TO_CART", payload: cartitem });
};
