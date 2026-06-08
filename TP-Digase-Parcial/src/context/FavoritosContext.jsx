import { createContext, useState } from "react";

export const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  const agregarFavoritos = (item) => {
    setFavoritos([...favoritos, item]);
  };

  const quitarFavoritos = (id) => {
    setFavoritos(favoritos.filter((fav) => fav.id !== id));
  };

  return (
    <FavoritosContext.Provider
      value={{ favoritos, agregarFavoritos, quitarFavoritos }}
    >
      {children}
    </FavoritosContext.Provider>
  );
}
