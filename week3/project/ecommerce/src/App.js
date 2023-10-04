import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetailPage from "./pages/ProductDetailPage";
import { useState } from "react";
import ErrorComponent from "./components/ErrorComponent";
import FavouritesPage from "./pages/FavouritesPage";
import FavouritesContextLayout from "./components/FavouritesContextLayout";

function App() {
  const [apiError, setApiError] = useState();
  const errorHandler = (err) => setApiError(err);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            !apiError ? (
              <FavouritesContextLayout>
                <HomePage errorHandler={errorHandler} />
              </FavouritesContextLayout>
            ) : (
              <ErrorComponent apiError={apiError} />
            )
          }
        />
        <Route
          path="/product/:id"
          element={
            !apiError ? (
              <FavouritesContextLayout>
                <ProductDetailPage errorHandler={errorHandler} />
              </FavouritesContextLayout>
            ) : (
              <ErrorComponent apiError={apiError} />
            )
          }
        />
        <Route
          path="/favourites"
          element={
            !apiError ? (
              <FavouritesContextLayout>
                <FavouritesPage errorHandler={errorHandler} />
              </FavouritesContextLayout>
            ) : (
              <ErrorComponent apiError={apiError} />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
