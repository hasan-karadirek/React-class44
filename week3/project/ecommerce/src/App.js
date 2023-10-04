import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetailPage from "./pages/ProductDetailPage";
import { useState } from "react";
import ErrorComponent from "./components/ErrorComponent";
import FavouritesPage from "./pages/FavouritesPage";
import { CustomContextProvider } from "./context/FavouritesContext";

function App() {
  const [apiError, setApiError] = useState();
  const errorHandler = (err) => setApiError(err);
  return (
    <CustomContextProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              !apiError ? (
                <HomePage errorHandler={errorHandler} />
              ) : (
                <ErrorComponent apiError={apiError} />
              )
            }
          />
          <Route
            path="/product/:id"
            element={
              !apiError ? (
                <ProductDetailPage errorHandler={errorHandler} />
              ) : (
                <ErrorComponent apiError={apiError} />
              )
            }
          />
          <Route
            path="/favourites"
            element={
              !apiError ? (
                <FavouritesPage errorHandler={errorHandler} />
              ) : (
                <ErrorComponent apiError={apiError} />
              )
            }
          />
        </Routes>
      </Router>
    </CustomContextProvider>
  );
}

export default App;
