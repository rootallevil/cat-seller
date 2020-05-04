import {
  DELETE_CAT,
  SEARCH_CATS,
  CLEAR_SEARCH,
  GET_CAT,
  ADD_TO_CART
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_CAT:
      return {
        ...state,
        cat: state.cats.find(temp => temp.id == action.payload),
        load: true
      };

    case DELETE_CAT:
      return {
        ...state,
        cart: [...state.cart.filter(temp => temp.id !== action.payload)]
      };

    case ADD_TO_CART:
      return {
        ...state,
        cart: [
          ...state.cart,
          state.cats.find(temp => temp.id === action.payload)
        ]
      };

    case SEARCH_CATS:
      return {
        ...state,
        tempCats: state.cats,
        cats: state.cats.filter(temp => temp.name === action.payload),
        searchLoad: true
      };

    case CLEAR_SEARCH:
      return { ...state, searchLoad: false, cats: state.tempCats };

    default:
      return state;
  }
};
