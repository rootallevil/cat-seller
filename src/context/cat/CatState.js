// For all the actions
import React, { useReducer } from "react";
import CatContext from "./catContext";
import CatReducer from "./catReducer";
import {
  GET_CAT,
  SEARCH_CATS,
  DELETE_CAT,
  ADD_TO_CART,
  CLEAR_SEARCH
} from "../types";

const CatState = props => {
  const initialState = {
    cats: [
      {
        id: 1,
        name: "Whiskerson",
        img: "https://pngimg.com/uploads/cat/cat_PNG50497.png",
        desc: "A good pussy cat with exceptional cuteness and meowing skills."
      },
      {
        id: 2,
        name: "Puss in boots",
        img: "https://data.whicdn.com/images/119232616/original.png",
        desc: "A good pussy cat with exceptional cuteness and meowing skills."
      },
      {
        id: 3,
        name: "Purrfume",
        img:
          "https://www.freepngimg.com/thumb/cat/22193-3-adorable-cat-thumb.png",
        desc: "A good pussy cat with exceptional cuteness and meowing skills."
      },
      {
        id: 4,
        name: "Meowth",
        img: "https://www.freepngimg.com/thumb/cat/11-2-cat-png-thumb.png",
        desc: "A good pussy cat with exceptional cuteness and meowing skills."
      },
      {
        id: 5,
        name: "Fluffy",
        img: "https://pluspng.com/img-png/cat-png-cat-png-hd-1500.png",
        desc: "A good pussy cat with exceptional cuteness and meowing skills."
      },
      {
        id: 6,
        name: "Nibbi",
        img:
          "https://media.tenor.com/images/d13529b7951e066c49b9c55d9897786e/tenor.png",
        desc: "A good pussy cat with exceptional cuteness and meowing skills."
      }
    ],
    tempCat: [],
    cat: {},
    cart: [],
    load: false,
    searchLoad: false
  };

  const [state, dispatch] = useReducer(CatReducer, initialState);

  const getCat = async id => await dispatch({ type: GET_CAT, payload: id });

  const deleteCat = id => dispatch({ type: DELETE_CAT, payload: id });

  const addToCart = async id => {
    const check = state.cart.filter(temp => temp.id == id);
    if (check.length > 0) alert("Item already exists in the cart");
    else await dispatch({ type: ADD_TO_CART, payload: id });
  };

  const searchCats = async text =>
    await dispatch({ type: SEARCH_CATS, payload: text });

  const clearSearch = () => dispatch({ type: CLEAR_SEARCH });

  return (
    <CatContext.Provider
      value={{
        cats: state.cats,
        tempCat: state.tempCat,
        cat: state.cat,
        cart: state.cart,
        load: state.load,
        searchLoad: state.searchLoad,
        deleteCat,
        clearSearch,
        searchCats,
        getCat,
        addToCart
      }}
    >
      {props.children}
    </CatContext.Provider>
  );
};

export default CatState;
