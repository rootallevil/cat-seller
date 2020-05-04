import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CatContext from "../../context/cat/catContext";

const Cats = () => {
  const catContext = useContext(CatContext);
  const { cats, addToCart } = catContext;

  const addToCartFn = id => {
    addToCart(id);
  };

  return (
    <div className="catsContainer">
      {cats.map(cat => (
        <div className="catCard" key={cat.id}>
          <img src={cat.img} alt="Cat" />
          <h2>{cat.name}</h2>
          <Link to={`/cats/${cat.id}`}>
            <button>Know More</button>
          </Link>
          <br />
          <button style={catDed} onClick={() => addToCartFn(cat.id)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

const catDed = {
  background: "#005c69"
};

export default Cats;
