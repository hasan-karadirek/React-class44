import { createContext, useState } from "react";

export const FavouritesContext = createContext();

export function useFavouritesContext() {
  const [favContext, setFavContext] = useState([]);

  const handleFavContext = (id) => {
    setFavContext((previousValue) => {
      if (previousValue.includes(id)) {
        return previousValue.filter((pId) => pId !== id);
      } else {
        return [...previousValue, id];
      }
    });
  };
  return { favContext, handleFavContext };
}
export function CustomContextProvider({ children }) {
  const { favContext, handleFavContext } = useFavouritesContext();

  return (
    <FavouritesContext.Provider value={{ favContext, handleFavContext }}>
      {children}
    </FavouritesContext.Provider>
  );
}
