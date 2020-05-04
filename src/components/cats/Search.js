import React, { useState, useContext } from "react";
import CatContext from "../../context/cat/catContext";

const Search = () => {
  const catContext = useContext(CatContext);
  const { clearSearch, searchCats, searchLoad } = catContext;

  const [text, setText] = useState("");

  const changeFn = e => {
    setText(e.target.value);
  };

  const submitFn = e => {
    e.preventDefault();
    if (text === "") alert("Enter something to search");
    else searchCats(text);
    setText("");
  };

  const clearSearchFn = () => {
    clearSearch();
  };

  return (
    <div className="searchBar">
      <form onSubmit={submitFn}>
        <input
          type="text"
          placeholder="Search by name"
          name="search"
          value={text}
          onChange={changeFn}
        />
        <input type="submit" value="Search" />
      </form>
      {searchLoad && (
        <button style={clearStyle} onClick={clearSearchFn}>
          Clear Search
        </button>
      )}
    </div>
  );
};

const clearStyle = {
  background: "#ddd",
  fontSize: "16px",
  height: "45px",
  width: "180px",
  border: "none",
  borderRadius: "5px",
  marginTop: "3vh",
  cursor: "pointer"
};

export default Search;
