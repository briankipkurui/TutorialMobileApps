import { createContext, useState } from "react";


export const FavoritesContext = createContext({
  ids: [],
  addFavoute: (id) => { },
  removeFavourite: (id) => { }
})

function FavouritesContextProvider({ children }) {
  const [favouriteMealIds, setFavouriteMealIds] = useState([])

  function addFavoute(id) {
    setFavouriteMealIds((currentFavIds) => [...currentFavIds,id])
  }

  function removeFavourite(id) {
    setFavouriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id))
  }

  const value = {
    ids: favouriteMealIds,
    addFavoute: addFavoute,
    removeFavourite: removeFavourite
  }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}

export default FavouritesContextProvider