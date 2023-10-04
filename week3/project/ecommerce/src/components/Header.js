import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <ul className="navbar">
      <div className="navbar-left">
        <li>
          <h1>Fake Ecommerce</h1>
        </li>
      </div>
      <div className="navbar-right">
        <Link to="/">
          <li>Products</li>
        </Link>
        <Link to="/favourites">
          <li>Favourites</li>
        </Link>
      </div>
    </ul>
  );
}
