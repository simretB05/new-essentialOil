import React, { useContext, useState } from "react";

const OpenMenu = React.createContext()
const OpenMenuUpdate = React.createContext()



export function useOpenMenu(){
  return useContext(OpenMenu)
}

export function useOpenMenuUpdate() {

  return useContext(OpenMenuUpdate)
}

export function OpenMenuProvider({ children }) {
  const [menuOpen, setMenuOpen ,setcartOpen] = useState(false);

  function menuToggleHandler(e) {
    e.preventDefault()
          setMenuOpen((p) => !p);
          
  };
  function cartToggleHandler(e) {
    e.preventDefault()
          setcartOpen((z) => !z);
          
  };
  
    return (
      <OpenMenu.Provider value={menuOpen}>
        <OpenMenuUpdate.Provider value={menuToggleHandler}>
            {children}
        </OpenMenuUpdate.Provider>
      </OpenMenu.Provider>
    )
  }
