import { useState } from "react";
import prd from "./components/prd.json";
import "./components/style.css";

function App() {
  const [list, setList] = useState(prd);
  const [cart, setCart] = useState([]);
  const [cartN, setCartN] = useState(0);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  function handleCart(item) {
    setCart([...cart, item]);
    setCartN(cartN + 1);
  }

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleSort(e) {
    const order = e.target.value;
    setSortOrder(order);
    let sortedList = [...prd];

    if (order === "lowtohigh") {
      sortedList.sort((a, b) => a.price - b.price);
    } else if (order === "hightolow") {
      sortedList.sort((a, b) => b.price - a.price);
    }

    setList(sortedList);
  }

  const filteredList = list.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="container">
      {/* Product List */}
      <div className="box1">
        <h1>LIST OF PRODUCTS</h1>

        <input
          type="text"
          placeholder="Search products..."
          onChange={handleSearch}
          className="search"
        />

        <select onChange={handleSort} className="sort">
          <option value="default">Sort By</option>
          <option value="lowtohigh">Low to High</option>
          <option value="hightolow">High to Low</option>
        </select>

        <ul className="product-list">
          {filteredList.map((e, i) => (
            <li key={i}>
              <span>{e.name} - {e.category} - ₹{e.price}</span>
              <button onClick={() => handleCart(e)}>ADD TO CART</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Cart Section */}
      <div className="box2">
        <h1>
          My Cart <sup>{cartN}</sup>
        </h1>

        <ul className="cart-list">
          {cart.map((e, i) => (
            <li key={i}>
              {e.name} - {e.category} - ₹{e.price}
            </li>
          ))}
        </ul>

        <div className="form">
          <label>First Name</label>
          <input type="text" placeholder="Enter your name" />

          <label>Address</label>
          <input type="text" placeholder="Enter address" />

          <label>Phone No</label>
          <input type="text" placeholder="Enter phone number" />

          <button className="buy-btn">Buy Now</button>
        </div>
      </div>
    </main>
  );
}

export default App;