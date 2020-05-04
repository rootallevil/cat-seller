import React from "react";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import CatItem from "./components/cats/CatItem";
import About from "./components/layouts/About";
import Cart from "./components/cats/Cart";
import Home from "./components/layouts/Home";
import NotFound from "./components/layouts/NotFound";

import CatState from "./context/cat/CatState";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <CatState>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/about" component={About} />
            <Route exact path="/cats/:id" component={CatItem} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </CatState>
  );
};

export default App;
