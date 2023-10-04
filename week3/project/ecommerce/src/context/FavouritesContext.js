import { createContext, useState } from "react";

export const FavouritesContext = createContext({
  favContext: [],
  handleFavContext: function () {
    console.log("hasan");
  },
});

export function useFavouritesContext() {
  const [favContext, setFavContext] = useState([]);

  const handleFavContext = (id) => {
    setFavContext((previousValue) => {
      console.log(previousValue);
      if (previousValue.includes(id)) {
        previousValue.splice(previousValue.indexOf(id), 1);
        return previousValue;
      } else {
        previousValue.push(id);
        return previousValue;
      }
    });
    console.log(favContext, id);
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
