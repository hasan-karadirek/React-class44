import React from "react";

export default function Headers() {
  return (
    <ul className="navbar">
      <div className="navbar-left">
        <li>
          <h1>Products</h1>
        </li>
      </div>
      <div className="navbar-right">
        <li>
          <a href="/">Products</a>
        </li>

        <li>
          <a href="/favourites">Favourites</a>
        </li>
      </div>
    </ul>
  );
}
