// import React, { useContext, useState } from "react";
// const OpenMenu = React.createContext()
// const OpenMenuUpdate = React.createContext()


// export function useOpenMenu(){
//   return useContext(OpenMenu)
// }

// export function useOpenMenuUpdate() {

//   return useContext(OpenMenuUpdate)
// }

// export function OpenMenuProvider({ children }) {
//   const [menuOpen, setMenuOpen] = useState(false);
//   // const [ cartItems, setCartItems]=[]


//   function menuToggleHandler(e) {
//     console.log("yaye")
//     e.preventDefault()
//           setMenuOpen((p) => !p);
          
//   };
  
//   // function cartToggleHandler(e) {
//   //   e.preventDefault()
//   //         setcartOpen((z) => !z);
          
//   // };

//   // function cartData() {
//   //   products.map((product) => {
//   //     return {
//   //       ...product
//   //     }
//   //   }) 
      
    
//   // }
//   // function AddtoCartToggleHandler(e) {
//   //   e.preventDefault()
//   //   setCartItems((t) => !t);
          
//   // };
//     return (
//       <OpenMenu.Provider value={menuOpen}>
//         <OpenMenuUpdate.Provider value={menuToggleHandler}>
//             {children}
//         </OpenMenuUpdate.Provider>
//       </OpenMenu.Provider>
//     )
//   }
