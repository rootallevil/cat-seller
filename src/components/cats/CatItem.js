import React, { useEffect, useContext } from "react";
import CatContext from "../../context/cat/catContext";

const CatItem = ({ match }) => {
  const catContext = useContext(CatContext);
  const { getCat, load, cat } = catContext;

  useEffect(() => {
    getCat(match.params.id);
    // eslint-disable-next-line
  }, []);

  if (load) {
    const { name, desc, img } = cat;
    return (
      <div className="catDesc">
        <img src={img} alt={name} />
        <div className="aboutCat">
          <h1>{name}</h1>
          <p>{desc}</p>
        </div>
      </div>
    );
  } else return <div className="catDesc">Cat missing!</div>;
};

export default CatItem;
