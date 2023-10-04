import ProductList from "../components/ProductList";
import Header from "../components/Header";

export default function FavouritesPage({ errorHandler }) {
  return (
    <>
      <Header />
      <ProductList errorHandler={errorHandler} />
    </>
  );
}
