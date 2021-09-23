import tapListReducer from '../../reducers/tap-list-reducer';

describe('tapListReducer', () => {

  let action;

  const currentState = {
    1: {name: "Juice Gose",
    brand: "Goose Island",
    price: 5.00,
    quantity: 5,
    abv: 4.6,
    id: 1},
    2: {name: "Flying Sparrow",
    brand: "Goose Island",
    price: 5.50,
    quantity: 108,
    abv: 4.8,
    id: 2},
  }

  const beerData = {
    name: "Juice Gose",
    brand: "Goose Island",
    price: 5.00,
    quantity: 5,
    abv: 4.6,
    id: 1
  };

  test('Should return default state if no action type is recognized', () => {
    expect(tapListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add a new beer', () => {
    const { name, brand, price, quantity, abv, id } = beerData;
    action = {
      type: 'ADD_BEER',
      name: name,
      brand: brand,
      price: price,
      quantity: quantity,
      abv: abv,
      id: id
    };
    expect(tapListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        price: price,
        quantity: quantity,
        abv: abv,
        id: id
      }
    });
  });

  test('Should successfully delete a beer', () => {
    action = {
      type: 'DELETE_BEER',
      id: 1
    };
    expect(tapListReducer(currentState, action)).toEqual({
      2: {name: "Flying Sparrow",
      brand: "Goose Island",
      price: 5.50,
      quantity: 108,
      abv: 4.8,
      id: 2},
    });
  });

});