import { createContext, useEffect, useState } from "react";

const STORAGE_KEY = "favoritos";
export const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];

    try {
      return JSON.parse(stored);
    } catch (error) {
      console.warn("FavoritosContext: no se pudo parsear localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favoritos));
  }, [favoritos]);

  const agregarFavoritos = (elemento) => {
    setFavoritos((prev) => {
      if (prev.some((fav) => fav.id === elemento.id)) return prev;
      return [...prev, elemento];
    });
  };

  const quitarFavoritos = (id) => {
    setFavoritos((prev) => prev.filter((fav) => fav.id !== id));
  };

  return (
    <FavoritosContext.Provider
      value={{ favoritos, agregarFavoritos, quitarFavoritos }}
    >
      {children}
    </FavoritosContext.Provider>
  );
}
