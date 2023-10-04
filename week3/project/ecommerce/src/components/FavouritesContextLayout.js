import React from "react";
import { CustomContextProvider } from "../context/FavouritesContext";

const FavouritesContextLayout = ({ children }) => {
  return <CustomContextProvider>{children}</CustomContextProvider>;
};

export default FavouritesContextLayout;
