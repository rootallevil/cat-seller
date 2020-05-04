import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CatContext from "../../context/cat/catContext";

const Cart = () => {
  const catContext = useContext(CatContext);
  const { cart, deleteCat } = catContext;

  const deleteCatFn = id => deleteCat(id);

  if (cart.length === 0)
    return <p style={{ height: "74.5vh" }}>Cart is empty!</p>;
  else
    return (
      <div className="cartContainer">
        {cart.map(cat => (
          <div className="catCard" key={cat.id}>
            <img src={cat.img} alt="Cat" />
            <h2>{cat.name}</h2>
            <Link to={`/cats/${cat.id}`}>
              <button>Know More</button>
            </Link>
            <button style={catDed} onClick={() => deleteCatFn(cat.id)}>
              Die Cat!
            </button>
          </div>
        ))}
      </div>
    );
};

const catDed = {
  background: "#005c69",
  marginLeft: "1vw"
};

export default Cart;
