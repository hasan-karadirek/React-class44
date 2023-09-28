import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetailPage from "./pages/ProductDetailPage";
import { useState } from "react";
import ErrorComponent from "./components/ErrorComponent";

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
      </Routes>
    </Router>
  );
}

export default App;
