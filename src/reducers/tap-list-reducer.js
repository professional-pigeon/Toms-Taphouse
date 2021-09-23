export default (state = {}, action) => {
  const { name, brand, price, quantity, abv, id } = action;
  switch (action.type) {
  case 'ADD_BEER':
    return Object.assign({}, state, {
      [id]: {
        name: name,
        brand: brand,
        price: price,
        quantity: quantity,
        abv: abv,
        id: id
      }
    });
  case 'DELETE_BEER':
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};