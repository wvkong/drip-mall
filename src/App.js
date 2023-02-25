import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Categories from "./Components/Categories";
import NavBar from "./Components/NavBar";
import Electronics from "./Pages/Electronics";
import Fashion from "./Pages/Fashion";
import Groceries from "./Pages/Groceries";
import Home from "./Pages/Home";
import Shoes from "./Pages/Shoes";
import Cart from "./Pages/Cart";
import Announcement from "./Components/Announcement";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const URL = "http://localhost:3000";

  useEffect(() => {
    fetch(`${URL}/products`)
      .then((resp) => resp.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  function addToCart(product) {
    if (!cart.includes(product)) {
      setCart([...cart, product]);
      fetch(`${URL}/cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
    }
  }
  console.log(products);
  return (
    <div className="bg-gray-300 overflow-hidden">
      <Announcement />
      <NavBar searchChange={setSearch} />
      <Categories />
      <Switch>
        <Route path="/" exact>
          <Home products={products} search={search} cartIt={addToCart} />
        </Route>
        <Route path="/electronics">
          <Electronics products={products} cartIt={addToCart} />
        </Route>
        <Route path="/fashion">
          <Fashion products={products} cartIt={addToCart} />
        </Route>
        <Route path="/shoes">
          <Shoes products={products} cartIt={addToCart} />
        </Route>
        <Route path="/groceries">
          <Groceries products={products} cartIt={addToCart} />
        </Route>
        <Route path="/cart">
          <Cart products={cart} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
